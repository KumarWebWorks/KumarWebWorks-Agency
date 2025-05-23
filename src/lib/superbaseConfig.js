import { createClient } from "@supabase/supabase-js";
// NEXT_PUBLIC_SUPABASE_url = https://mpubpekirhwbtmukbxfc.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY = 


const supabaseUrl =process.env.SUPABASE_url;



 const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;


if (!supabaseUrl || !supabaseAnonKey) { 
  throw new Error("Supabase URL or Anon Key is not defined");
}
export  const supabase = createClient(supabaseUrl, supabaseAnonKey);