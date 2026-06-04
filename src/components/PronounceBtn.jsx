import { speak } from '../utils/pronunciation'

export default function PronounceBtn({ text, label }) {
  return (
    <button className="btn-pronounce" onClick={() => speak(text)}>
      🔊 {label || text}
    </button>
  )
}
