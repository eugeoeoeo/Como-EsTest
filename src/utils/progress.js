import { supabase } from './supabaseClient'

const KEY = 'comoestest_progress'
const EXAM_KEY = 'comoestest_exam'
const HIST_KEY = 'comoestest_history'

let currentUserId = null

export const setCurrentUserId = (userId) => {
  currentUserId = userId
}

const getAll = () => JSON.parse(localStorage.getItem(KEY) || '{}')
const save = d => localStorage.setItem(KEY, JSON.stringify(d))
const ensure = (d, ch) => { if (!d[ch]) d[ch] = { lessonDone: false, activityScore: null, activityTotal: null, communicateScore: null, communicateTotal: null, quizScore: null, quizTotal: null }; return d }

const syncChapterToSupabase = async (ch, d) => {
  if (!currentUserId) return
  const data = d[ch]
  const { error } = await supabase.from('chapter_progress').upsert({
    user_id: currentUserId,
    chapter_id: ch,
    lesson_completed: data.lessonDone,
    activity_score: data.activityScore || 0,
    activity_total: data.activityTotal || 0,
    communicate_score: data.communicateScore || 0,
    communicate_total: data.communicateTotal || 0,
    quiz_score: data.quizScore || 0,
    quiz_total: data.quizTotal || 0,
    updated_at: new Date().toISOString()
  })
  if (error) console.error('Error syncing chapter progress to Supabase:', error)
}

export const fetchAndSyncProgress = async (userId) => {
  if (!userId) return

  // 1. Fetch chapter progress
  const { data: progressData, error: pError } = await supabase
    .from('chapter_progress')
    .select('*')
    .eq('user_id', userId)

  // 2. Fetch exam results
  const { data: examData, error: eError } = await supabase
    .from('exam_results')
    .select('*')
    .eq('user_id', userId)
    .order('completed_at', { ascending: false })
    .limit(1)

  // 3. Fetch score history
  const { data: historyData, error: hError } = await supabase
    .from('score_history')
    .select('*')
    .eq('user_id', userId)

  if (pError || eError || hError) {
    console.error('Error fetching progress from Supabase:', pError || eError || hError)
    return
  }

  // Save to local storage cache
  const localProgress = {}
  if (progressData) {
    progressData.forEach(row => {
      localProgress[row.chapter_id] = {
        lessonDone: row.lesson_completed,
        activityScore: row.activity_score,
        activityTotal: row.activity_total,
        communicateScore: row.communicate_score,
        communicateTotal: row.communicate_total,
        quizScore: row.quiz_score,
        quizTotal: row.quiz_total
      }
    })
    localStorage.setItem(KEY, JSON.stringify(localProgress))
  }

  if (examData && examData.length > 0) {
    const latestExam = examData[0]
    localStorage.setItem(EXAM_KEY, JSON.stringify({
      score: latestExam.score,
      total: latestExam.total,
      date: latestExam.completed_at
    }))
  } else {
    localStorage.removeItem(EXAM_KEY)
  }

  if (historyData) {
    const localHistory = historyData.map(row => ({
      ch: row.chapter_id,
      type: row.assessment_type,
      score: row.score,
      total: row.total,
      date: row.completed_at
    }))
    localStorage.setItem(HIST_KEY, JSON.stringify(localHistory))
  }
}

export const syncGuestProgressToUser = async (userId) => {
  if (!userId) return

  const localProgress = JSON.parse(localStorage.getItem(KEY) || '{}')
  const localExam = JSON.parse(localStorage.getItem(EXAM_KEY) || 'null')
  const localHistory = JSON.parse(localStorage.getItem(HIST_KEY) || '[]')

  // 1. Sync chapter progress
  for (const [ch, data] of Object.entries(localProgress)) {
    await supabase.from('chapter_progress').upsert({
      user_id: userId,
      chapter_id: ch,
      lesson_completed: data.lessonDone,
      activity_score: data.activityScore || 0,
      activity_total: data.activityTotal || 0,
      communicate_score: data.communicateScore || 0,
      communicate_total: data.communicateTotal || 0,
      quiz_score: data.quizScore || 0,
      quiz_total: data.quizTotal || 0,
      updated_at: new Date().toISOString()
    })
  }

  // 2. Sync exam
  if (localExam) {
    await supabase.from('exam_results').insert({
      user_id: userId,
      score: localExam.score,
      total: localExam.total,
      completed_at: localExam.date || new Date().toISOString()
    })
  }

  // 3. Sync history
  if (localHistory.length > 0) {
    const rows = localHistory.map(item => ({
      user_id: userId,
      assessment_type: item.type,
      chapter_id: item.ch,
      score: item.score,
      total: item.total,
      completed_at: item.date || new Date().toISOString()
    }))
    await supabase.from('score_history').insert(rows)
  }
}

