import { createClient } from "@supabase/supabase-js";
// NEXT_PUBLIC_SUPABASE_url = https://mpubpekirhwbtmukbxfc.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY = 


// const supabaseUrl =process.env.SUPABASE_url;
const supabaseUrl ="https://mpubpekirhwbtmukbxfc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdWJwZWtpcmh3YnRtdWtieGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MDQyMDcsImV4cCI6MjA2MzM4MDIwN30.HYGZfePbjODoc2aelKtSI1WbnYQiUDxPLQvT2Vv00pM";




//  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;


if (!supabaseUrl || !supabaseAnonKey) { 
  throw new Error("Supabase URL or Anon Key is not defined");
}
export  const supabase = createClient(supabaseUrl, supabaseAnonKey);