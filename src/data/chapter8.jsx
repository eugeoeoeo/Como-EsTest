import React from 'react'
import Lesson8 from './lessons/Lesson8'

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
    question: '<strong>Part II: Cardinal Numbers - Q6:</strong> Translate <strong>48</strong> into Spanish words.',
    answer: ['cuarenta y ocho'],
    explanation: '48 is cuarenta (40) + y + ocho (8).'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Cardinal Numbers - Q7:</strong> Translate <strong>317</strong> into Spanish words.',
    answer: ['trescientos diecisiete'],
    explanation: '317 is trescientos (300) + diecisiete (17).'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Cardinal Numbers - Q8:</strong> Translate <strong>1,450</strong> into Spanish words.',
    answer: ['mil cuatrocientos cincuenta'],
    explanation: '1,450 is mil (1,000) + cuatrocientos (400) + cincuenta (50).'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Cardinal Numbers - Q9:</strong> Translate <strong>22,001</strong> into Spanish words.',
    answer: ['veintidós mil uno', 'veintidos mil uno'],
    explanation: '22,001 is veintidós mil (22,000) + uno (1).'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Cardinal Numbers - Q10:</strong> Translate <strong>999,999</strong> into Spanish words.',
    answer: ['novecientos noventa y nueve mil novecientos noventa y nueve'],
    explanation: '999,999 is novecientos noventa y nueve mil (999,000) + novecientos noventa y nueve (999).'
  },
  // PART II - B
  {
    type: 'translate',
    question: '<strong>Part II: Ordinal Numbers - Q11:</strong> Translate <strong>"the third student"</strong> (masculine singular) into Spanish words.',
    answer: ['el primer estudiante', 'el tercer estudiante'],
    explanation: 'Note that tercero drops the "o" before a singular masculine noun: "el tercer estudiante" (not "tercero").'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Ordinal Numbers - Q12:</strong> Translate <strong>"the twenty-second person"</strong> (feminine) into Spanish words.',
    answer: ['la vigésima segunda persona', 'la vigesima segunda persona'],
    explanation: 'Both parts of the ordinal number must agree in gender and number: "la vigésima segunda persona" (feminine singular).'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Ordinal Numbers - Q13:</strong> Translate <strong>"the first book"</strong> into Spanish words.',
    answer: ['el primer libro'],
    explanation: 'Primero drops the "o" before a singular masculine noun: "el primer libro".'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Ordinal Numbers - Q14:</strong> Translate <strong>"the seventieth anniversary"</strong> (anniversary = aniversario) into Spanish words.',
    answer: ['el septuagésimo aniversario', 'el septuagesimo aniversario'],
    explanation: '70th is septuagésimo; matches masculine singular: "el septuagésimo aniversario".'
  },
  {
    type: 'translate',
    question: '<strong>Part II: Ordinal Numbers - Q15:</strong> Translate <strong>"the eleventh chapter"</strong> (chapter = capítulo) into Spanish words.',
    answer: ['el undécimo capítulo', 'el undecimo capitulo', 'el decimoprimer capítulo', 'el decimoprimer capitulo'],
    explanation: '11th can be "undécimo" or "decimoprimero" (drops -o before masculine noun: "decimoprimer capítulo").'
  },
  // PART III
  {
    type: 'error',
    question: '<strong>Part III: Error Analysis - Q16:</strong> Correct the following sentence: <br/><em>"Treinta y cinco libroses"</em>',
    answer: ['Treinta y cinco libros', 'treinta y cinco libros'],
    explanation: 'The plural of "libro" is "libros". "Libroses" is incorrect.'
  },
  {
    type: 'error',
    question: '<strong>Part III: Error Analysis - Q17:</strong> Correct the following sentence: <br/><em>"Ciento personas llegaron temprano."</em>',
    answer: ['Cien personas llegaron temprano', 'Cien personas llegaron temprano.'],
    explanation: 'Use "cien" instead of "ciento" when preceding any plural noun.'
  },
  {
    type: 'error',
    question: '<strong>Part III: Error Analysis - Q18:</strong> Correct the following sentence: <br/><em>"Veinte y dos estudiantes aprobaron."</em>',
    answer: ['Veintidós estudiantes aprobaron', 'Veintidos estudiantes aprobaron', 'Veintidós estudiantes aprobaron.'],
    explanation: 'Numbers from 21-29 are contracted into a single word: "veintidós".'
  },
  {
    type: 'error',
    question: '<strong>Part III: Error Analysis - Q19:</strong> Correct the following sentence: <br/><em>"Un millón libros fueron vendidos."</em>',
    answer: ['Un millón de libros fueron vendidos', 'Un millon de libros fueron vendidos', 'Un millón de libros fueron vendidos.'],
    explanation: 'When "millón" is followed directly by a noun, the preposition "de" must be inserted.'
  },
  {
    type: 'error',
    question: '<strong>Part III: Error Analysis - Q20:</strong> Correct the following sentence: <br/><em>"La tercero casa es azul."</em>',
    answer: ['La tercera casa es azul', 'La tercera casa es azul.'],
    explanation: 'Ordinal numbers must agree with their nouns. "Casa" is feminine singular, so "tercero" becomes "tercera".'
  },
  // PART IV
  {
    type: 'translate',
    question: '<strong>Part IV: Contextual Application - Q21:</strong> A customer bought an item worth $15.50. Write the amount in Spanish words.',
    answer: ['quince con cincuenta', 'quince dolares con cincuenta centavos', 'quince dólares con cincuenta centavos'],
    explanation: 'Price: quince con cincuenta.'
  },
  {
    type: 'translate',
    question: '<strong>Part IV: Contextual Application - Q22:</strong> Write the date <strong>"January 1"</strong> in Spanish words.',
    answer: ['el primero de enero'],
    explanation: 'January 1 uses the ordinal first: "el primero de enero".'
  },
  {
    type: 'translate',
    question: '<strong>Part IV: Contextual Application - Q23:</strong> Express the time <strong>"3:25"</strong> in Spanish words.',
    answer: ['las tres veinticinco', 'las tres y veinticinco'],
    explanation: '3:25 is "las tres veinticinco" or "las tres y veinticinco".'
  },
  {
    type: 'translate',
    question: '<strong>Part IV: Contextual Application - Q24:</strong> Translate: <strong>"She is 37 years old."</strong>',
    answer: ['Ella tiene treinta y siete años', 'Ella tiene treinta y siete anos', 'Tiene treinta y siete años'],
    explanation: 'Spanish uses "tener" for age: "Ella tiene treinta y siete años."'
  },
  {
    type: 'translate',
    question: '<strong>Part IV: Contextual Application - Q25:</strong> Translate the mathematical expression: <strong>"10 − 2 = 8"</strong>',
    answer: ['diez menos dos son ocho', 'diez menos dos es igual a ocho'],
    explanation: '10 − 2 = 8 is "diez menos dos son ocho".'
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
    explanation: 'In the long scale system, "un billón" is a million millions (1,000,000,000,000), which corresponds to "one trillion" in English.'
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
    explanation: 'Spanish-speaking countries conventionally use commas for decimals and periods/spaces for thousands.'
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
    explanation: 'Ordinal numbers function as adjectives. Like other adjectives, they must agree in gender and number with the noun they modify.'
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
    explanation: 'Numbers from 200 to 999 must agree in gender with the noun they qualify (e.g. doscientas personas).'
  },
  {
    type: 'mc',
    question: '<strong>Part V: Comparative Language - Q30:</strong> How does understanding numerical patterns (like suffixes -enta) help learners memorize numbers?',
    options: [
      'It allows them to guess numbers without rules.',
      'It provides a formula so they only need to memorize core stems (3-9) and multiples of ten, rather than memorizing every single number individually.',
      'It eliminates the need to learn pronunciation.',
      'It makes them learn Latin roots.'
    ],
    answer: 1,
    explanation: 'Recognizing patterns (like adding "-enta" to stems to form multiples of ten) allows students to reconstruct any number logically.'
  },
  // PART VI
  {
    type: 'translate',
    question: '<strong>Part VI: Advanced Numerical Construction - Q31:</strong> Write the number <strong>483,382</strong> completely in Spanish words.',
    answer: ['cuatrocientos ochenta y tres mil trescientos ochenta y dos'],
    explanation: '483,382 is cuatrocientos ochenta y tres mil trescientos ochenta y dos.'
  },
  {
    type: 'translate',
    question: '<strong>Part VI: Advanced Numerical Construction - Q32:</strong> Write the number <strong>6,492,000</strong> completely in Spanish words.',
    answer: ['seis millones cuatrocientos noventa y dos mil'],
    explanation: '6,492,000 is seis millones cuatrocientos noventa y dos mil.'
  },
  {
    type: 'translate',
    question: '<strong>Part VI: Advanced Numerical Construction - Q33:</strong> Write the number <strong>1,000,001</strong> completely in Spanish words.',
    answer: ['un millón uno', 'un millon uno'],
    explanation: '1,000,001 is un millón uno.'
  },
  {
    type: 'translate',
    question: '<strong>Part VI: Advanced Numerical Construction - Q34:</strong> Write the number <strong>41,000</strong> completely in Spanish words.',
    answer: ['cuarenta y un mil'],
    explanation: '41,000 is cuarenta y un mil.'
  },
  {
    type: 'translate',
    question: '<strong>Part VI: Advanced Numerical Construction - Q35:</strong> Write the number <strong>1,048,710</strong> completely in Spanish words.',
    answer: ['un millón cuarenta y ocho mil setecientos diez', 'un millon cuarenta y ocho mil setecientos diez'],
    explanation: '1,048,710 is un millón cuarenta y ocho mil setecientos diez.'
  },
  // PART VII
  {
    type: 'error',
    question: '<strong>Part VII: Critical Thinking - Q36:</strong> Correct the student\'s error: <br/><em>"Un y medio millón de personas."</em>',
    answer: ['un millón y medio de personas', 'Un millón y medio de personas'],
    explanation: '"un millón y medio de personas" (literally: "a million and a half of people").'
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
    explanation: '500 is "quinientos" instead of "cincocientos", making it irregular.'
  },
  {
    type: 'mc',
    question: '<strong>Part VII: Critical Thinking - Q38:</strong> Which of the following sentences correctly combines: 1) an ordinal number, 2) a cardinal number, and 3) a price in Spanish?',
    options: [
      'El primer libro cuesta diez dólares con cincuenta centavos y tiene tres páginas.',
      'El uno libro cuesta diez con cincuenta y tiene tres páginas.',
      'El primero libro tiene tres páginas and cuesta diez dólares.',
      'El tercer libro cuesta diez con cincuenta dólares y no tiene número.'
    ],
    answer: 0,
    explanation: '"El primer libro" (ordinal), "tiene tres páginas" (cardinal), and "cuesta diez dólares con cincuenta centavos" (price) is correct.'
  },
  {
    type: 'mc',
    question: '<strong>Part VII: Critical Thinking - Q39:</strong> Choose the dialog line that correctly uses numbers, prices, and quantities in a restaurant context:',
    options: [
      'Camarero: Son dos dólares con cincuenta centavos por las three copas de vino.',
      'Camarero: Son dos dólares con cincuenta centavos por las tres copas de vino.',
      'Camarero: Cuesta dos de dólares por tres de copas.',
      'Camarero: Son dos con cincuenta por el primero vino.'
    ],
    answer: 1,
    explanation: '"Son dos dólares con cincuenta centavos por las tres copas de vino" is grammatically correct.'
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
    explanation: 'Numbers are fundamental in everyday commerce, schedules, age, and transactions.'
  }
]

