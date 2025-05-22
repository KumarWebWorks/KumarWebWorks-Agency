// // app/admin/create/page.jsx
// 'use client'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import { supabase } from '../../../lib/superbaseClient'

// export default function CreateBlog() {
//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')
//   const router = useRouter()

//   async function handleSubmit(e) {
//     e.preventDefault()
//     await supabase.from('blogs').insert([{ title, content }])
//     router.push('/admin')
//   }

//   return (
//     <form onSubmit={handleSubmit} className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">Create Blog</h1>
//       <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full border p-2" />
//       <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" className="w-full border p-2 h-40" />
//       <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Create</button>
//     </form>
//   )
// }

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}

