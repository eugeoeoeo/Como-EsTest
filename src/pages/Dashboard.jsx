import { useNavigate } from 'react-router-dom'
import { getChapterProgress, getOverallProgress, getExamScore, resetAll } from '../utils/progress'
import { useToast } from '../context/ToastContext'

const chapters = [
  { id: 1, icon: '📜', title: 'Kasaysayan ng Wikang Espanyol sa Pilipinas', desc: 'History of the Spanish language in the Philippines' },
  { id: 2, icon: '🔤', title: 'Ang Alpabetong Espanyol at Pagbigkas', desc: 'The Spanish Alphabet and Pronunciation' },
  { id: 3, icon: '📝', title: 'Pagbuo ng Pangungusap sa Wikang Kastila', desc: 'Sentence Construction Rules in Spanish' },
  { id: 4, icon: '💬', title: 'Pag-uusap sa Wikang Kastila', desc: 'Basic Conversation in Spanish' },
  { id: 5, icon: '🔢', title: 'Los Números en Español', desc: 'Numbers in Spanish — Cardinals, Ordinals, Usage' },
  { id: 6, icon: '🎨', title: 'Los Colores en Español', desc: 'Colors in Spanish — Vocabulary and Grammar' },
  { id: 7, icon: '🦴', title: 'El Cuerpo Humano', desc: 'The Human Body — Parts and Vocabulary' },
  { id: 8, icon: '📋', title: 'Applied Language & Numerical Competence', desc: 'Numerical pattern analysis, conversions, error analysis, and dialogues' },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const toast = useToast()
  const overall = getOverallProgress()
  const exam = getExamScore()
  const completedChapters = [1,2,3,4,5,6,7,8].filter(i => getChapterProgress('ch'+i) === 100).length

  const handleReset = () => {
    if (confirm('Reset ALL progress? This cannot be undone.')) {
      resetAll()
      toast('All progress has been reset.', 'info')
      window.location.reload()
    }
  }

  return (
    <div className="fade-up">
      <div className="dashboard-hero">
        <h1>¡Bienvenido a Como esTest:(</h1>
        <p>Your comprehensive Spanish 101 course reviewer — master every lesson, ace every exam.</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value" style={{ color: 'var(--primary)' }}>{overall}%</div>
          <div className="stat-label">Overall Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: 'var(--gold)' }}>{completedChapters}/8</div>
          <div className="stat-label">Chapters Done</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: 'var(--green)' }}>{exam ? `${Math.round(exam.score/exam.total*100)}%` : '—'}</div>
          <div className="stat-label">Exam Score</div>
        </div>
        <div className="stat-card">
          <button className="btn btn-ghost btn-sm" onClick={handleReset}>🔄 Reset All</button>
          <div className="stat-label" style={{marginTop:8}}>Reset Progress</div>
        </div>
      </div>

      <h2 style={{ marginBottom: 16 }}>📚 Chapters</h2>
      <div className="chapter-grid">
        {chapters.map(ch => {
          const prog = getChapterProgress('ch' + ch.id)
          return (
            <div key={ch.id} className="chapter-card" onClick={() => navigate(`/chapter/${ch.id}`)}>
              <div className="chapter-card-icon">{ch.icon}</div>
              <h3>Chapter {ch.id}: {ch.title}</h3>
              <p>{ch.desc}</p>
              <div className="chapter-card-progress">
                <span>{prog}%</span>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${prog}%` }} /></div>
              </div>
            </div>
          )
        })}
        <div className="chapter-card" onClick={() => navigate('/exam')} style={{ borderColor: 'var(--gold)' }}>
          <div className="chapter-card-icon">🏆</div>
          <h3>Final Exam</h3>
          <p>100-question comprehensive exam covering all chapters</p>
          <div className="chapter-card-progress">
            <span>{exam ? `${exam.score}/${exam.total}` : 'Not taken'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
