// app.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// 🔧 Cole aqui os dados do seu projeto Supabase:
const SUPABASE_URL = 'https://SEU-PROJETO.supabase.co'
const SUPABASE_ANON_KEY = 'SUA-CHAVE-ANON'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
