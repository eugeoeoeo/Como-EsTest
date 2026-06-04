# Como esTest:( 🇪🇸 — Spanish 101 Reviewer

A premium, interactive learning dashboard and course reviewer for **Spanish 101**, designed with custom light/dark modes, browser speech pronunciation support, and complete progress persistence powered by **Supabase**.

---

## ✨ Features

- **🎓 Comprehensive Curriculum**: 7 full chapters of content covering Kasaysayan (History), Alpabeto, Grammar, Conversations, Numbers, Colors, and Body Parts.
- **🔊 Audio Pronunciation**: Built-in interactive Web Speech API text-to-speech engine to listen to native Spanish pronunciations instantly.
- **🎯 650+ Questions Database**: Practice with interactive Activity Sheets and Chapter Quizzes containing Multiple Choice, True/False, Fill in the Blank, Translation, and Error Correction exercises.
- **🔒 Supabase Auth & Progress Syncing**: Secure signup/signin using Supabase. Real-time background progress synchronization with a zero-latency local caching strategy.
- **🔄 Guest Mode with Account Merging**: Start practicing as a guest immediately. When you register later, your local progress and history automatically sync up to your database profile!
- **🔑 App-Integrated OTP Recovery**: Forgot password? Reset it 100% inside the app by verifying a 6-digit OTP verification code sent directly to your email.
- **📱 Touch & Mobile Optimized**: Fully responsive layouts featuring mobile navigation overlays, swipeable horizontal tables for grammar matrices, larger touch targets, and keyboard scroll focus.

---

## 🛠️ Tech Stack

- **Core**: React 19 + Vite (Rolldown compiler)
- **Database / Auth**: Supabase JS Client + Postgres DB
- **Styles**: Custom CSS3 Variable Tokens (Glassmorphism, custom light/dark color mappings)
- **Routing**: React Router DOM

---

## 🚀 Quick Start

### 1. Clone & Install Dependencies
```bash
git clone <your-repo-url>
cd Spanish101
npm install
```

### 2. Set Up Environment Variables
Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

### 3. Setup Database Schema
Execute the SQL script located in `supabase/schema.sql` inside your Supabase Dashboard **SQL Editor**. This will automatically provision:
- The `profiles`, `chapter_progress`, `exam_results`, and `score_history` tables.
- RLS security policies.
- Triggers to automatically link new auth users to progress tracking profiles.

### 4. Setup Reset Password Email Template
In the Supabase Console, navigate to **Authentication > Email Templates > Reset Password** and paste the HTML content from `supabase/reset_password_template.html` to enable the 6-digit verification code.

### 5. Run Local Development Server
```bash
npm run dev
```

---

## 📦 Project Structure

```text
├── src/
│   ├── components/       # Layout, QuizEngine, Toast
│   ├── context/          # AuthState & Notifications Context
│   ├── data/             # Lesson content, activities, quizzes, exams
│   ├── pages/            # Dashboard, ChapterView, AuthScreen, ExamView
│   ├── utils/            # Supabase client connection & local-first progress sync
│   ├── App.jsx           # App shell & router guard
│   └── index.css         # Styling system & theme declarations
├── supabase/
│   ├── schema.sql        # Database schema script
│   └── reset_password_template.html # Email template markup
└── .env                  # Environment keys config (ignored by git)
```
