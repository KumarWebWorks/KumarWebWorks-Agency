// lib/getAllBlogs.ts


import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.supabaseUrl;

const supabaseAnonKey = process.env.supabaseAnonKey;
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
