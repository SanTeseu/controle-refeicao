// app.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// 🔧 Cole aqui os dados do seu projeto Supabase:
const SUPABASE_URL = 'https://owsjuburmtniilafuwip.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93c2p1YnVybXRuaWlsYWZ1d2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4NTA2NjMsImV4cCI6MjA3NzQyNjY2M30.F5syr9rtzoq2p_uVxfrFBa80RXcvjM4SxrxHuW-lgO8'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
