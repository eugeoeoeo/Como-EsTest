import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ToastProvider } from './context/ToastContext'
import AuthScreen from './pages/AuthScreen'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ChapterView from './pages/ChapterView'
import ExamView from './pages/ExamView'

function AppRoutes() {
  const { user } = useAuth()
  if (!user) return <AuthScreen />
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chapter/:id" element={<ChapterView />} />
        <Route path="/exam" element={<ExamView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </AuthProvider>
  )
}
