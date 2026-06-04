let voice = null
const findVoice = () => {
  const voices = speechSynthesis.getVoices()
  voice = voices.find(v => v.lang.startsWith('es')) || null
}
if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = findVoice
  findVoice()
}

export const speak = (text, rate = 0.85) => {
  if (!text || typeof speechSynthesis === 'undefined') return
  speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  if (!voice) findVoice()
  if (voice) u.voice = voice
  u.lang = 'es-ES'
  u.rate = rate
  u.pitch = 1
  speechSynthesis.speak(u)
}
