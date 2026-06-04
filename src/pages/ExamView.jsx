import { useNavigate } from 'react-router-dom'
import QuizEngine from '../components/QuizEngine'
import { examQuestions } from '../data/exam'

export default function ExamView() {
  const navigate = useNavigate()
  return (
    <div className="fade-up">
      <div className="chapter-header">
        <h1>🏆 Final Comprehensive Exam</h1>
        <p>100 questions covering all 7 chapters. Focus: translation, conversation, and applied vocabulary.</p>
        <button className="btn btn-ghost btn-sm" style={{ marginTop: 12 }} onClick={() => navigate('/')}>← Back to Dashboard</button>
      </div>
      <QuizEngine questions={examQuestions} type="exam" chapter="exam" />
    </div>
  )
}
