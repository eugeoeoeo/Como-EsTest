import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { markLessonDone, isLessonDone, resetChapter, getChapterProgress, getScore } from '../utils/progress'
import { useToast } from '../context/ToastContext'
import QuizEngine from '../components/QuizEngine'
import { chapters } from '../data'

export default function ChapterView() {
  const { id } = useParams()
  const chNum = parseInt(id)
  const ch = chapters[chNum]
  const toast = useToast()
  const navigate = useNavigate()
  const [tab, setTab] = useState('lesson')
  const [, forceUpdate] = useState(0)
  const refresh = () => forceUpdate(n => n + 1)

  if (!ch) return <div className="lesson-card"><h2>Chapter not found</h2><button className="btn btn-ghost" onClick={() => navigate('/')}>← Back</button></div>

  const lessonDone = isLessonDone('ch' + chNum)
  const progress = getChapterProgress('ch' + chNum)

  const handleMarkDone = () => {
    markLessonDone('ch' + chNum)
    toast('Lesson marked as complete! ✅', 'success')
    refresh()
  }

  const handleReset = () => {
    if (confirm('Reset progress for this chapter?')) {
      resetChapter('ch' + chNum)
      toast('Chapter progress reset.', 'info')
      refresh()
    }
  }

  const tabs = [
    { key: 'lesson', label: '📖 Lesson' },
    { key: 'activity', label: '🎯 Activity' },
    { key: 'communicate', label: '💬 Communicate' },
    { key: 'quiz', label: '📝 Quiz' },
  ]

  return (
    <div className="fade-up">
      <div className="chapter-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1>{ch.icon} Chapter {chNum}: {ch.title}</h1>
            <p>{ch.description}</p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: '.85rem', color: 'var(--text-sec)' }}>{progress}%</span>
            <button className="btn btn-ghost btn-sm" onClick={handleReset}>🔄 Reset</button>
          </div>
        </div>
        <div className="progress-bar" style={{ marginTop: 16 }}>
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="chapter-tabs">
        {tabs.map(t => (
          <button key={t.key} className={`chapter-tab ${tab === t.key ? 'active' : ''}`} onClick={() => setTab(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'lesson' && (
        <div>
          {ch.lesson}
          <div className="lesson-complete-bar">
            <span>{lessonDone ? '✅ Lesson completed' : 'Mark this lesson as done when you\'re ready'}</span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {!lessonDone && <button className="btn btn-success btn-sm" onClick={handleMarkDone}>✅ Mark as Done</button>}
              <button className="btn btn-primary btn-sm" onClick={() => { setTab('activity'); window.scrollTo(0, 0); }}>Proceed to Activities →</button>
            </div>
          </div>
        </div>
      )}

      {tab === 'activity' && (
        <div>
          <QuizEngine questions={ch.activities} type="activity" chapter={'ch' + chNum} onComplete={refresh} />
          {getScore('ch' + chNum, 'activity').score !== null && (
            <div style={{ marginTop: 24, textAlign: 'right' }}>
              <button className="btn btn-primary btn-sm" onClick={() => { setTab('communicate'); window.scrollTo(0, 0); }}>Proceed to Communicate →</button>
            </div>
          )}
        </div>
      )}

      {tab === 'communicate' && (
        <div>
          <div style={{ marginBottom: 20, padding: 16, background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
            <h3>💬 Communicate Practice</h3>
            <p style={{ color: 'var(--text-sec)', fontSize: '.95rem', margin: '8px 0 0 0' }}>
              Apply this chapter's teachings in real conversations. Practice directly translating statements and building conversational speeches in Spanish.
            </p>
          </div>
          <QuizEngine questions={ch.communicate || []} type="communicate" chapter={'ch' + chNum} onComplete={refresh} />
          {getScore('ch' + chNum, 'communicate').score !== null && (
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-ghost btn-sm" onClick={() => { setTab('activity'); window.scrollTo(0, 0); }}>← Back to Activity</button>
              <button className="btn btn-primary btn-sm" onClick={() => { setTab('quiz'); window.scrollTo(0, 0); }}>Proceed to Quiz →</button>
            </div>
          )}
        </div>
      )}

      {tab === 'quiz' && (
        <div>
          <QuizEngine questions={ch.quiz} type="quiz" chapter={'ch' + chNum} onComplete={refresh} />
          {getScore('ch' + chNum, 'quiz').score !== null && (
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-ghost btn-sm" onClick={() => { setTab('communicate'); window.scrollTo(0, 0); }}>← Back to Communicate</button>
              {chNum < 8 ? (
                <button className="btn btn-primary btn-sm" onClick={() => { navigate(`/chapter/${chNum + 1}`); setTab('lesson'); window.scrollTo(0, 0); }}>Go to Chapter {chNum + 1} →</button>
              ) : (
                <button className="btn btn-success btn-sm" onClick={() => { navigate('/exam'); window.scrollTo(0, 0); }}>Take the Final Exam! 🏆</button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
