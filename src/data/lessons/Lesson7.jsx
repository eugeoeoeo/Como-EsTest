import PronounceBtn from '../../components/PronounceBtn'

export default function Lesson7() {
  const parts = [
    ['head', 'la cabeza'],
    ['hair', 'el pelo / el cabello'],
    ['face', 'la cara'],
    ['eye', 'el ojo'],
    ['ear (external)', 'la oreja'],
    ['ear (internal/hearing)', 'el oído'],
    ['nose', 'la nariz'],
    ['mouth', 'la boca'],
    ['lip', 'el labio'],
    ['tooth', 'el diente'],
    ['tongue', 'la lengua'],
    ['neck', 'el cuello'],
    ['shoulder', 'el hombro'],
    ['arm', 'el brazo'],
    ['elbow', 'el codo'],
    ['hand', 'la mano'],
    ['finger / toe', 'el dedo'],
    ['chest', 'el pecho'],
    ['stomach / belly', 'el estómago / la barriga'],
    ['back', 'la espalda'],
    ['hip', 'la cadera'],
    ['leg', 'la pierna'],
    ['knee', 'la rodilla'],
    ['ankle', 'el tobillo'],
    ['foot', 'el pie'],
  ]

  return (<>
    <div className="lesson-card">
      <h2>🦴 El Cuerpo Humano</h2>
      <p>Learning the parts of the human body in Spanish is essential for daily conversation, health contexts, and describing people.</p>
    </div>

    <div className="lesson-card">
      <h3>Vocabulary: Parts of the Body</h3>
      <p>Pay close attention to the articles (el / la) as they indicate the gender of the noun. Remember that body parts are generally used with definite articles in Spanish, rather than possessive adjectives (e.g. "me duele la cabeza" instead of "me duele mi cabeza").</p>
      <table>
        <thead>
          <tr>
            <th>English</th>
            <th>Spanish (with Article)</th>
            <th>🔊</th>
          </tr>
        </thead>
        <tbody>
          {parts.map(([en, es]) => (
            <tr key={en}>
              <td><strong>{en}</strong></td>
              <td className="spanish">{es}</td>
              <td><PronounceBtn text={es} label="🔊" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="lesson-card">
      <h3>Grammar Rules & Key Differences</h3>
      <h4>Rule 1: Definite Articles instead of Possessive Adjectives</h4>
      <p>In English, we say "I wash <strong>my</strong> hands." In Spanish, you use the definite article because ownership is already implied by the reflexive verb:</p>
      <div className="example-box">
        <div className="spanish">Me lavo <strong>las</strong> manos.</div>
        <div className="translation">(I wash my hands.)</div>
        <PronounceBtn text="Me lavo las manos" label="Listen" />
      </div>

      <h4>Rule 2: Singular vs Plural</h4>
      <p>To make body parts plural, follow standard rules: add <strong>-s</strong> for words ending in vowels, and <strong>-es</strong> for words ending in consonants. For words ending in <strong>-z</strong> (like <em>la nariz</em>), change the <strong>-z</strong> to <strong>-c</strong> before adding <strong>-es</strong>.</p>
      <div className="example-box">
        <p>el ojo → los ojos (eyes)</p>
        <p>el pie → los pies (feet)</p>
        <p>la nariz → las narices (noses)</p>
      </div>

      <h4>Rule 3: Differentiating Oreja vs Oído</h4>
      <ul>
        <li><strong>La oreja</strong> refers to the external ear structure.</li>
        <li><strong>El oído</strong> refers to the inner ear or the sense of hearing.</li>
      </ul>
      <div className="example-box">
        <div className="spanish">Me duele el oído. (My inner ear hurts.) • Ella tiene orejas pequeñas. (She has small ears.)</div>
      </div>
    </div>

    <div className="lesson-card">
      <h3>Idiomatic Expressions & Common Phrases</h3>
      <p>To say something hurts, use the verb <strong>doler</strong> (o→ue change):</p>
      <div className="example-box">
        <div className="spanish">Me duele + singular noun</div>
        <div className="translation">Me duele la cabeza. (My head hurts / I have a headache.)</div>
        <PronounceBtn text="Me duele la cabeza" label="Listen" />
      </div>
      <div className="example-box">
        <div className="spanish">Me duelen + plural noun</div>
        <div className="translation">Me duelen los pies. (My feet hurt.)</div>
        <PronounceBtn text="Me duelen los pies" label="Listen" />
      </div>
    </div>

    <div className="tip-card">
      <h4>💡 Key Takeaways</h4>
      <ul>
        <li>Use <strong>definite articles</strong> (el, la, los, las) instead of possessive adjectives (mi, tu, su) for body parts in action sentences.</li>
        <li><strong>La mano</strong> is feminine despite ending in <strong>-o</strong>! (la mano, las manos)</li>
        <li><strong>La nariz</strong> changes to <strong>las narices</strong> in the plural form.</li>
        <li>Use <strong>doler</strong>: <em>me duele</em> (singular) / <em>me duelen</em> (plural).</li>
      </ul>
    </div>
  </>)
}
