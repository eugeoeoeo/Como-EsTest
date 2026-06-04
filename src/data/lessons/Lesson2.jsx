import PronounceBtn from '../../components/PronounceBtn'

export default function Lesson2() {
  const letters = [
    ['A','a'],['B','be'],['C','ce'],['D','de'],['E','e'],['F','efe'],['G','ge'],['H','hache'],
    ['I','i'],['J','jota'],['K','ka'],['L','ele'],['M','eme'],['N','ene'],['Ñ','eñe'],['O','o'],
    ['P','pe'],['Q','cu'],['R','ere'],['S','ese'],['T','te'],['U','u'],['V','uve'],['W','uve doble'],
    ['X','equis'],['Y','ye'],['Z','zeta']
  ]
  const digraphs = [['CH','che'],['LL','elle'],['RR','erre'],['GU','gu']]

  return (<>
    <div className="lesson-card">
      <h2>🔤 Ang Alpabetong Espanyol</h2>
      <p>Ang alpabetong Espanyol ay binubuo ng <strong>27 na letra</strong>, na kasama ang apat na digraph (dalawang letra na pinagsama upang magbigay ng isang tunog).</p>
      <p>Kung ihahambing sa Tagalog, mayroon lamang 28 letra sa Tagalog. Kaya naman, madali para sa mga nagsisimula sa Espanyol na matutunan ang mga letra ng alpabetong Espanyol.</p>

      <h3>Ang 27 Letra</h3>
      <table>
        <thead><tr><th>Letter</th><th>Name</th><th>🔊</th></tr></thead>
        <tbody>
          {letters.map(([l, n]) => (
            <tr key={l}><td><strong>{l}</strong></td><td>{n}</td><td><PronounceBtn text={n} label={l} /></td></tr>
          ))}
        </tbody>
      </table>

      <h3>Ang 4 na Digraph</h3>
      <table>
        <thead><tr><th>Digraph</th><th>Name</th><th>🔊</th></tr></thead>
        <tbody>
          {digraphs.map(([l, n]) => (
            <tr key={l}><td><strong>{l}</strong></td><td>{n}</td><td><PronounceBtn text={n} label={l} /></td></tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="lesson-card">
      <h2>🗣️ Pagbigkas (Pronunciation Guide)</h2>
      <p>Ang tamang pagbigkas ay mahalaga sa pag-aaral ng Espanyol. Narito ang mga gabay:</p>

      <h3>Vowels (A, E, I, O, U)</h3>
      <div className="highlight"><p>Ang mga letra <strong>A, E, I, O, U</strong> ay mayroong <strong>parehong pagbigkas sa Tagalog</strong>.</p></div>
      <div className="example-box">
        <div className="spanish">A = "ah" • E = "eh" • I = "ee" • O = "oh" • U = "oo"</div>
        <PronounceBtn text="a, e, i, o, u" label="Listen to vowels" />
      </div>

      <h3>Consonants with Same Pronunciation as Tagalog</h3>
      <div className="highlight"><p>Ang mga letra <strong>B, D, F, H, K, L, M, N, P, T, V</strong> ay mayroong <strong>parehong pagbigkas sa Tagalog</strong>.</p></div>

      <h3>Consonants with Slight Differences</h3>
      <div className="highlight"><p>Ang mga letra <strong>C, G, J</strong> ay mayroong kaunting pagkakaiba sa pagbigkas sa Tagalog. Sa Espanyol, ang mga letra na ito ay mayroong <strong>mahabang tunog</strong>, habang sa Tagalog ay mayroong maikling tunog.</p></div>
      <div className="example-box">
        <p><strong>C</strong> — before e/i: pronounced as "s" in Latin America, "th" in Spain</p>
        <p><strong>G</strong> — before e/i: a strong "h" sound (like "jota")</p>
        <p><strong>J</strong> — always a strong "h" sound</p>
        <PronounceBtn text="ce, ci, ge, gi, jota" label="Listen to differences" />
      </div>

      <h3>Unique Spanish Sounds (LL, Ñ, RR, CH)</h3>
      <div className="highlight"><p>Ang mga letra <strong>LL, Ñ, RR, at CH</strong> ay mayroong sariling tunog na <strong>hindi naririnig sa Tagalog</strong>. Kailangan itong bigkasin ng tama upang maunawaan ng mga Espanyol ang sinasabi mo.</p></div>
      <div className="example-box">
        <p><strong>LL</strong> — like "y" in "yes" (or "ly" sound): <em>llamar</em> = "yamar"</p>
        <PronounceBtn text="llamar" label="llamar" />
      </div>
      <div className="example-box">
        <p><strong>Ñ</strong> — like "ny" in "canyon": <em>año</em> = "anyo"</p>
        <PronounceBtn text="año" label="año" />
      </div>
      <div className="example-box">
        <p><strong>RR</strong> — a strong rolled/trilled "r": <em>perro</em> = trilled r</p>
        <PronounceBtn text="perro" label="perro" />
      </div>
      <div className="example-box">
        <p><strong>CH</strong> — like "ch" in "church": <em>chico</em></p>
        <PronounceBtn text="chico" label="chico" />
      </div>
    </div>

    <div className="tip-card">
      <h4>💡 Pronunciation Tips</h4>
      <ul>
        <li><strong>Spanish is phonetic</strong> — words are generally pronounced as they are spelled</li>
        <li><strong>H is always silent</strong> in Spanish (e.g., "hola" = "ola")</li>
        <li><strong>Practice the rolled R (RR)</strong> — this is the hardest sound for most learners</li>
        <li><strong>Ñ is its own letter</strong> — not just an N with a tilde; it has its own distinct sound</li>
        <li>The Spanish alphabet has <strong>27 letters</strong> vs. Tagalog's 28 — very similar!</li>
      </ul>
    </div>

    <div className="tip-card">
      <h4>🗣️ Practice Phrases</h4>
      <div className="example-box">
        <div className="spanish">¡Hola! ¿Cómo estás?</div>
        <div className="translation">(Hello! How are you?)</div>
        <PronounceBtn text="Hola, cómo estás" label="Listen" />
      </div>
      <div className="example-box">
        <div className="spanish">Me llamo Juan.</div>
        <div className="translation">(My name is Juan.)</div>
        <PronounceBtn text="Me llamo Juan" label="Listen" />
      </div>
      <div className="example-box">
        <div className="spanish">Mucho gusto.</div>
        <div className="translation">(Nice to meet you.)</div>
        <PronounceBtn text="Mucho gusto" label="Listen" />
      </div>
    </div>
  </>)
}