const communicate = [
  { type: 'translate', question: 'Say in Spanish: "We are the first group."', answer: ['Somos el primer grupo'], explanation: 'primer agrees with grupo (masculine singular).' },
  { type: 'translate', question: 'Say in Spanish: "The item costs forty-eight pesos."', answer: ['El artículo cuesta cuarenta y ocho pesos', 'El articulo cuesta cuarenta y ocho pesos'], explanation: 'cuarenta y ocho' },
  { type: 'translate', question: 'Say in Spanish: "She has thirty-seven books."', answer: ['Ella tiene treinta y siete libros'], explanation: 'treinta y siete' },
  { type: 'translate', question: 'Say in Spanish: "Today is the first of January."', answer: ['Hoy es el primero de enero'], explanation: 'primero de enero' },
  { type: 'translate', question: 'Say in Spanish: "It is three twenty-five."', answer: ['Son las tres y veinticinco', 'Son las tres veinticinco'], explanation: 'las tres y veinticinco' },
  { type: 'translate', question: 'Say in Spanish: "One million people."', answer: ['Un millón de personas', 'Un millon de personas'], explanation: 'un millón de + noun' },
  { type: 'translate', question: 'Say in Spanish: "The table costs fifteen fifty."', answer: ['La mesa cuesta quince con cincuenta'], explanation: 'quince con cincuenta' },
  { type: 'translate', question: 'Say in Spanish: "He is twenty-two years old."', answer: ['Él tiene veintidós años', 'El tiene veintidos anos', 'Tiene veintidós años'], explanation: 'veintidós años' },
  { type: 'translate', question: 'Say in Spanish: "The first book is red."', answer: ['El primer libro es rojo'], explanation: 'primer drops the o' },
  { type: 'translate', question: 'Say in Spanish: "The third house is blue."', answer: ['La tercera casa es azul'], explanation: 'tercera agrees with casa' },
  { type: 'translate', question: 'Say in Spanish: "Cien personas llegaron."', answer: ['Cien personas llegaron'], explanation: 'cien before plural nouns' },
  { type: 'translate', question: 'Say in Spanish: "Ten minus two is eight."', answer: ['Diez menos dos son ocho', 'Diez menos dos es igual a ocho'], explanation: 'diez menos dos son ocho' },
  { type: 'translate', question: 'Say in Spanish: "The twentieth anniversary."', answer: ['El vigésimo aniversario', 'El vigesimo aniversario'], explanation: 'vigésimo' },
  { type: 'translate', question: 'Say in Spanish: "We have twenty-four hours."', answer: ['Tenemos veinticuatro horas'], explanation: 'veinticuatro' },
  { type: 'translate', question: 'Say in Spanish: "I have five hundred pesos."', answer: ['Tengo quinientos pesos'], explanation: 'quinientos pesos' }
]

const quiz = [...activities]

export const ch8 = {
  icon: '📋',
  title: 'Applied Numerical Competence Activity',
  description: 'Los Números en Español: Pattern Analysis, Translations, Error Corrections, and Dialogues',
  lesson: <Lesson8 />,
  activities,
  communicate,
  quiz
}
