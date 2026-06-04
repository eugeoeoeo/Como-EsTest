import Lesson5 from './lessons/Lesson5'

const activities = [
  // PART I
  {
    type: 'mc',
    question: '<strong>Part I: Pattern Analysis - Q1:</strong> What is the structural difference between <em>dieciséis</em>, <em>veintiséis</em>, and <em>treinta y seis</em>?',
    options: [
      'They are all written as a single word.',
      'Dieciséis and veintiséis are contracted single words with accent marks, while treinta y seis is written as three separate words.',
      'Treinta y seis is contracted, while dieciséis and veintiséis are written separately.',
      'There is no structural difference; they follow the exact same spelling rules.'
    ],
    answer: 1,
    explanation: 'Dieciséis (16) and veintiséis (26) are contracted into single words with accents on the "e" to maintain the correct stress, whereas numbers from 31 upwards (like treinta y seis) are written as separate words connected by "y".'
  },
  {
    type: 'mc',
    question: '<strong>Part I: Pattern Analysis - Q2:</strong> Why is <em>veinticuatro</em> written as one word while <em>treinta y cuatro</em> is written separately?',
    options: [
      'Numbers in the twenties (21-29) are traditionally contracted into a single word, whereas numbers from 31-99 are kept as separate words (tens + y + ones).',
      'Veinticuatro is irregular and doesn\'t follow any pattern.',
      'Treinta y cuatro is an older form and is gradually becoming contracted.',
      'It is a regional difference between Spain and Latin America.'
    ],
    answer: 0,
    explanation: 'Spanish spelling rules dictate that numbers from 21 to 29 contract into a single word (veinti + digit), while numbers above 30 are written as separate words joined by "y".'
  },
  {
    type: 'mc',
    question: '<strong>Part I: Pattern Analysis - Q3:</strong> Why do <em>un libro</em>, <em>una mesa</em>, and <em>tengo uno</em> use different forms of "one"?',
    options: [
      'They are different dialects of Spanish.',
      '"Uno" drops the "o" before a singular masculine noun (un libro), becomes "una" before a feminine noun (una mesa), and remains "uno" when standing alone without a noun (tengo uno).',
      'They are used depending on whether the speaker is male or female.',
      'They represent different numbers entirely (1, 10, and 100).'
    ],
    answer: 1,
    explanation: '"Uno" matches gender and placement. Before a masculine singular noun, it apocopes to "un". Before a feminine singular noun, it becomes "una". Standing alone, it stays "uno".'
  },
  {
    type: 'mc',
    question: '<strong>Part I: Pattern Analysis - Q4:</strong> What is the grammatical difference between <em>cien</em> and <em>ciento</em>?',
    options: [
      'Cien is used only in Spain; ciento is used in Latin America.',
      'Cien is used for exactly 100 (e.g., cien libros), while ciento is used for numbers above 100 (e.g., ciento uno).',
      'Ciento is masculine and cien is feminine.',
      'They are completely interchangeable in all contexts.'
    ],
    answer: 1,
    explanation: 'Use "cien" for exactly one hundred of something (preceding a noun or multiplier like mil). Use "ciento" as the base for numbers from 101 to 199.'
  },
  {
    type: 'mc',
    question: '<strong>Part I: Pattern Analysis - Q5:</strong> Why is <em>mil uno</em> correct instead of <em>mil y uno</em>?',
    options: [
      'Spanish only uses "y" to join tens and units (e.g., treinta y uno), never after hundreds or thousands.',
      'Mil y uno is grammatically correct in Spain but not in the Americas.',
      'It is shorter and easier to pronounce.',
      'Mil is an adjective that forbids the use of conjunctions.'
    ],
    answer: 0,
    explanation: 'In Spanish, the conjunction "y" is only placed between tens and ones (e.g., 35 = treinta y cinco; 105 = ciento cinco; 1001 = mil uno). Do not add "y" after hundreds or thousands.'
  },

  // PART II - A
  {
    type: 'translate',
    question: '<strong>Part II: Translation & Conversion - Q6:</strong> Translate <strong>48</strong> into Spanish words.',
    answer: ['cuarenta y ocho'],
    explanation: '48 is cuarenta (40) + y + ocho (8).'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Translation & Conversion - Q7:</strong> Translate <strong>317</strong> into Spanish words.',
    answer: ['trescientos diecisiete', 'trescientos diecisiete'],
    explanation: '317 is trescientos (300) + diecisiete (17).'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Translation & Conversion - Q8:</strong> Translate <strong>1,450</strong> into Spanish words.',
    answer: ['mil cuatrocientos cincuenta'],
    explanation: '1,450 is mil (1,000) + cuatrocientos (400) + cincuenta (50).'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Translation & Conversion - Q9:</strong> Translate <strong>22,001</strong> into Spanish words.',
    answer: ['veintidós mil uno', 'veintidos mil uno'],
    explanation: '22,001 is veintidós mil (22,000) + uno (1).'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Translation & Conversion - Q10:</strong> Translate <strong>999,999</strong> into Spanish words.',
    answer: ['novecientos noventa y nueve mil novecientos noventa y nueve'],
    explanation: '999,999 is novecientos noventa y nueve mil (999,000) + novecientos noventa y nueve (999).'
  },

  // PART II - B
  {
    type: 'translate',
    question: '<strong>Part II: Translation & Conversion - Q11:</strong> Translate <strong>"the third student"</strong> (masculine singular) into Spanish words.',
    answer: ['el primer estudiante', 'el tercer estudiante'],
    explanation: 'Note that tercero drops the "o" before a singular masculine noun: "el tercer estudiante" (not "tercero").'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Translation & Conversion - Q12:</strong> Translate <strong>"the twenty-second person"</strong> (feminine) into Spanish words.',
    answer: ['la vigésima segunda persona', 'la vigesima segunda persona'],
    explanation: 'Both parts of the ordinal number must agree in gender and number: "la vigésima segunda persona" (feminine singular).'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Translation & Conversion - Q13:</strong> Translate <strong>"the first book"</strong> into Spanish words.',
    answer: ['el primer libro'],
    explanation: 'Primero drops the "o" before a singular masculine noun: "el primer libro".'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Translation & Conversion - Q14:</strong> Translate <strong>"the seventieth anniversary"</strong> (anniversary = aniversario) into Spanish words.',
    answer: ['el septuagésimo aniversario', 'el septuagesimo aniversario'],
    explanation: '70th is septuagésimo; matches masculine singular: "el septuagésimo aniversario".'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Translation & Conversion - Q15:</strong> Translate <strong>"the eleventh chapter"</strong> (chapter = capítulo) into Spanish words.',
    answer: ['el undécimo capítulo', 'el undecimo capitulo', 'el decimoprimer capítulo', 'el decimoprimer capitulo'],
    explanation: '11th can be "undécimo" or "decimoprimero" (drops -o before masculine noun: "decimoprimer capítulo").'
  },

  // PART III
  {
    type: 'error',
    question: '<strong>Part III: Error Analysis - Q16:</strong> Correct the following sentence: <br/><em>"Treinta y cinco libroses"</em>',
    answer: ['Treinta y cinco libros', 'treinta y cinco libros'],
    explanation: 'The plural of "libro" is "libros" (simply add "s" to words ending in vowels). "Libroses" is incorrect.'
  },
  {
    type: 'error',
    question: '<strong>Part III: Error Analysis - Q17:</strong> Correct the following sentence: <br/><em>"Ciento personas llegaron temprano."</em>',
    answer: ['Cien personas llegaron temprano', 'Cien personas llegaron temprano.'],
    explanation: 'Use "cien" instead of "ciento" when preceding any plural noun (masculine or feminine).'
  },
  {
    type: 'error',
    question: '<strong>Part III: Error Analysis - Q18:</strong> Correct the following sentence: <br/><em>"Veinte y dos estudiantes aprobaron."</em>',
    answer: ['Veintidós estudiantes aprobaron', 'Veintidos estudiantes aprobaron', 'Veintidós estudiantes aprobaron.'],
    explanation: 'Numbers from 21-29 are contracted into a single word: "veintidós" (requires accent mark on the "o").'
  },
  {
    type: 'error',
    question: '<strong>Part III: Error Analysis - Q19:</strong> Correct the following sentence: <br/><em>"Un millón libros fueron vendidos."</em>',
    answer: ['Un millón de libros fueron vendidos', 'Un millon de libros fueron vendidos', 'Un millón de libros fueron vendidos.'],
    explanation: 'When "millón" or "millones" is followed directly by a noun, the preposition "de" must be inserted.'
  },
  {
    type: 'error',
    question: '<strong>Part III: Error Analysis - Q20:</strong> Correct the following sentence: <br/><em>"La tercero casa es azul."</em>',
    answer: ['La tercera casa es azul', 'La tercera casa es azul.'],
    explanation: 'Ordinal numbers are adjectives and must agree with the noun. "Casa" is feminine singular, so "tercero" becomes "tercera".'
  },

  // PART IV
  {
    type: 'translate',
    question: '<strong>Part IV: Contextual Application - Q21:</strong> A customer bought an item worth $15.50. Write the amount in Spanish words.',
    answer: ['quince con cincuenta', 'quince dolares con cincuenta centavos', 'quince dólares con cincuenta centavos'],
    explanation: 'Price format: dollars con cents. 15.50 is "quince con cincuenta".'
  },
  {
    type: 'translate',
    question: '<strong>Part IV: Contextual Application - Q22:</strong> Write the date <strong>"January 1"</strong> in Spanish words.',
    answer: ['el primero de enero'],
    explanation: 'In Spanish, the first day of the month uses the ordinal: "el primero de enero".'
  },
  {
    type: 'translate',
    question: '<strong>Part IV: Contextual Application - Q23:</strong> Express the time <strong>"3:25"</strong> in Spanish words.',
    answer: ['las tres veinticinco', 'las tres y veinticinco'],
    explanation: 'Time 3:25 is expressed as "las tres veinticinco" or "las tres y veinticinco".'
  },
  {
    type: 'translate',
    question: '<strong>Part IV: Contextual Application - Q24:</strong> Translate: <strong>"She is 37 years old."</strong>',
    answer: ['Ella tiene treinta y siete años', 'Ella tiene treinta y siete anos', 'Tiene treinta y siete años'],
    explanation: 'Spanish uses "tener" (to have) for age: "Ella tiene treinta y siete años."'
  },
  {
    type: 'translate',
    question: '<strong>Part IV: Contextual Application - Q25:</strong> Translate the mathematical expression: <strong>"10 − 2 = 8"</strong>',
    answer: ['diez menos dos son ocho', 'diez menos dos es igual a ocho'],
    explanation: '10 − 2 = 8 is translated as "diez menos dos son ocho" (or "es igual a ocho").'
  },

  // PART V
  {
    type: 'mc',
    question: '<strong>Part V: Comparative Language - Q26:</strong> In the Spanish "long scale" numbering system, what is the meaning of <em>un billón</em>?',
    options: [
      'One thousand millions (1,000,000,000) or 1 billion in English.',
      'One million millions (1,000,000,000,000) or 1 trillion in English.',
      'Ten million (10,000,000).',
      'One hundred millions (100,000,000).'
    ],
    answer: 1,
    explanation: 'In the long scale system used in most Spanish-speaking countries, "un billón" is a million millions (1,000,000,000,000), which corresponds to "one trillion" in the English short scale system.'
  },
  {
    type: 'mc',
    question: '<strong>Part V: Comparative Language - Q27:</strong> How do Spanish-speaking countries write decimal numbers and large numbers differently compared to English?',
    options: [
      'They do not use numbers at all.',
      'They reverse the punctuation: they use commas for decimals (e.g., 0,5) and periods or spaces to separate thousands (e.g., 1.000).',
      'They write all numbers backwards.',
      'They use letters instead of commas.'
    ],
    answer: 1,
    explanation: 'Spanish-speaking countries conventionally reverse English formatting: a comma is used as the decimal point (e.g., 0,5 = 0.5) and dots or spaces are used to separate thousands (e.g., 1.000 = 1,000).'
  },
  {
    type: 'mc',
    question: '<strong>Part V: Comparative Language - Q28:</strong> Why must ordinal numbers in Spanish agree in gender and number with the noun they describe?',
    options: [
      'Because they function as adjectives, which always modify and agree with their nouns in Spanish grammar.',
      'They only agree when they are plural.',
      'It is an optional stylistic preference.',
      'They only agree in the feminine form.'
    ],
    answer: 0,
    explanation: 'Ordinal numbers function as adjectives. Like other adjectives, they must agree in gender (masc/fem) and number (sing/plural) with the noun they modify.'
  },
  {
    type: 'mc',
    question: '<strong>Part V: Comparative Language - Q29:</strong> What is the importance of gender agreement in Spanish numbers like the hundreds (doscientos/doscientas)?',
    options: [
      'It is only used in formal writing.',
      'It helps clarify the subject, and failure to match the noun\'s gender (e.g., "doscientos personas" instead of "doscientas personas") is grammatically incorrect.',
      'It changes the value of the number.',
      'Hundreds do not change gender.'
    ],
    answer: 1,
    explanation: 'Numbers from 200 to 999 must agree in gender with the noun they qualify. E.g. "trescientas páginas" (fem) or "trescientos libros" (masc).'
  },
  {
    type: 'mc',
    question: '<strong>Part V: Comparative Language - Q30:</strong> How does understanding numerical patterns (like suffixes -enta) help learners memorize numbers?',
    options: [
      'It allows them to guess numbers without rules.',
      'It provides a formula so they only need to memorize core stems (3-9) and multiples of ten, rather than memorizing every single number individually.',
      'It eliminates the need to learn pronunciation.',
      'It forces them to learn Latin roots.'
    ],
    answer: 1,
    explanation: 'Recognizing patterns (like adding "-enta" to stems to form multiples of ten, and joining with "y") allows students to reconstruct any number logically rather than using rote memorization.'
  },

  // PART VI
  {
    type: 'translate',
    question: '<strong>Part VI: Advanced Numerical Construction - Q31:</strong> Write the number <strong>483,382</strong> completely in Spanish words.',
    answer: ['cuatrocientos ochenta y tres mil trescientos ochenta y dos'],
    explanation: '483,382: cuatrocientos ochenta y tres mil (483,000) + trescientos ochenta y dos (382).'
  },
  {
    type: 'translate',
    question: '<strong>Part VI: Advanced Numerical Construction - Q32:</strong> Write the number <strong>6,492,000</strong> completely in Spanish words.',
    answer: ['seis millones cuatrocientos noventa y dos mil'],
    explanation: '6,492,000: seis millones (6,000,000) + cuatrocientos noventa y dos mil (492,000).'
  },
  {
    type: 'translate',
    question: '<strong>Part VI: Advanced Numerical Construction - Q33:</strong> Write the number <strong>1,000,001</strong> completely in Spanish words.',
    answer: ['un millón uno', 'un millon uno'],
    explanation: '1,000,001: un millón (1,000,000) + uno (1). Note that we do not say "un millón y uno".'
  },
  {
    type: 'translate',
    question: '<strong>Part VI: Advanced Numerical Construction - Q34:</strong> Write the number <strong>41,000</strong> completely in Spanish words.',
    answer: ['cuarenta y un mil'],
    explanation: '41,000: cuarenta y un mil. In this case, "uno" becomes "un" before "mil" to distinguish it from forty thousand.'
  },
  {
    type: 'translate',
    question: '<strong>Part VI: Advanced Numerical Construction - Q35:</strong> Write the number <strong>1,048,710</strong> completely in Spanish words.',
    answer: ['un millón cuarenta y ocho mil setecientos diez', 'un millon cuarenta y ocho mil setecientos diez'],
    explanation: '1,048,710: un millón (1,000,000) + cuarenta y ocho mil (48,000) + setecientos diez (710).'
  },

  // PART VII
  {
    type: 'error',
    question: '<strong>Part VII: Critical Thinking - Q36:</strong> Correct the student\'s error: <br/><em>"Un y medio millón de personas."</em>',
    answer: ['un millón y medio de personas', 'Un millón y medio de personas'],
    explanation: 'In Spanish, "and a half" (y medio) is placed after the main unit: "un millón y medio de personas" (literally: "a million and a half of people").'
  },
  {
    type: 'mc',
    question: '<strong>Part VII: Critical Thinking - Q37:</strong> Why is <em>quinientos</em> (500) considered irregular compared to other hundreds?',
    options: [
      'It is pronounced as a single syllable.',
      'It does not follow the standard pattern of "digit + cientos" (which would be "cincocientos"); it uses a unique stem instead.',
      'It is always feminine.',
      'It uses the letter "q" instead of "c".'
    ],
    answer: 1,
    explanation: 'While other hundreds follow "doscientos", "trescientos", "cuatrocientos", 500 is "quinientos" instead of "cincocientos", making it irregular.'
  },
  {
    type: 'mc',
    question: '<strong>Part VII: Critical Thinking - Q38:</strong> Which of the following sentences correctly combines: 1) an ordinal number, 2) a cardinal number, and 3) a price in Spanish?',
    options: [
      'El primer libro cuesta diez dólares con cincuenta centavos y tiene tres páginas.',
      'El uno libro cuesta diez con cincuenta y tiene tres páginas.',
      'El primero libro tiene tres páginas y cuesta diez dólares.',
      'El tercer libro cuesta diez con cincuenta dólares y no tiene número.'
    ],
    answer: 0,
    explanation: '"El primer libro" (1. ordinal), "tiene tres páginas" (2. cardinal), and "cuesta diez dólares con cincuenta centavos" (3. price) is grammatically correct.'
  },
  {
    type: 'mc',
    question: '<strong>Part VII: Critical Thinking - Q39:</strong> Choose the dialog line that correctly uses numbers, prices, and quantities in a restaurant context:',
    options: [
      'Camarero: Son dos dólares con cincuenta centavos por las tres copas de vino.',
      'Camarero: Son dos y medio por las y medio copas.',
      'Camarero: Cuesta dos de dólares por tres de copas.',
      'Camarero: Son dos con cincuenta por el primero vino.'
    ],
    answer: 0,
    explanation: '"Son dos dólares con cincuenta centavos por las tres copas de vino" uses correct price syntax and quantity agreement.'
  },
  {
    type: 'mc',
    question: '<strong>Part VII: Critical Thinking - Q40:</strong> How does mastering numbers in Spanish improve communication skills in real life?',
    options: [
      'It is only useful for mathematics.',
      'It is vital for basic tasks like telling time, understanding prices, discussing ages, reading dates, and communicating quantities.',
      'It allows you to bypass learning verbs.',
      'It makes you sound like a native speaker of Latin.'
    ],
    answer: 1,
    explanation: 'Numbers are fundamental in everyday commerce, schedules, age, and transactions; mastering them is critical for practical navigation in any Spanish-speaking environment.'
  }
]

