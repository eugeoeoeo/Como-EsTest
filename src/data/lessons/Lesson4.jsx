import PronounceBtn from '../../components/PronounceBtn'

export default function Lesson4() {
  const convo = [
    ['A','Hola, ¿cómo estás?','Kumusta ka?'],
    ['B','Estoy bien, gracias. ¿Y tú?','Mabuti naman, salamat. Ikaw?'],
    ['A','También estoy bien. ¿Qué haces hoy?','Mabuti rin ako. Ano ang gagawin mo ngayon?'],
    ['B','Voy a la escuela para estudiar.','Pupunta ako sa paaralan upang mag-aral.'],
    ['A','¡Qué bien! Yo voy a trabajar en casa.','Ayos! Ako naman ay magtatrabaho sa bahay.'],
    ['B','¿Quieres estudiar conmigo después?','Gusto mo bang mag-aral kasama ako mamaya?'],
    ['A','Sí, me gustaría mucho.','Oo, gusto ko iyon.'],
    ['B','Perfecto, nos vemos más tarde.','Ayos, magkikita tayo mamaya.'],
    ['A','Hasta luego.','Hanggang mamaya.'],
    ['B','Adiós.','Paalam.'],
  ]
  return (<>
    <div className="lesson-card">
      <h2>💬 Pag-uusap sa Wikang Kastila at Salin sa Filipino</h2>
      <p>Below is a complete Spanish conversation with Filipino translations. Study each line carefully, practice the pronunciation, and learn how greetings and everyday phrases work in Spanish.</p>
    </div>

    <div className="lesson-card">
      <h3>📖 The Full Conversation</h3>
      <div className="convo-card">
        {convo.map(([spk, es, fil], i) => (
          <div className="convo-line" key={i}>
            <span className="convo-speaker">{spk}:</span>
            <div className="convo-text">
              <div className="spanish">{es}</div>
              <div className="filipino">{fil}</div>
              <PronounceBtn text={es.replace(/[¿¡]/g,'')} label="🔊" />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h3>📝 Key Phrases Breakdown</h3>
      <table>
        <thead><tr><th>Spanish</th><th>Filipino</th><th>English</th><th>🔊</th></tr></thead>
        <tbody>
          {[
            ['Hola','Kumusta','Hello'],
            ['¿Cómo estás?','Kumusta ka?','How are you?'],
            ['Estoy bien','Mabuti ako','I\'m fine'],
            ['Gracias','Salamat','Thank you'],
            ['¿Y tú?','Ikaw?','And you?'],
            ['También','Rin/Din','Also/Too'],
            ['¿Qué haces hoy?','Ano ang gagawin mo ngayon?','What are you doing today?'],
            ['Voy a la escuela','Pupunta ako sa paaralan','I\'m going to school'],
            ['Para estudiar','Upang mag-aral','To study'],
            ['¡Qué bien!','Ayos!','How nice!/Great!'],
            ['Trabajar en casa','Magtatrabaho sa bahay','Work at home'],
            ['¿Quieres...?','Gusto mo ba...?','Do you want...?'],
            ['Estudiar conmigo','Mag-aral kasama ko','Study with me'],
            ['Después','Mamaya','Later/After'],
            ['Sí','Oo','Yes'],
            ['Me gustaría mucho','Gusto ko iyon','I would like that a lot'],
            ['Perfecto','Ayos/Perpekto','Perfect'],
            ['Nos vemos más tarde','Magkikita tayo mamaya','We\'ll see each other later'],
            ['Hasta luego','Hanggang mamaya','See you later'],
            ['Adiós','Paalam','Goodbye'],
          ].map(([es,fil,en],i) => (
            <tr key={i}><td className="spanish">{es}</td><td>{fil}</td><td>{en}</td><td><PronounceBtn text={es.replace(/[¿¡]/g,'')} label="🔊" /></td></tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="tip-card">
      <h4>💡 Conversation Tips</h4>
      <ul>
        <li><strong>Greetings:</strong> "Hola" is universal. "Buenos días" (morning), "Buenas tardes" (afternoon), "Buenas noches" (evening/night)</li>
        <li><strong>"¿Y tú?"</strong> is a very natural way to return a question — similar to "Ikaw?" in Filipino</li>
        <li><strong>"Me gustaría"</strong> is the polite conditional form of "gustar" — use it to express wishes politely</li>
        <li><strong>Farewells:</strong> "Hasta luego" (see you later), "Hasta mañana" (see you tomorrow), "Adiós" (goodbye)</li>
        <li><strong>"¿Quieres...?"</strong> is an informal way to ask "Do you want...?" — use "¿Quisiera...?" for formal</li>
      </ul>
    </div>

    <div className="tip-card">
      <h4>🗣️ Practice: Build Your Own Greeting</h4>
      <p>Try combining these elements to make your own greeting conversations:</p>
      <div className="example-box">
        <div className="spanish">¡Buenos días! ¿Cómo estás? — Estoy bien, gracias. ¿Y tú?</div>
        <PronounceBtn text="Buenos días, cómo estás. Estoy bien, gracias. Y tú?" label="Listen to full exchange" />
      </div>
      <div className="example-box">
        <div className="spanish">¡Buenas tardes! ¿Qué haces? — Voy a estudiar. ¿Quieres estudiar conmigo?</div>
        <PronounceBtn text="Buenas tardes. Qué haces. Voy a estudiar. Quieres estudiar conmigo?" label="Listen to full exchange" />
      </div>
    </div>
  </>)
}
