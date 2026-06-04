import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'

export default function AuthScreen() {
  const [view, setView] = useState('login')
  const [forgotStep, setForgotStep] = useState('request') // 'request', 'otp', 'newPassword'
  const { login, signup, forgotPassword, verifyResetOtp, updatePassword, guestLogin } = useAuth()
  const toast = useToast()
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    otp: '',
    newPassword: '',
    confirmNewPassword: ''
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleLogin = async e => {
    e.preventDefault()
    const err = await login(form.email, form.password)
    if (err) toast(err, 'error')
    else toast('¡Bienvenido de vuelta!', 'success')
  }

  const handleSignup = async e => {
    e.preventDefault()
    if (form.password !== form.confirm) return toast('Passwords do not match', 'error')
    if (form.password.length < 6) return toast('Password must be at least 6 characters', 'error')
    const err = await signup(form.name, form.email, form.password)
    if (err) toast(err, 'error')
    else toast('¡Cuenta creada! Please check your email for confirmation.', 'success')
  }

  const handleGuest = () => { guestLogin(); toast('Continuing as guest', 'info') }

  const handleForgot = async e => {
    e.preventDefault()
    const err = await forgotPassword(form.email)
    if (err) {
      toast(err, 'error')
    } else {
      toast('Verification code sent to your email!', 'success')
      setForgotStep('otp')
    }
  }

  const handleVerifyOtp = async e => {
    e.preventDefault()
    const err = await verifyResetOtp(form.email, form.otp)
    if (err) {
      toast(err, 'error')
    } else {
      toast('Verification successful! Set your new password.', 'success')
      setForgotStep('newPassword')
    }
  }

  const handleUpdatePassword = async e => {
    e.preventDefault()
    if (form.newPassword !== form.confirmNewPassword) {
      return toast('Passwords do not match', 'error')
    }
    if (form.newPassword.length < 6) {
      return toast('Password must be at least 6 characters', 'error')
    }
    const err = await updatePassword(form.newPassword)
    if (err) {
      toast(err, 'error')
    } else {
      toast('¡Contraseña cambiada! Password changed successfully. Please log in.', 'success')
      setView('login')
      setForgotStep('request')
      setForm({ name: '', email: '', password: '', confirm: '', otp: '', newPassword: '', confirmNewPassword: '' })
    }
  }

  return (
    <div className="auth-screen">
      <div className="auth-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
      <div className="auth-container">
        <div className="auth-brand">
          <h1 className="auth-logo">Como esTest<span className="logo-sad">:(</span></h1>
          <p className="auth-tagline">Your Complete Spanish 101 Reviewer</p>
        </div>

        {view === 'login' && (
          <form className="auth-form fade-up" onSubmit={handleLogin}>
            <h2>Bienvenido de vuelta</h2>
            <p className="auth-subtitle">Sign in to continue your learning journey</p>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="tu@correo.com" required value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required value={form.password} onChange={e => set('password', e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-full">Iniciar Sesión</button>
            <div className="auth-links">
              <a onClick={() => { setView('forgot'); setForgotStep('request'); }}>Forgot password?</a>
              <span>Don't have an account? <a onClick={() => setView('signup')}>Sign up</a></span>
            </div>
            <div className="auth-divider"><span>or</span></div>
            <button type="button" className="btn btn-ghost btn-full" onClick={handleGuest}>Continue as Guest</button>
          </form>
        )}

        {view === 'signup' && (
          <form className="auth-form fade-up" onSubmit={handleSignup}>
            <h2>Crear Cuenta</h2>
            <p className="auth-subtitle">Start your Spanish 101 journey today</p>
            <div className="form-group">
              <label>Display Name</label>
              <input type="text" placeholder="Juan de la Cruz" required value={form.name} onChange={e => set('name', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="tu@correo.com" required value={form.email} onChange={e => set('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Min. 6 characters" required value={form.password} onChange={e => set('password', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="••••••••" required value={form.confirm} onChange={e => set('confirm', e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-full">Crear Cuenta</button>
            <div className="auth-links">
              <span>Already have an account? <a onClick={() => setView('login')}>Sign in</a></span>
            </div>
          </form>
        )}

        {view === 'forgot' && (
          <div className="auth-form fade-up">
            {forgotStep === 'request' && (
              <form onSubmit={handleForgot}>
                <h2>¿Olvidaste tu contraseña?</h2>
                <p className="auth-subtitle">Enter your email and we'll help you reset it</p>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="tu@correo.com" required value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Verification Code</button>
              </form>
            )}

            {forgotStep === 'otp' && (
              <form onSubmit={handleVerifyOtp}>
                <h2>Verificar Código</h2>
                <p className="auth-subtitle">Enter the 6-digit verification code sent to {form.email}</p>
                <div className="form-group">
                  <label>Verification Code</label>
                  <input type="text" placeholder="123456" maxLength={6} required value={form.otp} onChange={e => set('otp', e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary btn-full">Verify Code</button>
                <button type="button" className="btn btn-ghost btn-full" style={{ marginTop: '0.5rem' }} onClick={handleForgot}>Resend Code</button>
              </form>
            )}

            {forgotStep === 'newPassword' && (
              <form onSubmit={handleUpdatePassword}>
                <h2>Nueva Contraseña</h2>
                <p className="auth-subtitle">Set your new password below</p>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" placeholder="Min. 6 characters" required value={form.newPassword} onChange={e => set('newPassword', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input type="password" placeholder="••••••••" required value={form.confirmNewPassword} onChange={e => set('confirmNewPassword', e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary btn-full">Save and Login</button>
              </form>
            )}

            <div className="auth-links">
              <span>Remember your password? <a onClick={() => { setView('login'); setForgotStep('request'); }}>Sign in</a></span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
