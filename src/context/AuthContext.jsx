import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { setCurrentUserId, fetchAndSyncProgress, syncGuestProgressToUser } from '../utils/progress'

const AuthContext = createContext(null)
const GUEST_KEY = 'comoestest_guest_mode'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Listen to auth state changes from Supabase
  useEffect(() => {
    const syncSession = async (session) => {
      if (session) {
        const userId = session.user.id
        setCurrentUserId(userId)
        
        // If guest mode was active, merge scores into Supabase
        const guestActive = localStorage.getItem(GUEST_KEY) === 'true'
        if (guestActive) {
          await syncGuestProgressToUser(userId)
          localStorage.removeItem(GUEST_KEY)
        }
        
        await fetchAndSyncProgress(userId)
        
        setUser({
          id: userId,
          email: session.user.email,
          name: session.user.user_metadata?.display_name || session.user.email,
          isGuest: false
        })
      } else {
        setCurrentUserId(null)
        setUser(null)
      }
      setLoading(false)
    }

    // 1. Check if guest mode is already active
    const isGuest = localStorage.getItem(GUEST_KEY) === 'true'
    if (isGuest) {
      setCurrentUserId(null)
      setUser({ email: 'guest', name: 'Guest', isGuest: true })
      setLoading(false)
    }

    // 2. Fetch current session and subscribe to auth updates
    supabase.auth.getSession().then(({ data: { session } }) => {
      const guestActive = localStorage.getItem(GUEST_KEY) === 'true'
      if (session && !guestActive) {
        syncSession(session)
      } else {
        if (!guestActive) {
          setLoading(false)
        }
      }
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      const guestActive = localStorage.getItem(GUEST_KEY) === 'true'
      
      if (guestActive) {
        setCurrentUserId(null)
        setUser({ email: 'guest', name: 'Guest', isGuest: true })
        setLoading(false)
      } else if (session) {
        if (event === 'SIGNED_IN') {
          setLoading(true)
          await syncSession(session)
        } else {
          setCurrentUserId(session.user.id)
          setUser({
            id: session.user.id,
            email: session.user.email,
            name: session.user.user_metadata?.display_name || session.user.email,
            isGuest: false
          })
          setLoading(false)
        }
      } else {
        setCurrentUserId(null)
        setUser(null)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const login = async (email, password) => {
    localStorage.removeItem(GUEST_KEY)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return error.message
    return null
  }

  const signup = async (name, email, password) => {
    localStorage.removeItem(GUEST_KEY)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: name }
      }
    })
    if (error) return error.message
    return null
  }

  const forgotPassword = async (email) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin
    })
    if (error) return error.message
    return null
  }

  const verifyResetOtp = async (email, token) => {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'recovery'
    })
    if (error) return error.message
    return null
  }

  const updatePassword = async (newPassword) => {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword
    })
    if (error) return error.message
    return null
  }

  const guestLogin = () => {
    localStorage.setItem(GUEST_KEY, 'true')
    setUser({ email: 'guest', name: 'Guest', isGuest: true })
  }

  const logout = async () => {
    localStorage.removeItem(GUEST_KEY)
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, forgotPassword, verifyResetOtp, updatePassword, guestLogin, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
