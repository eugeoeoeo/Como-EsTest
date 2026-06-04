import { useNavigate } from 'react-router-dom'
import QuizEngine from '../components/QuizEngine'
import { examQuestions } from '../data/exam'

export default function ExamView() {
  const navigate = useNavigate()

  // Group by type: Multiple Choice & True/False first, then Identification (fill), then Translation/Error Correction
  const sortedQuestions = [
    ...examQuestions.filter(q => q.type === 'mc' || q.type === 'tf'),
    ...examQuestions.filter(q => q.type === 'fill'),
    ...examQuestions.filter(q => q.type === 'translate' || q.type === 'error')
  ]

  return (
    <div className="fade-up">
      <div className="chapter-header">
        <h1>🏆 Final Comprehensive Exam</h1>
        <p>Comprehensive exam covering all 7 chapters. Part 1: Multiple Choice & True/False, Part 2: Identification, Part 3: Translation & Error Correction.</p>
        <button className="btn btn-ghost btn-sm" style={{ marginTop: 12 }} onClick={() => navigate('/')}>← Back to Dashboard</button>
      </div>
      <QuizEngine questions={sortedQuestions} type="exam" chapter="exam" />
    </div>
  )
}
