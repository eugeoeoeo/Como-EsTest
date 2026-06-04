-- Create profiles table linked to Supabase auth users
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Allow public read access to profiles" 
  ON public.profiles FOR SELECT 
  USING (true);

CREATE POLICY "Allow users to update their own profile" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Allow system/insert on profile creation"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);


-- Create chapter_progress table
CREATE TABLE IF NOT EXISTS public.chapter_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  chapter_id TEXT NOT NULL,
  lesson_completed BOOLEAN DEFAULT FALSE,
  activity_score INTEGER DEFAULT 0,
  activity_total INTEGER DEFAULT 0,
  communicate_score INTEGER DEFAULT 0,
  communicate_total INTEGER DEFAULT 0,
  quiz_score INTEGER DEFAULT 0,
  quiz_total INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, chapter_id)
);

-- Enable RLS on chapter_progress
ALTER TABLE public.chapter_progress ENABLE ROW LEVEL SECURITY;

-- Chapter Progress Policies
CREATE POLICY "Allow users to read their own progress" 
  ON public.chapter_progress FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Allow users to insert their own progress" 
  ON public.chapter_progress FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow users to update their own progress" 
  ON public.chapter_progress FOR UPDATE 
  USING (auth.uid() = user_id);


-- Create exam_results table
CREATE TABLE IF NOT EXISTS public.exam_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on exam_results
ALTER TABLE public.exam_results ENABLE ROW LEVEL SECURITY;

-- Exam Results Policies
CREATE POLICY "Allow users to read their own exam results" 
  ON public.exam_results FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Allow users to insert their own exam results" 
  ON public.exam_results FOR INSERT 
  WITH CHECK (auth.uid() = user_id);


-- Create score_history table for tracking all attempts
CREATE TABLE IF NOT EXISTS public.score_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  assessment_type TEXT NOT NULL, -- 'activity', 'quiz', 'exam'
  chapter_id TEXT,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on score_history
ALTER TABLE public.score_history ENABLE ROW LEVEL SECURITY;

-- Score History Policies
CREATE POLICY "Allow users to read their own attempts history" 
  ON public.score_history FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Allow users to insert their own attempts" 
  ON public.score_history FOR INSERT 
  WITH CHECK (auth.uid() = user_id);


-- Trigger function to automatically create a profile row when a user signs up via Supabase auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'display_name', new.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger execution
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
