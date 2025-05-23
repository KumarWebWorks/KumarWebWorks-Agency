import { supabase } from '@/lib/superbaseConfig';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return Response.json({ error: 'Missing slug parameter' }, { status: 400 });
  }

  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug);

  if (error || !blogs || blogs.length === 0) {
    return Response.json({ error: error?.message || 'Blog not found' }, { status: 404 });
  }

  return Response.json({ data: blogs[0] }, { status: 200 });
}
