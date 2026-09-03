/*
# Create reading_sync table for cross-device cloud sync

1. New Tables
- `reading_sync`
  - `id` (uuid, primary key, defaults to gen_random_uuid())
  - `user_id` (uuid, not null, defaults to auth.uid(), references auth.users with cascade delete)
  - `current_index` (integer, not null, default 0) — active timeline position
  - `completed_indices` (integer array, not null, default '{}') — completed chapter indices
  - `last_read_timestamp` (bigint, not null, default 0) — epoch ms of last reading activity
  - `current_streak` (integer, not null, default 0) — consecutive days streak
  - `longest_streak` (integer, not null, default 0) — best streak ever
  - `last_read_date` (text, not null, default '') — ISO date string of last read
  - `history` (text array, not null, default '{}') — dates of reading sessions
  - `candlelight_mode` (boolean, not null, default false) — dark mode preference
  - `font_size` (integer, not null, default 18) — scripture font size
  - `language_mode` (text, not null, default 'english') — translation mode: english|malayalam|parallel
  - `updated_at` (timestamptz, defaults to now()) — last sync timestamp

2. Security
- Enable RLS on `reading_sync`.
- Owner-scoped CRUD: each authenticated user can only access their own single row.
- Four separate policies for SELECT, INSERT, UPDATE, DELETE.
- `user_id` defaults to `auth.uid()` so inserts without explicit user_id succeed.
*/

CREATE TABLE IF NOT EXISTS reading_sync (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  current_index integer NOT NULL DEFAULT 0,
  completed_indices integer[] NOT NULL DEFAULT '{}',
  last_read_timestamp bigint NOT NULL DEFAULT 0,
  current_streak integer NOT NULL DEFAULT 0,
  longest_streak integer NOT NULL DEFAULT 0,
  last_read_date text NOT NULL DEFAULT '',
  history text[] NOT NULL DEFAULT '{}',
  candlelight_mode boolean NOT NULL DEFAULT false,
  font_size integer NOT NULL DEFAULT 18,
  language_mode text NOT NULL DEFAULT 'english',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE reading_sync ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_reading_sync" ON reading_sync;
CREATE POLICY "select_own_reading_sync" ON reading_sync FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_reading_sync" ON reading_sync;
CREATE POLICY "insert_own_reading_sync" ON reading_sync FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_reading_sync" ON reading_sync;
CREATE POLICY "update_own_reading_sync" ON reading_sync FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_reading_sync" ON reading_sync;
CREATE POLICY "delete_own_reading_sync" ON reading_sync FOR DELETE
  TO authenticated USING (auth.uid() = user_id);
