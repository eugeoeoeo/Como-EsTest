import PronounceBtn from '../../components/PronounceBtn'

export default function Lesson3() {
  return (<>
    <div className="lesson-card">
      <h2>📝 Mga Panuntunan sa Pagbuo ng Pangungusap sa Wikang Kastila</h2>
      <p>Ang pagbuo ng pangungusap sa wikang Kastila (Espanyol) ay may malinaw na mga tuntunin na dapat sundin upang maging wasto, malinaw, at makabuluhan ang pagpapahayag. Bagama't may pagkakatulad ito sa Filipino at Ingles, may mga natatanging estruktura at tuntunin ang Kastila na kailangang maunawaan.</p>
    </div>

    <div className="lesson-card">
      <h3>1. Karaniwang Ayos ng Pangungusap</h3>
      <p>Ang karaniwang ayos ng pangungusap sa Kastila ay: <strong>Paksa + Pandiwa + Layon (SVO)</strong> o <strong>Pandiwa + Paksa + Layon (VSO)</strong></p>
      <div className="example-box">
        <div className="spanish">María come manzanas. (SVO)</div>
        <div className="translation">Maria eats apples.</div>
        <PronounceBtn text="María come manzanas" label="Listen" />
      </div>
      <div className="example-box">
        <div className="spanish">Come María manzanas. (VSO)</div>
        <div className="translation">Eats Maria apples. (same meaning)</div>
      </div>
      <p>Mas karaniwan ang SVO, ngunit pinapayagan ang VSO depende sa diin o estilo.</p>
    </div>

    <div className="lesson-card">
      <h3>2. Paggamit ng Pandiwa (Verbos)</h3>
      <p>Mahalaga ang wastong banghay ng pandiwa ayon sa: <strong>Panahon (tense)</strong>, <strong>Panauhan (person)</strong>, <strong>Bilang (singular/plural)</strong></p>
      <div className="example-box">
        <div className="spanish">Yo hablo</div><div className="translation">(Ako ay nagsasalita)</div>
        <PronounceBtn text="Yo hablo" label="Listen" />
      </div>
      <div className="example-box">
        <div className="spanish">Ellos hablan</div><div className="translation">(Sila ay nagsasalita)</div>
        <PronounceBtn text="Ellos hablan" label="Listen" />
      </div>
      <p>Dapat laging tumutugma ang pandiwa sa paksa.</p>
    </div>

    <div className="lesson-card">
      <h3>3. Pagkakatugma ng Pangngalan at Pang-uri</h3>
      <p>Sa Kastila, ang pang-uri ay: <strong>Sumusunod sa pangngalan</strong> at <strong>Tinutugma sa kasarian (lalaki/babae) at bilang</strong></p>
      <div className="example-box">
        <div className="spanish">niño alto</div><div className="translation">(mataas na batang lalaki)</div>
        <PronounceBtn text="niño alto" label="Listen" />
      </div>
      <div className="example-box">
        <div className="spanish">niña alta</div><div className="translation">(mataas na batang babae)</div>
        <PronounceBtn text="niña alta" label="Listen" />
      </div>
    </div>

    <div className="lesson-card">
      <h3>4. Kasarian ng Pangngalan (Gender)</h3>
      <p>Ang mga pangngalan ay may kasarian:</p>
      <ul><li><strong>-o</strong> → panlalaki</li><li><strong>-a</strong> → pambabae</li></ul>
      <div className="example-box">
        <div className="spanish">amigo</div><div className="translation">(kaibigang lalaki)</div>
        <PronounceBtn text="amigo" label="Listen" />
      </div>
      <div className="example-box">
        <div className="spanish">amiga</div><div className="translation">(kaibigang babae)</div>
        <PronounceBtn text="amiga" label="Listen" />
      </div>
      <p>Mahalaga ito dahil naaapektuhan ang artikulo at pang-uri.</p>
    </div>

    <div className="lesson-card">
      <h3>5. Paggamit ng mga Artikulo</h3>
      <p>May dalawang uri:</p>
      <ul>
        <li><strong>Tiyak (definite):</strong> el, la, los, las</li>
        <li><strong>Di-tiyak (indefinite):</strong> un, una, unos, unas</li>
      </ul>
      <div className="example-box">
        <div className="spanish">el libro</div><div className="translation">(ang aklat)</div>
        <PronounceBtn text="el libro" label="Listen" />
      </div>
      <div className="example-box">
        <div className="spanish">una casa</div><div className="translation">(isang bahay)</div>
        <PronounceBtn text="una casa" label="Listen" />
      </div>
    </div>

    <div className="lesson-card">
      <h3>6. Paglalagay ng Panghalip (Pronouns)</h3>
      <p>Ang panghalip ay maaaring: <strong>Ilagay bago ang pandiwa</strong> o <strong>Ikabit sa pandiwa</strong> (lalo na sa infinitive o gerund)</p>
      <div className="example-box">
        <div className="spanish">Lo veo.</div><div className="translation">(Nakikita ko siya)</div>
        <PronounceBtn text="Lo veo" label="Listen" />
      </div>
      <div className="example-box">
        <div className="spanish">Voy a verlo.</div><div className="translation">(Pupunta ako upang makita siya)</div>
        <PronounceBtn text="Voy a verlo" label="Listen" />
      </div>
    </div>

    <div className="lesson-card">
      <h3>7. Negasyon (Pagtanggi)</h3>
      <p>Ginagamit ang salitang <strong>"no"</strong> bago ang pandiwa.</p>
      <div className="example-box">
        <div className="spanish">No quiero comer.</div><div className="translation">(Ayaw kong kumain)</div>
        <PronounceBtn text="No quiero comer" label="Listen" />
      </div>
    </div>

    <div className="lesson-card">
      <h3>8. Pagtatanong (Interrogative Sentences)</h3>
      <p>Maaaring: <strong>Baliktarin ang ayos</strong> o <strong>Gumamit ng tandang pananong (¿ ?)</strong></p>
      <div className="example-box">
        <div className="spanish">¿Hablas español?</div><div className="translation">(Nagsasalita ka ba ng Espanyol?)</div>
        <PronounceBtn text="Hablas español" label="Listen" />
      </div>
    </div>

    <div className="lesson-card">
      <h3>9. Paggamit ng Preposisyon</h3>
      <p>Mahalaga ang wastong gamit ng mga salitang tulad ng:</p>
      <ul><li><strong>a</strong> (sa/kay)</li><li><strong>de</strong> (mula/ni)</li><li><strong>en</strong> (sa/lugar)</li></ul>
      <div className="example-box">
        <div className="spanish">Voy a la escuela.</div><div className="translation">(Pupunta ako sa paaralan)</div>
        <PronounceBtn text="Voy a la escuela" label="Listen" />
      </div>
    </div>

    <div className="lesson-card">
      <h3>10. Diin at Intonasyon</h3>
      <p>Ang diin sa pangungusap ay maaaring magbago ng kahulugan. Maaari ring baguhin ang ayos ng salita upang bigyang-diin ang isang bahagi ng pangungusap.</p>
      <p>Ang pagbuo ng pangungusap sa wikang Kastila ay nangangailangan ng pag-unawa sa estruktura, wastong banghay ng pandiwa, at pagtutugma ng mga salita. Sa pamamagitan ng pagsunod sa mga panuntunang ito, magiging malinaw at epektibo ang komunikasyon sa wikang Kastila.</p>
    </div>

    <div className="tip-card">
      <h4>💡 Quick Reference Summary</h4>
      <table>
        <thead><tr><th>#</th><th>Rule</th><th>Key Point</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Word Order</td><td>SVO (common) or VSO</td></tr>
          <tr><td>2</td><td>Verb Conjugation</td><td>Must match tense, person, number</td></tr>
          <tr><td>3</td><td>Adjective Agreement</td><td>Follows noun, matches gender & number</td></tr>
          <tr><td>4</td><td>Noun Gender</td><td>-o = masculine, -a = feminine</td></tr>
          <tr><td>5</td><td>Articles</td><td>el/la/los/las (def) • un/una/unos/unas (indef)</td></tr>
          <tr><td>6</td><td>Pronouns</td><td>Before verb or attached to infinitive/gerund</td></tr>
          <tr><td>7</td><td>Negation</td><td>"no" before the verb</td></tr>
          <tr><td>8</td><td>Questions</td><td>¿...? with inverted word order</td></tr>
          <tr><td>9</td><td>Prepositions</td><td>a (to), de (of/from), en (in/at)</td></tr>
          <tr><td>10</td><td>Stress/Intonation</td><td>Can change meaning; flexible word order for emphasis</td></tr>
        </tbody>
      </table>
    </div>
  </>)
}
