import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getChapterProgress, getOverallProgress, getExamScore } from '../utils/progress'

const chapters = [
  { id: 1, icon: '📜', label: 'Ch 1: Kasaysayan' },
  { id: 2, icon: '🔤', label: 'Ch 2: Alpabeto' },
  { id: 3, icon: '📝', label: 'Ch 3: Pangungusap' },
  { id: 4, icon: '💬', label: 'Ch 4: Pag-uusap' },
  { id: 5, icon: '🔢', label: 'Ch 5: Números' },
  { id: 6, icon: '🎨', label: 'Ch 6: Colores' },
  { id: 7, icon: '🦴', label: 'Ch 7: Cuerpo' },
  { id: 8, icon: '📋', label: 'Ch 8: Competence' },
]

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const overall = getOverallProgress()

  const toggleTheme = () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('comoestest_theme', next)
  }

  const isDark = () => (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark'

  const go = path => { navigate(path); setSidebarOpen(false) }

  const isActive = path => location.pathname === path

  return (
    <div className="app-layout">
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-logo" onClick={() => go('/')}>Como esTest<span className="logo-sad">:(</span></h1>
          <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>
        <div className="sidebar-user">
          <div className="user-avatar">{(user?.name || 'G')[0].toUpperCase()}</div>
          <div className="user-info">
            <span className="user-name">{user?.name || 'Guest'}</span>
            <span className="user-progress-text">{overall}% Complete</span>
          </div>
        </div>
        <div className="sidebar-progress">
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${overall}%` }} /></div>
        </div>
        <ul className="sidebar-nav">
          <li className={`nav-item ${isActive('/') ? 'active' : ''}`} onClick={() => go('/')}>
            <span className="nav-icon">🏠</span><span className="nav-label">Dashboard</span>
          </li>
          <li className="nav-divider">Chapters</li>
          {chapters.map(ch => (
            <li key={ch.id} className={`nav-item ${isActive(`/chapter/${ch.id}`) ? 'active' : ''}`} onClick={() => go(`/chapter/${ch.id}`)}>
              <span className="nav-icon">{ch.icon}</span>
              <span className="nav-label">{ch.label}</span>
              <span className="nav-badge">{getChapterProgress('ch' + ch.id)}%</span>
            </li>
          ))}
          <li className="nav-divider">Assessment</li>
          <li className={`nav-item ${isActive('/exam') ? 'active' : ''}`} onClick={() => go('/exam')}>
            <span className="nav-icon">🏆</span>
            <span className="nav-label">Final Exam</span>
            <span className="nav-badge">{getExamScore() ? `${getExamScore().score}/${getExamScore().total}` : '—'}</span>
          </li>
        </ul>
        <div className="sidebar-footer">
          <button className="btn btn-ghost btn-sm" onClick={toggleTheme}>
            <span>{isDark() ? '☀️' : '🌙'}</span><span>{isDark() ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
          <button className="btn btn-ghost btn-sm" onClick={logout}>
            <span>🚪</span><span>Logout</span>
          </button>
        </div>
      </nav>
      {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}

      <main className="main-content">
        <header className="top-bar">
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(true)}>☰</button>
          <div className="top-bar-title">Como esTest:(</div>
          <div className="top-bar-actions">
            <button className="btn-icon" onClick={toggleTheme}>{isDark() ? '☀️' : '🌙'}</button>
          </div>
        </header>
        <div className="view-container">
          {children}
        </div>
      </main>
    </div>
  )
}
