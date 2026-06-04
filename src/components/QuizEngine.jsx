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

function detectSpeechLanguage(q) {
  const ansText = String(Array.isArray(q.answer) ? q.answer[0] : q.answer).toLowerCase()
  
  const spanishKeywords = [
    'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez',
    'once', 'doce', 'trece', 'catorce', 'quince', 'dieci', 'veinti', 'treinta', 'cuarenta',
    'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa', 'cien', 'ciento', 'mil', 'millón',
    'el', 'la', 'los', 'las', 'un', 'una', 'y', 'de', 'en', 'es', 'son', 'tengo', 'me', 'mi',
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre',
    'octubre', 'noviembre', 'diciembre', 'horas', 'hora', 'primer', 'primero', 'segundo',
    'tercer', 'tercero', 'cuarto', 'quinto', 'sexto', 'séptimo', 'octavo', 'noveno', 'décimo',
    'dolor', 'cabeza', 'estómago', 'brazo', 'pierna', 'pie', 'mano', 'ojo', 'oreja', 'boca',
    'dientes', 'cuello', 'espalda', 'ropa', 'camisa', 'pantalones', 'zapatos', 'rojo', 'azul',
    'verde', 'amarillo', 'negro', 'blanco', 'gris', 'marrón', 'rosa', 'naranja', 'morado'
  ]
  
  const hasSpanish = spanishKeywords.some(w => new RegExp(`\\b${w}\\b`).test(ansText)) || 
                     ansText.includes('ñ') || ansText.includes('í') || ansText.includes('á') || 
                     ansText.includes('ó') || ansText.includes('ú') || ansText.includes('é') ||
                     ansText.includes('ella') || ansText.includes('tiene') || ansText.includes('somos')
                     
  if (hasSpanish) return 'es-ES'
  
  const tagalogKeywords = ['konstitusyon', 'nobela', 'pilipinas', 'wika', 'maynila', 'akda']
  const hasTagalog = tagalogKeywords.some(w => ansText.includes(w))
  if (hasTagalog) return 'fil-PH'
  
  const englishKeywords = ['constitution', 'novel', 'history', 'year', 'hundred', 'thousand']
  const hasEnglish = englishKeywords.some(w => ansText.includes(w))
  if (hasEnglish) return 'en-US'
  
  return 'es-ES'
}

function QuestionCard({ q, idx, answered, userAnswer, onSelectOption, onSubmitFill }) {
  const [fillVal, setFillVal] = useState('')
  const [isListening, setIsListening] = useState(false)
  const cardRef = useRef(null)
  const isCorrect = answered ? checkAnswer(q, userAnswer) : null
  const correctAns = q.type === 'mc' ? q.options[q.answer] : q.type === 'tf' ? (q.answer ? 'True' : 'False') : (Array.isArray(q.answer) ? q.answer[0] : q.answer)

  useEffect(() => {
    if (answered && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [answered])

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const isSpeechSupported = !!SpeechRecognition

  const handleVoiceInput = () => {
    if (!isSpeechSupported) return

    if (isListening) {
      if (window.activeRecognition) {
        window.activeRecognition.stop()
      }
      setIsListening(false)
      if (fillVal.trim()) {
        onSubmitFill(idx, fillVal)
      }
      return
    }

    if (window.activeRecognition) {
      window.activeRecognition.stop()
    }

    setFillVal('')

    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = detectSpeechLanguage(q)

    recognition.onstart = () => {
      setIsListening(true)
    }

    recognition.onresult = (event) => {
      let fullTranscript = ''
      for (let i = 0; i < event.results.length; i++) {
        fullTranscript += event.results[i][0].transcript
      }
      let cleanVal = fullTranscript.trim()
      if (cleanVal.endsWith('.')) {
        cleanVal = cleanVal.slice(0, -1).trim()
      }
      setFillVal(cleanVal)
    }

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error)
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
      window.activeRecognition = null
    }

    window.activeRecognition = recognition
    recognition.start()
  }

  useEffect(() => {
    return () => {
      if (isListening && window.activeRecognition) {
        window.activeRecognition.stop()
      }
    }
  }, [isListening])

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
          <div className="input-group-speech" style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
            <input
              type="text"
              className={`fill-blank-input ${answered ? (isCorrect ? 'correct-input' : 'wrong-input') : ''}`}
              placeholder={q.type === 'translate' ? 'Write the translation...' : q.type === 'error' ? 'Write the corrected sentence...' : 'Type your answer...'}
              value={answered ? (userAnswer || '') : fillVal}
              onChange={e => setFillVal(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !answered && fillVal.trim() && onSubmitFill(idx, fillVal)}
              disabled={answered}
              style={{
                width: '100%',
                paddingRight: isSpeechSupported && !answered ? '48px' : '16px'
              }}
            />
            {isSpeechSupported && !answered && (
              <button
                type="button"
                className={`btn-speech-mic ${isListening ? 'listening' : ''}`}
                onClick={handleVoiceInput}
                title={`Speak your answer in ${detectSpeechLanguage(q) === 'es-ES' ? 'Spanish' : detectSpeechLanguage(q) === 'fil-PH' ? 'Tagalog' : 'English'}`}
                style={{
                  position: 'absolute',
                  right: '8px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.25rem',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isListening ? 'var(--wrong)' : 'var(--text-sec)',
                  transition: 'color 0.2s ease, transform 0.2s ease',
                  zIndex: 5
                }}
              >
                {isListening ? '🔴' : '🎙️'}
              </button>
            )}
          </div>
          {!answered && (
            <div style={{ display: 'flex', gap: '8px', marginTop: 8, alignItems: 'center' }}>
              <button className="btn btn-primary btn-sm" onClick={() => fillVal.trim() && onSubmitFill(idx, fillVal)}>Check Answer</button>
              {isSpeechSupported && (
                <span style={{ fontSize: '0.8rem', color: 'var(--text-sec)' }}>
                  {isListening ? 'Listening... speak clearly.' : 'or click the mic to speak your answer'}
                </span>
              )}
            </div>
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
