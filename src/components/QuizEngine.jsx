import { useState, useCallback, useEffect, useRef } from 'react'
import { speak } from '../utils/pronunciation'
import { setScore, setExamScore, getScore, getExamScore } from '../utils/progress'

const typeLabels = { mc: 'Multiple Choice', tf: 'True / False', fill: 'Fill in the Blank', translate: 'Translation', error: 'Error Correction' }

function normalize(s) {
  return s.toLowerCase().replace(/[.,!?¿¡;:'"()—\-]/g, '').replace(/\s+/g, ' ').trim()
}

function checkAnswer(q, answer) {
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
            onKeyDown={e => e.key === 'Enter' && !answered && onSubmitFill(idx, fillVal)}
            disabled={answered}
          />
          {!answered && (
            <button className="btn btn-primary btn-sm" style={{ marginTop: 8 }} onClick={() => onSubmitFill(idx, fillVal)}>Check</button>
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

export default function QuizEngineComponent({ questions, type, chapter, onComplete }) {
  const [answers, setAnswers] = useState({})
  const [answeredSet, setAnsweredSet] = useState(new Set())
  const [submitted, setSubmitted] = useState(false)

  const existing = type === 'exam' ? getExamScore() : getScore(chapter, type)

  const selectOption = (idx, val) => {
    setAnswers(a => ({ ...a, [idx]: val }))
  }

  const submitFill = (idx, val) => {
    if (!val.trim()) return
    setAnswers(a => ({ ...a, [idx]: val }))
    setAnsweredSet(s => new Set(s).add(idx))
  }

  const submitAll = () => {
    const newAnswered = new Set()
    const finalAnswers = { ...answers }
    questions.forEach((q, i) => {
      newAnswered.add(i)
      if (finalAnswers[i] === undefined) {
        finalAnswers[i] = q.type === 'mc' ? -1 : q.type === 'tf' ? null : ''
      }
    })
    setAnswers(finalAnswers)
    setAnsweredSet(newAnswered)
    setSubmitted(true)

    let score = 0
    questions.forEach((q, i) => { if (checkAnswer(q, finalAnswers[i])) score++ })

    if (type === 'exam') setExamScore(score, questions.length)
    else setScore(chapter, type, score, questions.length)
    if (onComplete) onComplete()
  }

  const retake = () => {
    setAnswers({})
    setAnsweredSet(new Set())
    setSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const score = submitted ? questions.reduce((s, q, i) => s + (checkAnswer(q, answers[i]) ? 1 : 0), 0) : 0
  const pct = submitted ? Math.round(score / questions.length * 100) : 0

  return (
    <div>
      <div className="quiz-header">
        <div>
          <h2>{type === 'activity' ? '🎯 Activity' : type === 'quiz' ? '📝 Quiz' : '🏆 Final Exam'}</h2>
          <p className="quiz-progress-text">{questions.length} questions</p>
        </div>
        <div className="quiz-score-display">{submitted ? `${score}/${questions.length}` : `0/${questions.length}`}</div>
      </div>

      {existing && existing.score !== null && !submitted && (
        <div className="lesson-card" style={{ borderColor: 'var(--gold)', marginBottom: 16 }}>
          <p>📊 <strong>Previous Score:</strong> {existing.score}/{existing.total} ({Math.round(existing.score / existing.total * 100)}%)</p>
        </div>
      )}

      {questions.map((q, i) => (
        <QuestionCard
          key={i} q={q} idx={i}
          answered={answeredSet.has(i)}
          userAnswer={answers[i]}
          onSelectOption={selectOption}
          onSubmitFill={submitFill}
        />
      ))}

      {!submitted && (
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <button className="btn btn-primary" onClick={submitAll}>Submit All Answers</button>
        </div>
      )}

      {submitted && (
        <div className="quiz-results">
          <h2>{pct >= 60 ? '¡Felicidades!' : '¡Sigue intentando!'}</h2>
          <div className={`score-big ${pct >= 60 ? 'pass' : 'fail'}`}>{score}/{questions.length}</div>
          <p>{pct}% — {pct >= 60 ? 'You passed! Great job!' : 'Review the material and try again.'}</p>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={retake}>🔄 Retake</button>
          </div>
        </div>
      )}
    </div>
  )
}
