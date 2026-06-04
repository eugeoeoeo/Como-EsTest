let voice = null
const findVoice = () => {
  if (typeof speechSynthesis === 'undefined') return
  const voices = speechSynthesis.getVoices()
  voice = voices.find(v => v.lang === 'es-ES') ||
          voices.find(v => v.lang === 'es-MX') ||
          voices.find(v => v.lang.startsWith('es-')) ||
          voices.find(v => v.lang.startsWith('es')) ||
          null
}

if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = findVoice
  findVoice()
}

export const speak = (text, rate = 0.85) => {
  if (!text || typeof speechSynthesis === 'undefined') return
  speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  
  // Dynamically update voice selection at speak time in case voices loaded asynchronously
  const voices = speechSynthesis.getVoices()
  const esVoice = voices.find(v => v.lang === 'es-ES') ||
                  voices.find(v => v.lang === 'es-MX') ||
                  voices.find(v => v.lang.startsWith('es-')) ||
                  voices.find(v => v.lang.startsWith('es'))
  
  if (esVoice) {
    u.voice = esVoice
    u.lang = esVoice.lang
  } else {
    u.lang = 'es-ES' // Fallback to standard Spanish locale
  }
  
  u.rate = rate
  u.pitch = 1
  speechSynthesis.speak(u)
}
