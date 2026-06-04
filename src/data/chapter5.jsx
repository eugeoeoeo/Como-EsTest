import React from 'react'
import Lesson5 from './lessons/Lesson5'

const activities = [
  {
    type: 'mc',
    question: 'How do you say the number <strong>15</strong> in Spanish?',
    options: ['diez', 'once', 'catorce', 'quince'],
    answer: 3,
    explanation: '15 in Spanish is "quince".'
  },
  {
    type: 'mc',
    question: 'Which of the following is the correct spelling for <strong>24</strong>?',
    options: ['veinte y cuatro', 'veinticuatro', 'veinti y cuatro', 'veintecuatro'],
    answer: 1,
    explanation: 'Numbers 21-29 are contracted into a single word: "veinticuatro".'
  },
  {
    type: 'mc',
    question: 'How do you write <strong>35</strong> in Spanish?',
    options: ['treintaycinco', 'treinta y cinco', 'treintacinco', 'veinticinco'],
    answer: 1,
    explanation: 'Numbers from 31 onwards are written as separate words connected by "y".'
  },
  {
    type: 'mc',
    question: 'Translate <strong>"the first book"</strong> into Spanish.',
    options: ['el primero libro', 'el primer libro', 'la primera libro', 'el uno libro'],
    answer: 1,
    explanation: '"Primero" drops the "o" (apocopes) before a masculine singular noun: "el primer libro".'
  },
  {
    type: 'mc',
    question: 'Translate <strong>"the third house"</strong> into Spanish.',
    options: ['el tercer casa', 'la tercera casa', 'la tercero casa', 'el tercero casa'],
    answer: 1,
    explanation: '"Casa" is feminine, so the ordinal agrees: "la tercera casa".'
  },
  {
    type: 'translate',
    question: 'Translate the cardinal number <strong>48</strong> into Spanish words.',
    answer: ['cuarenta y ocho'],
    explanation: '48 is "cuarenta y ocho".'
  },
  {
    type: 'translate',
    question: 'Translate the cardinal number <strong>317</strong> into Spanish words.',
    answer: ['trescientos diecisiete'],
    explanation: '317 is "trescientos diecisiete".'
  },
  {
    type: 'translate',
    question: 'Translate the cardinal number <strong>1,450</strong> into Spanish words.',
    answer: ['mil cuatrocientos cincuenta'],
    explanation: '1,450 is "mil cuatrocientos cincuenta".'
  },
  {
    type: 'translate',
    question: 'Translate: <strong>"the twentieth anniversary"</strong>.',
    answer: ['el vigésimo aniversario', 'el vigesimo aniversario'],
    explanation: '20th matches masculine singular: "el vigésimo aniversario".'
  },
  {
    type: 'translate',
    question: 'Translate the mathematical expression: <strong>"10 − 2 = 8"</strong>.',
    answer: ['diez menos dos son ocho', 'diez menos dos es igual a ocho'],
    explanation: '10 − 2 = 8 is "diez menos dos son ocho".'
  },
  {
    type: 'error',
    question: 'Correct the spelling error: <br/><em>"Ciento personas llegaron temprano."</em>',
    answer: ['Cien personas llegaron temprano', 'Cien personas llegaron temprano.'],
    explanation: 'Use "cien" instead of "ciento" before any plural noun: "cien personas".'
  },
  {
    type: 'error',
    question: 'Correct the spelling error: <br/><em>"Veinte y dos estudiantes aprobaron."</em>',
    answer: ['Veintidós estudiantes aprobaron', 'Veintidos estudiantes aprobaron', 'Veintidós estudiantes aprobaron.'],
    explanation: 'Numbers 21-29 must be contracted: "veintidós" (with an accent).'
  },
  {
    type: 'error',
    question: 'Correct the error: <br/><em>"Un millón libros fueron vendidos."</em>',
    answer: ['Un millón de libros fueron vendidos', 'Un millon de libros fueron vendidos', 'Un millón de libros fueron vendidos.'],
    explanation: 'When "millón" is followed directly by a noun, add "de": "un millón de libros".'
  },
  {
    type: 'error',
    question: 'Correct the error: <br/><em>"La tercero casa es azul."</em>',
    answer: ['La tercera casa es azul', 'La tercera casa es azul.'],
    explanation: '"Casa" is feminine, so "tercero" becomes "tercera".'
  },
  {
    type: 'mc',
    question: 'Why is <strong>quinientos</strong> (500) considered irregular?',
    options: [
      'It is pronounced as a single syllable.',
      'It does not follow the standard "digit + cientos" pattern (which would be cincocientos).',
      'It is always feminine.',
      'It is never written with letters.'
    ],
    answer: 1,
    explanation: '500 is "quinientos", making it irregular compared to "doscientos", "trescientos", etc.'
  }
]

