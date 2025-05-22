// "use client";
// import { useEffect, useState } from 'react';
// import { supabase } from '@/lib/superbaseClient';

// export default function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   const [category, setCategory] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   // const [mode, setMode] = useState<'create' | 'update'>('create');
//   const [mode, setMode] = useState('create');

//   const [updatingBlogId, setUpdatingBlogId] = useState(null);

//   const [form, setForm] = useState({
//     title: '',
//     slug: '',
//     description: '',
//     content: '',
//     category: '',
//   });

//   useEffect(() => {
//     fetchBlogs();
//   }, [category]);

//   async function fetchBlogs() {
//     let query = supabase.from('blogs').select('*').order('created_at', { ascending: false });
//     if (category) query = query.eq('category', category);
//     const { data, error } = await query;
//     if (error) console.error('Error fetching blogs:', error);
//     else setBlogs(data);
//   }

//   async function deleteBlog(id) {
//     const { error } = await supabase.from('blogs').delete().eq('id', id);
//     if (error) console.error('Error deleting blog:', error);
//     else fetchBlogs();
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (mode === 'update') {
//       // Delete old blog
//       await supabase.from('blogs').delete().eq('id', updatingBlogId);
//     }

//     // Insert new blog
//     const { error } = await supabase.from('blogs').insert([form]);
//     if (error) console.error('Error submitting blog:', error);
//     else {
//       resetForm();
//       fetchBlogs();
//     }
//   }

//   function handleUpdate(blog) {
//     setForm({
//       title: blog.title,
//       slug: blog.slug,
//       description: blog.description,
//       content: blog.content,
//       category: blog.category,
//     });
//     setUpdatingBlogId(blog.id);
//     setMode('update');
//     setShowForm(true);
//   }

//   function resetForm() {
//     setForm({ title: '', slug: '', description: '', content: '', category: '' });
//     setMode('create');
//     setUpdatingBlogId(null);
//     setShowForm(false);
//   }

//   return (
//     <div className="p-6">
//       {/* Category Buttons */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {['Frontend', 'Backend', 'UI/UX', 'DevOps'].map(cat => (
//           <button
//             key={cat}
//             className={`px-3 py-1 border rounded ${category === cat ? 'bg-blue-500 text-white' : ''}`}
//             onClick={() => setCategory(cat === category ? null : cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Create / Update Toggle Button */}
//       <div className="mb-6">
//         <button
//           className="px-4 py-2 bg-green-600 text-white rounded"
//           onClick={() => {
//             if (showForm && mode === 'create') resetForm();
//             else {
//               setMode('create');
//               setForm({ title: '', slug: '', description: '', content: '', category: '' });
//               setShowForm(true);
//             }
//           }}
//         >
//           {showForm ? 'Close Form' : 'Create New Blog'}
//         </button>
//       </div>

//       {/* Form */}
//       {showForm && (
//         <form onSubmit={handleSubmit} className="space-y-3 mb-6 border p-4 bg-gray-50 rounded">
//           <h3 className="text-lg font-semibold">{mode === 'create' ? 'Create Blog' : 'Update Blog'}</h3>
//           <input
//             type="text"
//             placeholder="Title"
//             value={form.title}
//             onChange={e => setForm({ ...form, title: e.target.value })}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Slug"
//             value={form.slug}
//             onChange={e => setForm({ ...form, slug: e.target.value })}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Description"
//             value={form.description}
//             onChange={e => setForm({ ...form, description: e.target.value })}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <textarea
//             placeholder="Content"
//             value={form.content}
//             onChange={e => setForm({ ...form, content: e.target.value })}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <select
//             value={form.category}
//             onChange={e => setForm({ ...form, category: e.target.value })}
//             className="w-full p-2 border rounded"
//             required
//           >
//             <option value="">Select Category</option>
//             <option value="Frontend">Frontend</option>
//             <option value="Backend">Backend</option>
//             <option value="UI/UX">UI/UX</option>
//             <option value="DevOps">DevOps</option>
//           </select>
//           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//             {mode === 'create' ? 'Submit Blog' : 'Update Blog'}
//           </button>
//         </form>
//       )}

//       {/* Blog List */}
//       <div>
//         {blogs.length === 0 ? (
//           <p>No blogs found</p>
//         ) : (
//           blogs.map(blog => (
//             <div key={blog.id} className="p-4 border mb-4 rounded">
//               <h2 className="text-xl font-semibold">{blog.title}</h2>
//               <p className="text-sm text-gray-600 mb-1">Category: {blog.category}</p>
//               <p className="mb-2">{blog.content}</p>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => deleteBlog(blog.id)}
//                   className="px-2 py-1 bg-red-500 text-white rounded"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => handleUpdate(blog)}
//                   className="px-2 py-1 bg-yellow-400 text-black rounded"
//                 >
//                   Update
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
