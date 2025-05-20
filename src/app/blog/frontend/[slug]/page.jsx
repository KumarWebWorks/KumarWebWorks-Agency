// // src/app/blog/frontend/[slug].jsx
// 'use client';
// import { notFound, useParams } from 'next/navigation';
// import { useState, useEffect } from 'react';

// const blogContent = {
//   'html-basics': {
//     title: 'Learn HTML Basics for Web Development',
//     description: 'Get started with HTML basics in this beginner-friendly guide.',
//     content: `HTML forms the structure of websites. Learn about tags, elements, and document structure.`,
//     tags: ['HTML', 'Beginner', 'Frontend']
//   },
//   'css-grid-vs-flexbox': {
//     title: 'CSS Grid vs Flexbox – When to Use What?',
//     description: 'Compare CSS Grid and Flexbox to build responsive layouts.',
//     content: `Grid = 2D layout, Flexbox = 1D layout. Learn use cases for both.`,
//     tags: ['CSS', 'Layout', 'Responsive Design']
//   },
//   'js-dom': {
//     title: 'JavaScript DOM Manipulation Techniques',
//     description: 'Master JavaScript DOM techniques for interactivity.',
//     content: `Use JS to update elements, handle events, and change content on the fly.`,
//     tags: ['JavaScript', 'DOM', 'Interactivity']
//   },
//   'react-hooks-intro': {
//     title: 'Introduction to React Hooks',
//     description: 'Learn how to use useState and useEffect in React functional components.',
//     content: `Hooks simplify state and lifecycle management in React. They let you use stateful logic without writing a class.`,
//     tags: ['React', 'Hooks', 'Frontend']
//   },
//   'nodejs-express-api': {
//     title: 'Building REST APIs with Node.js and Express',
//     description: 'Create powerful backend APIs using Node.js and Express framework.',
//     content: `Learn how to structure Express routes, handle HTTP requests, and connect to databases.`,
//     tags: ['Node.js', 'Express', 'Backend']
//   }
// };

// export function generateMetadata({ params }) {
//   const blog = blogContent[params.slug];
//   if (!blog) return { title: 'Blog Not Found' };

//   return {
//     title: blog.title,
//     description: blog.description,
//     openGraph: {
//       title: blog.title,
//       description: blog.description,
//       url: `https://kumarwebworks.com/blog/frontend/${params.slug}`,
//       type: 'article',
//     },
//   };
// }

// export default function BlogPost() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const saved = localStorage.getItem('blog-dark-mode');
//     if (saved === 'true') setIsDark(true);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('blog-dark-mode', isDark);
//   }, [isDark]);

  
//   if (!blog) return notFound();
  
   
      

//   return (
//     <PageIntro eyebrow={blog.title} title={blog.description} >
//           <p>
//             {blog.content} 
//           </p>
//         </PageIntro>
//     // <div className={`transition-colors duration-300 px-6 py-10 max-w-3xl mx-auto ${isDark ? 'dark' : ''}`}>
//     //   <div className="flex justify-between items-center mb-6">
//     //     <h1 className="text-3xl font-bold">{blog.title}</h1>
//     //     <button
//     //       onClick={() => setIsDark(!isDark)}
//     //       className="text-sm px-3 py-1 border rounded dark:bg-white dark:text-black"
//     //     >
//     //       {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
//     //     </button>
//     //   </div>
//     //   <div className="prose dark:prose-invert dark:bg-gray-900 dark:text-white p-6 rounded-lg">
//     //     <p className="text-lg leading-7 whitespace-pre-line">{blog.content}</p>
//     //   </div>
//     // </div>
//   );
// }


// import BlogPostClient from '@/components/BlogPostClient';
 import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';


const blogContent = {
  'html-basics': {
    title: 'Learn HTML Basics for Web Development',
    description: 'Get started with HTML basics in this beginner-friendly guide.',
    content: `HTML forms the structure of websites. Learn about tags, elements, and document structure.`,
    tags: ['HTML', 'Beginner', 'Frontend']
  },
  'css-grid-vs-flexbox': {
    title: 'CSS Grid vs Flexbox – When to Use What?',
    description: 'Compare CSS Grid and Flexbox to build responsive layouts.',
    content: `Grid = 2D layout, Flexbox = 1D layout. Learn use cases for both.`,
    tags: ['CSS', 'Layout', 'Responsive Design']
  },
  'js-dom': {
    title: 'JavaScript DOM Manipulation Techniques',
    description: 'Master JavaScript DOM techniques for interactivity.',
    content: `Use JS to update elements, handle events, and change content on the fly.`,
    tags: ['JavaScript', 'DOM', 'Interactivity']
  },
  'react-hooks-intro': {
    title: 'Introduction to React Hooks',
    description: 'Learn how to use useState and useEffect in React functional components.',
    content: `Hooks simplify state and lifecycle management in React. They let you use stateful logic without writing a class.`,
    tags: ['React', 'Hooks', 'Frontend']
  },
  'nodejs-express-api': {
    title: 'Building REST APIs with Node.js and Express',
    description: 'Create powerful backend APIs using Node.js and Express framework.',
    content: `Learn how to structure Express routes, handle HTTP requests, and connect to databases.`,
    tags: ['Node.js', 'Express', 'Backend']
  }
};



// Dynamically load client component
 const BlogPostClient = dynamic(() => import('@/components/BlogPostClient'), { ssr: false });

// export function generateMetadata({ params }) {
//   const blog = blogContent[params.slug];
//     if (!blog) {
//     return {
//       title: 'Blog Not Found',
//       description: 'The requested blog post does not exist.',
//     };
//   }

//   return {
//     title: blog.title,
//     description: blog.description,
//     openGraph: {
//       title: blog.title,
//       description: blog.description,
//       url: `https://kumarwebworks.com/blog/frontend/${params.slug}`,
//       type: 'article',
//     },
//   };
// }

const blog = blogContent["my-blog-post"];

export const metadata = {
  title: blog?.title || "Default Blog Title",
  description: blog?.description || "Default description for the blog.",
  metadataBase: new URL("https://kumarwebworks.com/blog/frontend/my-blog-post"),
  alternates: {
    canonical: "/blog/frontend/my-blog-post",
  },
  openGraph: {
    title: blog?.title || "Default Blog Title",
    description: blog?.description || "Default description for the blog.",
    url: "https://kumarwebworks.com/blog/frontend/my-blog-post",
    siteName: "Kumar Web Works",
    type: "article",
    images: [
      {
        url: "https://kumarwebworks.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "Kumar Web Works Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: blog?.title || "Default Blog Title",
    description: blog?.description || "Default description for the blog.",
    images: ["https://kumarwebworks.com/favicon.ico"],
  },
  robots: "index, follow",
  keywords: "blog, Kumar Web Works, web development, articles",
  type: "article",
  locale: "en_US",
};


export default function BlogPostPage({ params }) {
  const blog = blogContent[params.slug];
  if (!blog) return notFound();

  return (
    <>
     <BlogPostClient blog={blog} />
    </>
      
  )
}