const quiz = [
  { type: 'mc', question: 'How do you say <strong>0</strong> in Spanish?', options: ['cero', 'uno', 'ciento', 'cera'], answer: 0, explanation: '0 is cero.' },
  { type: 'mc', question: 'Translate <strong>14</strong> into Spanish.', options: ['doce', 'trece', 'catorce', 'quince'], answer: 2, explanation: '14 is catorce.' },
  { type: 'mc', question: 'Translate <strong>11</strong> into Spanish.', options: ['once', 'doce', 'trece', 'catorce'], answer: 0, explanation: '11 is once.' },
  { type: 'mc', question: 'Translate <strong>50</strong> into Spanish.', options: ['quince', 'cincuenta', 'sesenta', 'veinte'], answer: 1, explanation: '50 is cincuenta.' },
  { type: 'mc', question: 'Translate <strong>70</strong> into Spanish.', options: ['sesenta', 'setenta', 'ochenta', 'noventa'], answer: 1, explanation: '70 is setenta.' },
  { type: 'mc', question: 'What is <strong>100 books</strong> in Spanish?', options: ['ciento libros', 'cien libros', 'un ciento libros', 'cien de libros'], answer: 1, explanation: 'Use "cien" when describing exactly 100 of a noun.' },
  { type: 'mc', question: 'What is <strong>102</strong> in Spanish?', options: ['cien y dos', 'ciento dos', 'cien dos', 'ciento y dos'], answer: 1, explanation: '102 is ciento dos. Do not use "y" after ciento.' },
  { type: 'mc', question: 'Translate <strong>500</strong> into Spanish.', options: ['cincocientos', 'quinientos', 'quinientas', 'seiscientos'], answer: 1, explanation: '500 is quinientos.' },
  { type: 'mc', question: 'Translate <strong>700</strong> into Spanish.', options: ['sietecientos', 'setecientos', 'setecientas', 'doscientos'], answer: 1, explanation: '700 is setecientos.' },
  { type: 'mc', question: 'Translate <strong>900</strong> into Spanish.', options: ['nuevecientos', 'novecientos', 'quinientos', 'ochocientos'], answer: 1, explanation: '900 is novecientos.' },
  { type: 'mc', question: 'How do you say <strong>1,000</strong> in Spanish?', options: ['un mil', 'mil', 'ciento mil', 'un millardo'], answer: 1, explanation: '1,000 is simply "mil".' },
  { type: 'mc', question: 'How do you say <strong>1,000,000 books</strong> in Spanish?', options: ['mil libros', 'un millón libros', 'un millón de libros', 'un millardo de libros'], answer: 2, explanation: 'Use "un millón de + noun" for one million.' },
  { type: 'mc', question: 'Translate: <strong>"the first day"</strong>.', options: ['el primero día', 'el primer día', 'la primera día', 'el primero de día'], answer: 1, explanation: 'Primero drops the "o" before a singular masculine noun.' },
  { type: 'mc', question: 'Translate: <strong>"the third son"</strong>.', options: ['el tercero hijo', 'el tercer hijo', 'la tercera hijo', 'el tres hijo'], answer: 1, explanation: 'Tercero drops the "o" before a singular masculine noun.' },
  { type: 'mc', question: 'What is <strong>3:25</strong> in Spanish?', options: ['las tres veinticinco', 'la una y veinticinco', 'tres y cincuenta', 'las tres con veinticinco'], answer: 0, explanation: '3:25 is "las tres veinticinco".' }
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
