// lib/getAllBlogs.ts


import { createClient } from "@supabase/supabase-js";
// NEXT_PUBLIC_SUPABASE_url = https://mpubpekirhwbtmukbxfc.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY = 


const supabaseUrl = "https://mpubpekirhwbtmukbxfc.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdWJwZWtpcmh3YnRtdWtieGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MDQyMDcsImV4cCI6MjA2MzM4MDIwN30.HYGZfePbjODoc2aelKtSI1WbnYQiUDxPLQvT2Vv00pM";
if (!supabaseUrl || !supabaseAnonKey) { 
  throw new Error("Supabase URL or Anon Key is not defined");
}
const supabase = createClient(supabaseUrl, supabaseAnonKey);



export async function getAllBlogs() {
  const { data, error } = await supabase.from('blogs').select('*');


  if (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }

  
  return data;
}
