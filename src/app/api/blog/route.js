// src/app/api/blog/route.js
import { supabase } from "@/lib/superbaseConfig";

export async function GET() {
  try {
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
        created_at,
        views
      `)
      .limit(100);

    if (error) {
      console.error('Error fetching data:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ data }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Something went wrong' }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
