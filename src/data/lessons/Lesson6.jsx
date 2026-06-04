import PronounceBtn from '../../components/PronounceBtn'

export default function Lesson6() {
  const colors = [
    ['red', 'rojo', 'roja', 'rojos', 'rojas'],
    ['yellow', 'amarillo', 'amarilla', 'amarillos', 'amarillas'],
    ['black', 'negro', 'negra', 'negros', 'negras'],
    ['white', 'blanco', 'blanca', 'blancos', 'blancas'],
    ['orange', 'naranja', 'naranja', 'naranjas', 'naranjas'],
    ['pink', 'rosa', 'rosa', 'rosas', 'rosas'],
    ['blue', 'azul', 'azul', 'azules', 'azules'],
    ['green', 'verde', 'verde', 'verdes', 'verdes'],
    ['brown', 'marrón', 'marrón', 'marrones', 'marrones'],
    ['grey', 'gris', 'gris', 'grises', 'grises'],
    ['purple', 'morado', 'morada', 'morados', 'moradas'],
  ]

  return (<>
    <div className="lesson-card">
      <h2>🎨 Los Colores en Español</h2>
      <p>Colors in Spanish function as adjectives, which means they must agree in gender and number with the noun they describe.</p>
    </div>

    <div className="lesson-card">
      <h3>Basic Colors & Inflections</h3>
      <table>
        <thead>
          <tr>
            <th>English</th>
            <th>Masc. Sing.</th>
            <th>Fem. Sing.</th>
            <th>Masc. Plur.</th>
            <th>Fem. Plur.</th>
            <th>🔊</th>
          </tr>
        </thead>
        <tbody>
          {colors.map(([en, ms, fs, mp, fp]) => (
            <tr key={en}>
              <td><strong>{en}</strong></td>
              <td className="spanish">{ms}</td>
              <td className="spanish">{fs}</td>
              <td className="spanish">{mp}</td>
              <td className="spanish">{fp}</td>
              <td><PronounceBtn text={ms} label="🔊" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="lesson-card">
      <h3>Grammar Rules for Colors</h3>
      <h4>Rule 1: Placement</h4>
      <p>Like most adjectives in Spanish, color words <strong>follow the noun</strong> they modify.</p>
      <div className="example-box">
        <div className="spanish">el libro rojo • las manzanas rojas</div>
        <div className="translation">(the red book • the red apples)</div>
      </div>

      <h4>Rule 2: Ending in -o</h4>
      <p>Colors that end in <strong>-o</strong> have four forms: masculine singular (-o), feminine singular (-a), masculine plural (-os), and feminine plural (-as).</p>
      <div className="example-box">
        <div className="spanish">el coche negro • la mesa negra • los coches negros • las mesas negras</div>
      </div>

      <h4>Rule 3: Ending in a Consonant or -e</h4>
      <p>Colors that end in a consonant (like <strong>azul</strong>, <strong>marrón</strong>, <strong>gris</strong>) or <strong>-e</strong> (like <strong>verde</strong>) do not change for gender, only for number (add <strong>-es</strong> or <strong>-s</strong>).</p>
      <div className="example-box">
        <div className="spanish">el libro verde • la silla verde • los libros verdes • las sillas verdes</div>
        <div className="spanish">el lápiz azul • la pluma azul • los lápices azules • las plumas azules</div>
      </div>

      <h4>Rule 4: Invariable Colors (Derived from Fruits/Flowers)</h4>
      <p>Colors that are also nouns (like <strong>naranja</strong> [orange], <strong>rosa</strong> [rose/pink]) sometimes do not change for gender. In plural, they add <strong>-s</strong> (naranjas, rosas).</p>
    </div>

    <div className="lesson-card">
      <h3>Idiomatic Expressions & Light/Dark shades</h3>
      <p>To specify shades of color, use:</p>
      <ul>
        <li><strong>claro</strong> (light / pale) — e.g., <em>azul claro</em> (light blue)</li>
        <li><strong>oscuro</strong> (dark) — e.g., <em>verde oscuro</em> (dark green)</li>
      </ul>
      <p>Note: When you add claro/oscuro, the color phrase usually remains masculine singular or doesn't change gender: <em>camisas azul claro</em>.</p>
    </div>

    <div className="tip-card">
      <h4>💡 Key Takeaways</h4>
      <ul>
        <li>Colors always come AFTER the noun they describe.</li>
        <li>"Rojo" has 4 forms: <em>rojo, roja, rojos, rojas</em>.</li>
        <li>"Verde" and "Azul" have only 2 forms (singular and plural): <em>verde/verdes, azul/azules</em>.</li>
        <li>"Claro" = Light, "Oscuro" = Dark.</li>
      </ul>
    </div>
  </>)
}
