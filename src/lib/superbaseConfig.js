import { createClient } from "@supabase/supabase-js";
// NEXT_PUBLIC_SUPABASE_url = 
// NEXT_PUBLIC_SUPABASE_ANON_KEY = 



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;


   

if (!supabaseUrl || !supabaseAnonKey) { 
  throw new Error("Supabase URL or Anon Key is not defined");
}
export  const supabase = createClient(supabaseUrl, supabaseAnonKey);