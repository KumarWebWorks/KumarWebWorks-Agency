// lib/getAllBlogs.ts

import { supabase } from "./superbaseConfig";






export async function getAllBlogs() {
  // const { data, error } = await supabase.from('blogs').select('*');
  // const { data, error } = await supabase
  // .from("blogs")
  // .select("id, title, category, description, content, slug , subtopic ,created_at");

   const { data, error } = await supabase
  .from('blogs')
  .select(`
    id,
    title,
    description,
    content,
    slug,
    image_url,
    views,
    subtopic,
    category,
    

    author_name,
    author_image,
    comments,
    created_at
  `)
  // Newest first
  .limit(100); // Limit to the latest 100 blogs




  if (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }

  //  console.log('Fetched blogs:', data);
  return data;
}
