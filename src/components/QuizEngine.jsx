import { useState, useEffect, useRef, useMemo } from 'react'
import { speak } from '../utils/pronunciation'
import { setScore, setExamScore, getScore, getExamScore } from '../utils/progress'

const typeLabels = { mc: 'Multiple Choice', tf: 'True / False', fill: 'Fill in the Blank', translate: 'Translation', error: 'Error Correction' }

function normalize(s) {
  return s.toLowerCase().replace(/[.,!?¿¡;:'"()—\-]/g, '').replace(/\s+/g, ' ').trim()
}

function checkAnswer(q, answer) {
  if (answer === undefined || answer === null || answer === '') return false
  if (q.type === 'mc') return answer === q.answer
  if (q.type === 'tf') return answer === q.answer
  const accepted = Array.isArray(q.answer) ? q.answer : [q.answer]
  return accepted.some(a => normalize(String(answer)) === normalize(String(a)))
}

function QuestionCard({ q, idx, answered, userAnswer, onSelectOption, onSubmitFill }) {
  const [fillVal, setFillVal] = useState('')
  const cardRef = useRef(null)
  const isCorrect = answered ? checkAnswer(q, userAnswer) : null
  const correctAns = q.type === 'mc' ? q.options[q.answer] : q.type === 'tf' ? (q.answer ? 'True' : 'False') : (Array.isArray(q.answer) ? q.answer[0] : q.answer)

  useEffect(() => {
    if (answered && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [answered])

  return (
    <div ref={cardRef} className={`question-card ${answered ? (isCorrect ? 'answered-correct' : 'answered-wrong') : ''}`}>
      <div className="question-number">
        Question {idx + 1}
        <span className="question-type-badge">{typeLabels[q.type] || q.type}</span>
      </div>
      <div className="question-text" dangerouslySetInnerHTML={{ __html: q.question }} />

      {q.pronunciation && (
        <div style={{ marginBottom: 12 }}>
          <button className="btn-pronounce" onClick={() => speak(q.pronunciation)}>🔊 Listen</button>
        </div>
      )}

      {(q.type === 'mc' || q.type === 'tf') && (
        <div className="options-grid">
          {(q.type === 'tf' ? ['True', 'False'] : q.options).map((o, oi) => {
            const val = q.type === 'tf' ? (oi === 0) : oi
            let cls = 'option-btn'
            if (answered) {
              cls += ' disabled'
              if ((q.type === 'tf' ? val === q.answer : oi === q.answer)) cls += ' correct'
              else if ((q.type === 'tf' ? val === userAnswer : oi === userAnswer) && !isCorrect) cls += ' wrong'
            } else if (userAnswer === val) cls += ' selected'
            return (
              <div key={oi} className={cls} onClick={() => !answered && onSelectOption(idx, val)}>
                <span className="option-letter">{String.fromCharCode(65 + oi)}</span>
                <span>{o}</span>
              </div>
            )
          })}
        </div>
      )}

      {(q.type === 'fill' || q.type === 'translate' || q.type === 'error') && (
        <>
          <input
            type="text"
            className={`fill-blank-input ${answered ? (isCorrect ? 'correct-input' : 'wrong-input') : ''}`}
            placeholder={q.type === 'translate' ? 'Write the translation...' : q.type === 'error' ? 'Write the corrected sentence...' : 'Type your answer...'}
            value={answered ? (userAnswer || '') : fillVal}
            onChange={e => setFillVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !answered && fillVal.trim() && onSubmitFill(idx, fillVal)}
            disabled={answered}
          />
          {!answered && (
            <button className="btn btn-primary btn-sm" style={{ marginTop: 8 }} onClick={() => fillVal.trim() && onSubmitFill(idx, fillVal)}>Check Answer</button>
          )}
        </>
      )}

      {answered && (
        <div className="explanation-box">
          <strong>{isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong> — Correct answer: <span className="correct-answer">{correctAns}</span>
          {q.explanation && <><br />{q.explanation}</>}
        </div>
      )}
    </div>
  )
}

export default function QuizEngine({ questions, type, chapter, onComplete }) {
  const [answers, setAnswers] = useState({})
  const [answeredSet, setAnsweredSet] = useState(new Set())
  const [saved, setSaved] = useState(false)

  // 1. Sort questions to guarantee MCQ & TF first, then Fill, then Translate/Error
  const sortedQuestions = useMemo(() => {
    return [...questions].sort((a, b) => {
      const typeOrder = { mc: 1, tf: 1, fill: 2, translate: 3, error: 3 }
      const orderA = typeOrder[a.type] || 4
      const orderB = typeOrder[b.type] || 4
      return orderA - orderB
    })
  }, [questions])

  const existing = type === 'exam' ? getExamScore() : getScore(chapter, type)

  // Calculate live score
  const score = sortedQuestions.reduce((s, q, i) => s + (answeredSet.has(i) && checkAnswer(q, answers[i]) ? 1 : 0), 0)
  const pct = sortedQuestions.length > 0 ? Math.round(score / sortedQuestions.length * 100) : 0
  const isFinished = sortedQuestions.length > 0 && answeredSet.size === sortedQuestions.length

  // Automatically save score when user finishes all questions
  useEffect(() => {
    if (isFinished && !saved) {
      if (type === 'exam') {
        setExamScore(score, sortedQuestions.length)
      } else {
        setScore(chapter, type, score, sortedQuestions.length)
      }
      setSaved(true)
      if (onComplete) onComplete()
    }
  }, [isFinished, score, sortedQuestions.length, type, chapter, onComplete, saved])

  const selectOption = (idx, val) => {
    if (answeredSet.has(idx)) return
    setAnswers(a => ({ ...a, [idx]: val }))
    setAnsweredSet(s => {
      const next = new Set(s)
      next.add(idx)
      return next
    })
  }

  const submitFill = (idx, val) => {
    if (answeredSet.has(idx)) return
    setAnswers(a => ({ ...a, [idx]: val }))
    setAnsweredSet(s => {
      const next = new Set(s)
      next.add(idx)
      return next
    })
  }

  const retake = () => {
    setAnswers({})
    setAnsweredSet(new Set())
    setSaved(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Group headers check
  const renderPartHeader = (idx) => {
    const q = sortedQuestions[idx]
    const prevQ = idx > 0 ? sortedQuestions[idx - 1] : null

    const getGroup = (t) => {
      if (t === 'mc' || t === 'tf') return 1
      if (t === 'fill') return 2
      if (t === 'translate' || t === 'error') return 3
      return 4
    }

    const currentGroup = getGroup(q.type)
    const prevGroup = prevQ ? getGroup(prevQ.type) : null

    if (currentGroup !== prevGroup) {
      if (currentGroup === 1) return <div className="part-header">📋 Part I: Multiple Choice & True/False</div>
      if (currentGroup === 2) return <div className="part-header">✍️ Part II: Identification (Fill in the Blank)</div>
      if (currentGroup === 3) return <div className="part-header">🗣️ Part III: Translation & Applied Conversation</div>
    }
    return null
  }

  return (
    <div>
      <div className="quiz-header">
        <div>
          <h2>
            {type === 'activity' && '🎯 Activity'}
            {type === 'communicate' && '🗣️ Communicate Practice'}
            {type === 'quiz' && '📝 Quiz'}
            {type === 'exam' && '🏆 Final Exam'}
          </h2>
          <p className="quiz-progress-text">
            {answeredSet.size} of {sortedQuestions.length} answered
          </p>
        </div>
        <div className="quiz-score-display">
          {score} / {sortedQuestions.length}
        </div>
      </div>

      {existing && existing.score !== null && !isFinished && (
        <div className="lesson-card" style={{ borderColor: 'var(--gold)', marginBottom: 16 }}>
          <p>📊 <strong>Previous Highest Score:</strong> {existing.score}/{existing.total} ({Math.round(existing.score / existing.total * 100)}%)</p>
        </div>
      )}

      {sortedQuestions.map((q, i) => (
        <div key={i}>
          {renderPartHeader(i)}
          <QuestionCard
            q={q} idx={i}
            answered={answeredSet.has(i)}
            userAnswer={answers[i]}
            onSelectOption={selectOption}
            onSubmitFill={submitFill}
          />
        </div>
      ))}

      {isFinished && (
        <div className="quiz-results animate-fade-in">
          <h2>{pct >= 60 ? '¡Felicidades!' : '¡Sigue intentando!'}</h2>
          <div className={`score-big ${pct >= 60 ? 'pass' : 'fail'}`}>{score}/{sortedQuestions.length}</div>
          <p>{pct}% — {pct >= 60 ? 'You passed! Great job!' : 'Review the material and try again.'}</p>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={retake}>🔄 Retake</button>
          </div>
        </div>
      )}
    </div>
  )
}
