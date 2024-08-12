import { createClient } from "@supabase/supabase-js";


export const supabase = createClient("https://example.supabase.co" , "Your_Supabase_key")