const quiz = [
  { type: 'mc', question: 'How do you say <strong>0</strong> in Spanish?', options: ['cero', 'uno', 'ciento', 'cera'], answer: 0, explanation: '0 is cero.' },
  { type: 'mc', question: 'Translate <strong>14</strong> into Spanish.', options: ['doce', 'trece', 'catorce', 'quince'], answer: 2, explanation: '14 is catorce.' },
  { type: 'mc', question: 'Translate <strong>11</strong> into Spanish.', options: ['once', 'doce', 'trece', 'catorce'], answer: 0, explanation: '11 is once.' },
  { type: 'mc', question: 'Translate <strong>15</strong> into Spanish.', options: ['diez', 'quince', 'cincuenta', 'quintos'], answer: 1, explanation: '15 is quince.' },
  { type: 'mc', question: 'How is <strong>24</strong> written in Spanish?', options: ['veinte y cuatro', 'veinticuatro', 'veintedós', 'cuarenta y dos'], answer: 1, explanation: '24 is veinticuatro (contracted single word).' },
  { type: 'mc', question: 'How do you write <strong>35</strong> in Spanish?', options: ['treintaycinco', 'treinta y cinco', 'veinticinco', 'cincuenta y tres'], answer: 1, explanation: 'Numbers from 31 onwards are written as separate words with "y".' },
  { type: 'mc', question: 'Translate <strong>50</strong> into Spanish.', options: ['quince', 'cincuenta', 'sesenta', 'veinte'], answer: 1, explanation: '50 is cincuenta.' },
  { type: 'mc', question: 'Translate <strong>70</strong> into Spanish.', options: ['sesenta', 'setenta', 'ochenta', 'noventa'], answer: 1, explanation: '70 is setenta.' },
  { type: 'mc', question: 'What is <strong>100 books</strong> in Spanish?', options: ['ciento libros', 'cien libros', 'un ciento libros', 'cien de libros'], answer: 1, explanation: 'Use "cien" when describing exactly 100 of a noun.' },
  { type: 'mc', question: 'What is <strong>102</strong> in Spanish?', options: ['cien y dos', 'ciento dos', 'cien dos', 'ciento y dos'], answer: 1, explanation: '102 is ciento dos. Do not use "y" after ciento.' },
  { type: 'mc', question: 'Translate <strong>500</strong> into Spanish.', options: ['cincocientos', 'quinientos', 'quinientas', 'seiscientos'], answer: 1, explanation: '500 is quinientos (irregular).' },
  { type: 'mc', question: 'Translate <strong>700</strong> into Spanish.', options: ['sietecientos', 'setecientos', 'setecientas', 'doscientos'], answer: 1, explanation: '700 is setecientos.' },
  { type: 'mc', question: 'Translate <strong>900</strong> into Spanish.', options: ['nuevecientos', 'novecientos', 'quinientos', 'ochocientos'], answer: 1, explanation: '900 is novecientos.' },
  { type: 'mc', question: 'How do you say <strong>1,000</strong> in Spanish?', options: ['un mil', 'mil', 'ciento mil', 'un millardo'], answer: 1, explanation: '1,000 is simply "mil", not "un mil".' },
  { type: 'mc', question: 'How do you say <strong>1,000,000 books</strong> in Spanish?', options: ['mil libros', 'un millón libros', 'un millón de libros', 'un millardo de libros'], answer: 2, explanation: 'Use "un millón de + noun" for one million.' },
  { type: 'mc', question: 'Translate: <strong>"a table"</strong> or <strong>"one table"</strong>.', options: ['un mesa', 'una mesa', 'uno mesa', 'la mesa'], answer: 1, explanation: '"Mesa" is feminine, so we use "una".' },
  { type: 'mc', question: 'In Spanish-speaking countries, how is <strong>0.5</strong> written?', options: ['0.5', '0,5', '0/5', '0-5'], answer: 1, explanation: 'Spanish uses a comma for decimals.' },
  { type: 'mc', question: 'How do you say <strong>"one million and a half"</strong> in Spanish?', options: ['un y medio millón', 'un millón y medio', 'medio y un millón', 'un millón medio'], answer: 1, explanation: 'un millón y medio (placed after the noun).' },
  { type: 'mc', question: 'Translate: <strong>"the first day"</strong>.', options: ['el primero día', 'el primer día', 'la primera día', 'el primero de día'], answer: 1, explanation: 'Primero drops the "o" before a singular masculine noun.' },
  { type: 'mc', question: 'Translate: <strong>"the third son"</strong>.', options: ['el tercero hijo', 'el tercer hijo', 'la tercera hijo', 'el tres hijo'], answer: 1, explanation: 'Tercero drops the "o" before a singular masculine noun.' },
  { type: 'mc', question: 'How do you say <strong>20th</strong> in Spanish?', options: ['décimo', 'vigésimo', 'trigésimo', 'cuarto'], answer: 1, explanation: '20th is vigésimo.' },
  { type: 'mc', question: 'How do you say <strong>30th</strong> in Spanish?', options: ['vigésimo', 'trigésimo', 'cuadragésimo', 'quinto'], answer: 1, explanation: '30th is trigésimo.' },
  { type: 'mc', question: 'What is <strong>3:25</strong> in Spanish?', options: ['las tres veinticinco', 'la una y veinticinco', 'tres y cincuenta', 'las tres con veinticinco'], answer: 0, explanation: '3:25 is "las tres veinticinco".' },
  { type: 'mc', question: 'What is <strong>1:10</strong> in Spanish?', options: ['la una y diez', 'las una diez', 'las una y diez', 'el uno y diez'], answer: 0, explanation: '1:10 is "la una y diez" (singular article because it\'s "una").' },
  { type: 'mc', question: 'Translate: <strong>"January 1"</strong>.', options: ['uno de enero', 'el primero de enero', 'el un de enero', 'primero enero'], answer: 1, explanation: 'January 1 uses "el primero de enero".' },
  { type: 'mc', question: 'Translate: <strong>"September 10"</strong>.', options: ['el primero de septiembre', 'el diez de septiembre', 'diez septiembre', 'el décimo de septiembre'], answer: 1, explanation: 'Dates other than the 1st use cardinal numbers: "el diez de septiembre".' },
  { type: 'mc', question: 'Translate: <strong>"She is 10 years old."</strong>', options: ['Ella es diez años.', 'Ella tiene diez años.', 'Ella hace diez años.', 'Ella está diez años.'], answer: 1, explanation: 'Use "tener" for age: "Ella tiene diez años."' },
  { type: 'mc', question: 'Translate: <strong>"300 flowers"</strong> (flower = flor, feminine).', options: ['trescientos flores', 'trescientas flores', 'tresciento flores', 'cien tres flores'], answer: 1, explanation: 'Hundreds agree in gender: "trescientas flores".' },
  { type: 'mc', question: 'Translate: <strong>"3 + 3 = 6"</strong>.', options: ['tres más tres son seis', 'tres menos tres son seis', 'tres más tres es seis', 'tres por tres son seis'], answer: 0, explanation: '3 + 3 = 6 is "tres más tres son seis".' },
  { type: 'mc', question: 'Translate: <strong>"10 - 2 = 8"</strong>.', options: ['diez más dos son ocho', 'diez menos dos son ocho', 'diez menos dos es ocho', 'diez por dos son ocho'], answer: 1, explanation: '10 - 2 = 8 is "diez menos dos son ocho".' },
  { type: 'mc', question: 'What is <strong>$15.50</strong> written in Spanish words?', options: ['quince cincuenta', 'quince con cincuenta', 'quince y cincuenta', 'quince de cincuenta'], answer: 1, explanation: 'Prices use "con": quince con cincuenta.' },
  { type: 'mc', question: 'Which number is <strong>diecisiete</strong>?', options: ['16', '17', '18', '19'], answer: 1, explanation: 'diecisiete = 17.' },
  { type: 'mc', question: 'Which number is <strong>veintiséis</strong>?', options: ['16', '26', '36', '46'], answer: 1, explanation: 'veintiséis = 26.' },
  { type: 'mc', question: 'Translate: <strong>"the second book"</strong>.', options: ['el segundo libro', 'el segundo de libro', 'la segunda libro', 'el primer libro'], answer: 0, explanation: 'second book = el segundo libro.' },
  { type: 'mc', question: 'Translate: <strong>"the twenty-second chapter"</strong>.', options: ['el vigésimo segundo capítulo', 'el vigésimo tercero capítulo', 'la vigésima segunda capítulo', 'el veinte y dos capítulo'], answer: 0, explanation: '"el vigésimo segundo capítulo" (masculine singular agreement).' },
  { type: 'mc', question: 'How is <strong>41,000 books</strong> written?', options: ['cuarenta y uno mil libros', 'cuarenta y un mil libros', 'cuarenta un mil libros', 'cuarenta y una mil libros'], answer: 1, explanation: 'Use "cuarenta y un mil" before a noun.' },
  { type: 'mc', question: 'What is <strong>20,000</strong> in Spanish?', options: ['veinte mil', 'veinte mil millones', 'dos mil', 'doscientos mil'], answer: 0, explanation: '20,000 is veinte mil.' },
  { type: 'mc', question: 'Translate <strong>80</strong> into Spanish.', options: ['sesenta', 'setenta', 'ochenta', 'noventa'], answer: 2, explanation: '80 is ochenta.' },
  { type: 'mc', question: 'Translate <strong>90</strong> into Spanish.', options: ['sesenta', 'setenta', 'ochenta', 'noventa'], answer: 3, explanation: '90 is noventa.' },
  { type: 'mc', question: 'Translate <strong>13</strong> into Spanish.', options: ['once', 'doce', 'trece', 'quince'], answer: 2, explanation: '13 is trece.' },
  { type: 'mc', question: 'Translate <strong>12</strong> into Spanish.', options: ['once', 'doce', 'trece', 'catorce'], answer: 1, explanation: '12 is doce.' },
  { type: 'mc', question: 'What is the Spanish word for <strong>1,000,000,000</strong> (one billion in English short scale)?', options: ['un billón', 'un millardo (or mil millones)', 'un millón', 'cien millones'], answer: 1, explanation: '1,000,000,000 is un millardo or mil millones.' },
  { type: 'mc', question: 'What is the Spanish word for <strong>1,000,000,000,000</strong> (one trillion in English short scale)?', options: ['un billón', 'un millardo', 'un trillón', 'mil millones'], answer: 0, explanation: '1,000,000,000,000 is un billón in the long scale system.' },
  { type: 'mc', question: 'Translate: <strong>"the fifth house"</strong>.', options: ['el quinto casa', 'la quinta casa', 'la quinto casa', 'el cinco casa'], answer: 1, explanation: '"Casa" is feminine, so we use "la quinta casa".' },
  { type: 'mc', question: 'Translate: <strong>"the eighth student"</strong>.', options: ['el octavo estudiante', 'la octava estudiante', 'el ocho estudiante', 'el octogésimo estudiante'], answer: 0, explanation: 'eighth student = el octavo estudiante.' },
  { type: 'mc', question: 'Translate: <strong>"the tenth chapter"</strong>.', options: ['el décimo capítulo', 'el decimo capitulo', 'la décima capítulo', 'el diez capítulo'], answer: 0, explanation: '10th chapter = el décimo capítulo.' },
  { type: 'mc', question: 'What is <strong>200</strong> in Spanish?', options: ['doscientos', 'trescientos', 'cuatrocientos', 'quinientos'], answer: 0, explanation: '200 is doscientos.' },
  { type: 'mc', question: 'What is <strong>400</strong> in Spanish?', options: ['doscientos', 'trescientos', 'cuatrocientos', 'quinientos'], answer: 2, explanation: '400 is cuatrocientos.' },
  { type: 'mc', question: 'What is <strong>800</strong> in Spanish?', options: ['seiscientos', 'setecientos', 'ochocientos', 'novecientos'], answer: 2, explanation: '800 is ochocientos.' },
  { type: 'mc', question: 'What is <strong>129</strong> in Spanish?', options: ['cien veintinueve', 'ciento veintinueve', 'cien y veintinueve', 'ciento y veintinueve'], answer: 1, explanation: '129 is ciento veintinueve.' }
]

