import { supabase } from "./superbaseConfig";






export async function increaseBlogView(blogId) {
  try {
    const { data: blog, error: fetchError } = await supabase
      .from('blogs')
      .select('views')
      .eq('id', blogId)
      .single();

    if (fetchError) {
      console.error('Fetch error:', fetchError);
      return;
    }

    const newViews = (blog?.views || 0) + 1;

    const { error: updateError } = await supabase
      .from('blogs')
      .update({ views: newViews })
      .eq('id', blogId);

      console.log('Updated views:', newViews);

    if (updateError) {
      console.error('Update error:', updateError);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}