export const markLessonDone = ch => {
  const d = ensure(getAll(), ch)
  d[ch].lessonDone = true
  save(d)

  if (currentUserId) {
    syncChapterToSupabase(ch, d)
  }
}

export const isLessonDone = ch => getAll()[ch]?.lessonDone || false

export const setScore = (ch, type, score, total) => {
  const d = ensure(getAll(), ch)
  d[ch][type + 'Score'] = score
  d[ch][type + 'Total'] = total
  save(d)

  const dateStr = new Date().toISOString()
  const hist = JSON.parse(localStorage.getItem(HIST_KEY) || '[]')
  hist.push({ ch, type, score, total, date: dateStr })
  localStorage.setItem(HIST_KEY, JSON.stringify(hist))

  if (currentUserId) {
    syncChapterToSupabase(ch, d)
    supabase.from('score_history').insert({
      user_id: currentUserId,
      assessment_type: type,
      chapter_id: ch,
      score,
      total,
      completed_at: dateStr
    }).then(({ error }) => {
      if (error) console.error('Error inserting score history to Supabase:', error)
    })
  }
}

export const getScore = (ch, type) => {
  const d = getAll()[ch]
  return d ? { score: d[type + 'Score'], total: d[type + 'Total'] } : { score: null, total: null }
}

export const setExamScore = (score, total) => {
  const dateStr = new Date().toISOString()
  localStorage.setItem(EXAM_KEY, JSON.stringify({ score, total, date: dateStr }))

  if (currentUserId) {
    supabase.from('exam_results').insert({
      user_id: currentUserId,
      score,
      total,
      completed_at: dateStr
    }).then(({ error }) => {
      if (error) console.error('Error saving exam score to Supabase:', error)
    })

    supabase.from('score_history').insert({
      user_id: currentUserId,
      assessment_type: 'exam',
      chapter_id: null,
      score,
      total,
      completed_at: dateStr
    }).then(({ error }) => {
      if (error) console.error('Error saving exam score history to Supabase:', error)
    })
  }
}

export const getExamScore = () => JSON.parse(localStorage.getItem(EXAM_KEY) || 'null')

export const getChapterProgress = ch => {
  const d = getAll()[ch]
  if (!d) return 0
  let p = 0
  if (d.lessonDone) p += 25
  if (d.activityScore !== null) p += 25
  if (d.communicateScore !== null) p += 25
  if (d.quizScore !== null) p += 25
  return Math.min(p, 100)
}

export const getOverallProgress = () => {
  let total = 0
  for (let i = 1; i <= 7; i++) total += getChapterProgress('ch' + i)
  if (getExamScore()) total += 100
  return Math.round(total / 8)
}

export const resetChapter = ch => {
  const d = getAll()
  delete d[ch]
  save(d)

  if (currentUserId) {
    supabase.from('chapter_progress')
      .delete()
      .eq('user_id', currentUserId)
      .eq('chapter_id', ch)
      .then(({ error }) => {
        if (error) console.error('Error resetting chapter progress in Supabase:', error)
      })
  }
}

export const resetAll = () => {
  localStorage.removeItem(KEY)
  localStorage.removeItem(EXAM_KEY)
  localStorage.removeItem(HIST_KEY)

  if (currentUserId) {
    Promise.all([
      supabase.from('chapter_progress').delete().eq('user_id', currentUserId),
      supabase.from('exam_results').delete().eq('user_id', currentUserId),
      supabase.from('score_history').delete().eq('user_id', currentUserId)
    ]).then(([r1, r2, r3]) => {
      if (r1.error || r2.error || r3.error) {
        console.error('Error clearing database progress:', r1.error || r2.error || r3.error)
      }
    })
  }
}
