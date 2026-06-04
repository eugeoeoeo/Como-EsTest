import React from 'react'

export default function Lesson8() {
  return (
    <div className="lesson-card fade-up">
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: '2.5rem' }}>📝</span>
        <h2 style={{ marginTop: 10 }}>Applied Language &amp; Numerical Competence</h2>
        <p className="text-muted" style={{ fontStyle: 'italic' }}>
          "Los Números en Español: Applied Language and Numerical Competence"
        </p>
      </div>
      
      <div className="alert-box note" style={{ margin: '20px 0', padding: 16, borderRadius: 8, background: 'var(--primary-glow)', borderLeft: '4px solid var(--primary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
        <strong>📢 Assignment Directions:</strong><br />
        Write your answer on a yellow pad, and we will check your activity during the next face-to-face class. Use this interactive chapter to review, practice, and verify your answers before writing them down!
      </div>
      
      <h3>Activity Structure</h3>
      <p>This comprehensive activity is divided into 7 key areas of numerical competence:</p>
      
      <table className="lesson-table" style={{ width: '100%', marginTop: 12 }}>
        <thead>
          <tr>
            <th>Part</th>
            <th>Competence Focus</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Part I</strong></td>
            <td>Pattern Analysis &amp; Rules</td>
            <td>Q1 – Q5</td>
          </tr>
          <tr>
            <td><strong>Part II</strong></td>
            <td>Cardinal &amp; Ordinal Translation</td>
            <td>Q6 – Q15</td>
          </tr>
          <tr>
            <td><strong>Part III</strong></td>
            <td>Error Analysis &amp; Correction</td>
            <td>Q16 – Q20</td>
          </tr>
          <tr>
            <td><strong>Part IV</strong></td>
            <td>Contextual Application (Price, Date, Time, Age)</td>
            <td>Q21 – Q25</td>
          </tr>
          <tr>
            <td><strong>Part V</strong></td>
            <td>Comparative Language Analysis (Long vs Short Scale)</td>
            <td>Q26 – Q30</td>
          </tr>
          <tr>
            <td><strong>Part VI</strong></td>
            <td>Advanced Numerical Construction</td>
            <td>Q31 – Q35</td>
          </tr>
          <tr>
            <td><strong>Part VII</strong></td>
            <td>Critical Thinking &amp; Dialogues</td>
            <td>Q36 – Q40</td>
          </tr>
        </tbody>
      </table>
      
      <div style={{ marginTop: 24, padding: 16, background: 'var(--bg-card-alt)', borderRadius: 8 }}>
        <h4 style={{ margin: '0 0 8px 0' }}>💡 Interactive Companion Tool:</h4>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-sec)' }}>
          You can click the <strong>🔊 Listen</strong> button to hear native pronunciations. Use the <strong>🎙️ Speak</strong> button on text questions to practice speaking the answers out loud; your voice will be transcribed and automatically checked for accuracy!
        </p>
      </div>
    </div>
  )
}