const communicate = [
  { type: 'translate', question: 'Translate to Spanish: "Today is January first."', answer: ['Hoy es el primero de enero', 'hoy es primero de enero', 'Hoy es primero de enero'], explanation: 'Hoy es el primero de enero' },
  { type: 'translate', question: 'Translate to Spanish: "I am twenty years old."', answer: ['Tengo veintidós años', 'Tengo veinte años', 'tengo veinte anos', 'Tengo veinte anos'], explanation: 'Tengo veinte años' },
  { type: 'translate', question: 'Translate to Spanish: "The book costs fifteen pesos."', answer: ['El libro cuesta quince pesos', 'el libro cuesta quince pesos'], explanation: 'El libro cuesta quince pesos' },
  { type: 'translate', question: 'Translate to Spanish: "It is three o\'clock."', answer: ['Son las tres', 'son las tres'], explanation: 'Son las tres' },
  { type: 'translate', question: 'Translate to Spanish: "It is one o\'clock."', answer: ['Es la una', 'es la una'], explanation: 'Es la una (singular because it is one)' },
  { type: 'translate', question: 'Translate to Spanish: "I have five hundred pesos."', answer: ['Tengo quinientos pesos', 'tengo quinientos pesos'], explanation: 'Tengo quinientos pesos (quinientos agrees with pesos)' },
  { type: 'translate', question: 'Translate to Spanish: "The building has ten floors."', answer: ['El edificio tiene diez pisos', 'el edificio tiene diez pisos'], explanation: 'El edificio tiene diez pisos' },
  { type: 'translate', question: 'Translate to Spanish: "My phone number is nine-eight-seven."', answer: ['Mi número de teléfono es nueve ocho siete', 'mi numero de telefono es nueve ocho siete', 'Mi número es nueve ocho siete'], explanation: 'Mi número de teléfono es nueve ocho siete' },
  { type: 'translate', question: 'Translate to Spanish: "Today is October twelve."', answer: ['Hoy es doce de octubre', 'hoy es el doce de octubre', 'Hoy es el doce de octubre'], explanation: 'Hoy es doce de octubre' },
  { type: 'translate', question: 'Translate to Spanish: "There are one million books."', answer: ['Hay un millón de libros', 'hay un millon de libros', 'Hay un millon de libros'], explanation: 'Hay un millón de libros' },
  { type: 'translate', question: 'Translate to Spanish: "He is thirty-one years old."', answer: ['Él tiene treinta y un años', 'el tiene treinta y un anos', 'Tiene treinta y un años'], explanation: 'Él tiene treinta y un años' },
  { type: 'translate', question: 'Translate to Spanish: "We have twenty-four hours."', answer: ['Tenemos veinticuatro horas', 'tenemos veinticuatro horas'], explanation: 'Tenemos veinticuatro horas' },
  { type: 'translate', question: 'Translate to Spanish: "It is twelve o\'clock."', answer: ['Son las doce', 'son las doce'], explanation: 'Son las doce' },
  { type: 'translate', question: 'Translate to Spanish: "She has three dogs."', answer: ['Ella tiene tres perros', 'ella tiene tres perros'], explanation: 'Ella tiene tres perros' },
  { type: 'translate', question: 'Translate to Spanish: "I want fifty pesos."', answer: ['Quiero cincuenta pesos', 'quiero cincuenta pesos'], explanation: 'Quiero cincuenta pesos' }
]

export const ch5 = {
  icon: '🔢',
  title: 'Los Números en Español',
  description: 'Numbers in Spanish — Cardinals, Ordinals, Usage, and Patterns',
  lesson: <Lesson5 />,
  activities,
  communicate,
  quiz
}
