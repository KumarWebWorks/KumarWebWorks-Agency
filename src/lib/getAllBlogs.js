// lib/getAllBlogs.ts


import { createClient } from "@supabase/supabase-js";
// NEXT_PUBLIC_SUPABASE_url = https://mpubpekirhwbtmukbxfc.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY = 


const supabaseUrl =process.env.NEXT_PUBLIC_SUPABASE_url;

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// if (!supabaseUrl || !supabaseAnonKey) { 
//   throw new Error("Supabase URL or Anon Key is not defined");
// }
const supabase = createClient(supabaseUrl, supabaseAnonKey);



export async function getAllBlogs() {
  const { data, error } = await supabase.from('blogs').select('*');


  if (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }

  
  return data;
}
