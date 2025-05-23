// export async function fetchBlogBySlug(slug) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/getBlogBySlug?slug=${slug}`
//   );

//   if (!res.ok) {
//     console.error('Failed to fetch blog by slug');
//   }

//   const json = await res.json();
//   return json.data;
// }
