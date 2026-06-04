import PronounceBtn from '../../components/PronounceBtn'

export default function Lesson5() {
  return (<>
    <div className="lesson-card">
      <h2>🔢 Numbers in Spanish — Los Números en Español</h2>
      <p>Numbers are essential for getting around in the world. In this lesson, we cover cardinal numbers (0–1,000,000+), ordinal numbers, and practical usage.</p>
      <div className="highlight"><p><strong>Note:</strong> Pronunciation differs between Spain and Latin America. In the Americas, 'c' before 'e' or 'i' = "s" sound. In Spain = "th" sound.</p></div>
    </div>

    <div className="lesson-card">
      <h3>Numbers 1–15 (Memorize These)</h3>
      <table>
        <thead><tr><th>#</th><th>Spanish</th><th>🔊</th></tr></thead>
        <tbody>
          {[['0','cero'],['1','uno'],['2','dos'],['3','tres'],['4','cuatro'],['5','cinco'],['6','seis'],['7','siete'],['8','ocho'],['9','nueve'],['10','diez'],['11','once'],['12','doce'],['13','trece'],['14','catorce'],['15','quince']].map(([n,w]) => (
            <tr key={n}><td>{n}</td><td>{w}</td><td><PronounceBtn text={w} label="🔊" /></td></tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="lesson-card">
      <h3>Numbers 16–19 (Pattern: dieci + digit)</h3>
      <p>Take the digit and say "diez + y + (digit)" which contracts:</p>
      <table>
        <thead><tr><th>#</th><th>Spanish</th><th>🔊</th></tr></thead>
        <tbody>
          {[['16','dieciséis'],['17','diecisiete'],['18','dieciocho'],['19','diecinueve']].map(([n,w]) => (
            <tr key={n}><td>{n}</td><td>{w}</td><td><PronounceBtn text={w} label="🔊" /></td></tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="lesson-card">
      <h3>Multiples of 10</h3>
      <table>
        <thead><tr><th>#</th><th>Spanish</th><th>🔊</th></tr></thead>
        <tbody>
          {[['20','veinte'],['30','treinta'],['40','cuarenta'],['50','cincuenta'],['60','sesenta'],['70','setenta'],['80','ochenta'],['90','noventa']].map(([n,w]) => (
            <tr key={n}><td>{n}</td><td>{w}</td><td><PronounceBtn text={w} label="🔊" /></td></tr>
          ))}
        </tbody>
      </table>
      <div className="highlight"><p>Other than veinte, they all end in <strong>-enta</strong> and relate to their smaller number: cuatro↔cuarenta, ocho↔ochenta, etc.</p></div>
    </div>

    <div className="lesson-card">
      <h3>Numbers 21–29 (Contract into one word)</h3>
      <p>21–29 contract: instead of "veinte y cuatro", write <strong>veinticuatro</strong>.</p>
      <table>
        <thead><tr><th>#</th><th>Spanish</th></tr></thead>
        <tbody>
          {[['21','veintiuno'],['22','veintidós'],['23','veintitrés'],['24','veinticuatro'],['25','veinticinco'],['26','veintiséis'],['27','veintisiete'],['28','veintiocho'],['29','veintinueve']].map(([n,w]) => (
            <tr key={n}><td>{n}</td><td>{w}</td></tr>
          ))}
        </tbody>
      </table>
      <h3>Numbers 30+ (Separate words with "y")</h3>
      <p>For 31+: tens + y + ones. E.g., 31 = <strong>treinta y uno</strong>, 45 = <strong>cuarenta y cinco</strong></p>
    </div>

    <div className="lesson-card">
      <h3>100 — Cien vs Ciento</h3>
      <p><strong>Cien</strong> = exactly 100. <strong>Ciento</strong> = part of a larger number.</p>
      <div className="example-box"><div className="spanish">Cien personas (100 people) • Ciento uno (101)</div></div>
      <p>Note: no "y" after ciento — it's <strong>ciento uno</strong>, NOT ciento y uno.</p>

      <h3>Hundreds (200–900)</h3>
      <table>
        <thead><tr><th>#</th><th>Spanish</th></tr></thead>
        <tbody>
          {[['200','doscientos'],['300','trescientos'],['400','cuatrocientos'],['500','quinientos'],['600','seiscientos'],['700','setecientos'],['800','ochocientos'],['900','novecientos']].map(([n,w]) => (
            <tr key={n}><td>{n}</td><td>{w}</td></tr>
          ))}
        </tbody>
      </table>
      <p>These have masculine/feminine forms: <strong>setecientas personas</strong> (700 people, fem.) vs <strong>ochocientos libros</strong> (800 books, masc.)</p>
    </div>

    <div className="lesson-card">
      <h3>Thousands and Millions</h3>
      <p><strong>1,000 = mil</strong> (NOT "un mil"). <strong>1,000,000 = un millón</strong> (can't leave out "un").</p>
      <div className="example-box">
        <p>1,001 = <strong>mil uno</strong> (NOT mil y uno!)</p>
        <p>1,686 = mil seiscientos ochenta y seis</p>
        <p>20,000 = veinte mil</p>
        <p>100,000 = cien mil</p>
        <p>483,382 = cuatrocientos ochenta y tres mil trescientos ochenta y dos</p>
        <p>1,000,000 = un millón</p>
        <p>6,492,000 = seis millones cuatrocientos noventa y dos mil</p>
      </div>
      <p><strong>Important:</strong> With millón/millones + noun, use <strong>"de"</strong>: un millón <strong>de</strong> libros.</p>

      <h3>Billions/Trillions — Long Scale vs Short Scale</h3>
      <table>
        <thead><tr><th>Spanish</th><th>Value</th><th>English Equivalent</th></tr></thead>
        <tbody>
          <tr><td>un millón</td><td>1,000,000</td><td>one million</td></tr>
          <tr><td>un millardo (mil millones)</td><td>1,000,000,000</td><td>one billion</td></tr>
          <tr><td>un billón</td><td>1,000,000,000,000</td><td>one trillion</td></tr>
          <tr><td>mil billones</td><td>10¹⁵</td><td>one quadrillion</td></tr>
          <tr><td>un trillón</td><td>10¹⁸</td><td>one quintillion</td></tr>
        </tbody>
      </table>
    </div>

    <div className="lesson-card">
      <h3>Un, Uno, or Una?</h3>
      <p>Spanish doesn't distinguish between "one" and "a" the same way English does.</p>
      <ul>
        <li><strong>Un libro</strong> — "a/one book" (drop the 'o' before masculine noun)</li>
        <li><strong>Una mesa</strong> — "a/one table" (feminine form)</li>
        <li><strong>Tengo uno</strong> — "I have one" (standalone, unchanged)</li>
        <li><strong>"¿Hay preguntas?" "Solo una."</strong> — "Only one" (feminine, referring to pregunta)</li>
      </ul>

      <h3>Cien or Ciento?</h3>
      <ul>
        <li><strong>Cien</strong> = exactly 100 (cien personas, cien libros)</li>
        <li><strong>Ciento</strong> = part of larger number (ciento uno = 101)</li>
      </ul>

      <h3>Dots vs Commas in Numbers</h3>
      <p>In Spanish-speaking countries, conventions are <strong>reversed</strong> from English:</p>
      <ul>
        <li>Decimal: comma → 0,5 (not 0.5)</li>
        <li>Thousands separator: dot or space → 1.048.710 or 1 048 710</li>
      </ul>

      <h3>"...and a Half" — y medio</h3>
      <p>Say <strong>un millón y medio</strong> (NOT "un y medio millón"). The "y medio" goes AFTER the number word.</p>
    </div>

    <div className="lesson-card">
      <h3>Ordinal Numbers</h3>
      <table>
        <thead><tr><th>English</th><th>Spanish</th><th>🔊</th></tr></thead>
        <tbody>
          {[['first','primero'],['second','segundo'],['third','tercero'],['fourth','cuarto'],['fifth','quinto'],['sixth','sexto'],['seventh','séptimo'],['eighth','octavo'],['ninth','noveno'],['tenth','décimo']].map(([en,es]) => (
            <tr key={en}><td>{en}</td><td>{es}</td><td><PronounceBtn text={es} label="🔊" /></td></tr>
          ))}
        </tbody>
      </table>
      <p><strong>Ordinals go BEFORE the noun</strong> (unlike most adjectives): <em>el segundo libro</em>, <em>las primeras flores</em></p>
      <p><strong>Primero/tercero</strong> drop the "o" before singular masculine noun: <em>el primer día</em>, <em>el tercer hijo</em></p>

      <h3>Ordinals for Multiples of 10</h3>
      <table>
        <thead><tr><th>English</th><th>Spanish</th></tr></thead>
        <tbody>
          {[['20th','vigésimo'],['30th','trigésimo'],['40th','cuadragésimo'],['50th','quincuagésimo'],['60th','sexagésimo'],['70th','septuagésimo'],['80th','octogésimo'],['90th','nonagésimo']].map(([en,es]) => (
            <tr key={en}><td>{en}</td><td>{es}</td></tr>
          ))}
        </tbody>
      </table>
      <p>Combine: 22nd = <strong>vigésimo segundo</strong>. Both parts agree with the noun: la vigésim<strong>a</strong> segund<strong>a</strong> persona.</p>
      <p>11th–19th are often one word: <strong>decimoprimero</strong> (11th).</p>
    </div>

    <div className="lesson-card">
      <h3>Usage Examples</h3>
      <table>
        <thead><tr><th>Context</th><th>Example</th><th>🔊</th></tr></thead>
        <tbody>
          <tr><td>Time</td><td>1:10 = la una y diez • 3:25 = las tres veinticinco</td><td><PronounceBtn text="la una y diez" label="🔊" /></td></tr>
          <tr><td>Date</td><td>Sept 10 = el diez de septiembre • Jan 1 = el primero de enero</td><td><PronounceBtn text="el diez de septiembre" label="🔊" /></td></tr>
          <tr><td>Age</td><td>10 years = diez años • 37 years = treinta y siete años</td><td><PronounceBtn text="treinta y siete años" label="🔊" /></td></tr>
          <tr><td>Adjective</td><td>Two books = dos libros • 300 flowers = trescientas flores</td><td><PronounceBtn text="trescientas flores" label="🔊" /></td></tr>
          <tr><td>Price</td><td>$2.20 = dos con veinte • $15.50 = quince con cincuenta</td><td><PronounceBtn text="quince con cincuenta" label="🔊" /></td></tr>
          <tr><td>Math</td><td>3+3=6 = tres más tres son seis • 10-2=8 = diez menos dos son ocho</td><td><PronounceBtn text="tres más tres son seis" label="🔊" /></td></tr>
        </tbody>
      </table>
    </div>
  </>)
}
