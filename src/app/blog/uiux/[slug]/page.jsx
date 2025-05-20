// // src/app/blog/frontend/[slug].jsx
// 'use client';
// import { useParams } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { notFound } from "next/navigation";
// import PageIntro from '@/components/PageIntro';

// const blogContent = {
//   'ui-design-principles': {
//     title: 'UI Design Principles',
//     description: 'Learn fundamental principles for designing intuitive user interfaces.',
//     content: `User interface (UI) design principles help you create visually pleasing and easy-to-use applications. Key principles include consistency, feedback, clarity, and user control. Mastering these ensures a smooth and intuitive user experience.`,
//     tags: ['UI Design', 'UX', 'Design Principles']
//   },
//   'wireframing-prototyping': {
//     title: 'Wireframing & Prototyping',
//     description: 'Explore techniques to create effective wireframes and prototypes.',
//     content: `Wireframing is the process of laying out content and functionality on a page. Prototyping adds interaction and logic to visualize the final product. Together, they help test usability and iterate design ideas early.`,
//     tags: ['Wireframe', 'Prototype', 'UX Tools']
//   },
//   'user-research-basics': {
//     title: 'User Research Basics',
//     description: 'Understand how to conduct user research to improve design decisions.',
//     content: `User research uncovers what users need and how they behave. It involves interviews, surveys, observations, and usability testing. The insights gained guide the design process and lead to better user experiences.`,
//     tags: ['User Research', 'UX', 'Usability']
//   },
//   'accessibility-design': {
//     title: 'Accessibility in Design',
//     description: 'Make your designs inclusive by following accessibility best practices.',
//     content: `Designing with accessibility in mind ensures that all users, including those with disabilities, can use your product. Use semantic HTML, proper color contrast, keyboard navigation, and ARIA roles.`,
//     tags: ['Accessibility', 'Inclusive Design', 'WCAG']
//   },
//   'design-systems': {
//     title: 'Design Systems Explained',
//     description: 'Learn how to build and maintain scalable design systems.',
//     content: `A design system is a collection of reusable components, guided by clear standards. It helps teams build consistent, efficient, and scalable user interfaces across projects and platforms.`,
//     tags: ['Design Systems', 'Component Libraries', 'UI Consistency']
//   }
// };

//  import { notFound } from "next/navigation";

// export function generateMetadata({ params  }) {
//   const blog = blogContent[params.slug];
//   if (!blog) return notFound();

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
//     <>
//     <PageIntro eyebrow={blog.title} title={blog.description} >
//         <p>
//           {blog.content} 
//         </p>
//       </PageIntro>
//     </>
//     // <div className={`transition-colors duration-300 px-6 py-10 max-w-3xl mx-auto ${isDark ? 'dark' : ''}`}>
//     //   <div className="flex justify-between items-center mb-6">
//     //     <h1 className="text-3xl font-bold">{blog.title}</h1>
//     //     <h4 className="text-3xl font-bold">{blog.description}</h4>
//     //     <button
//     //       onClick={() => setIsDark(!isDark)}
//     //       className="text-sm px-3 py-1 border rounded dark:bg-white dark:text-black"
//     //     >
//     //       {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
//     //     </button>
//     //   </div>
//     //   <div className="prose dark:prose-invert dark:bg-gray-900 dark:text-white p-6 rounded-lg">
//     //     <p className="text-lg leading-7 whitespace-pre-line">{blog.description}</p>
//     //   </div>
//     // </div>
//   );
// }

// src/app/blog/frontend/[slug]/page.jsx

import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

const blogContent = {
  'ui-design-principles': {
    title: 'UI Design Principles',
    description: 'Learn fundamental principles for designing intuitive user interfaces.',
    content: `User interface (UI) design principles help you create visually pleasing and easy-to-use applications. Key principles include consistency, feedback, clarity, and user control. Mastering these ensures a smooth and intuitive user experience.`,
    tags: ['UI Design', 'UX', 'Design Principles'],
  },
  'wireframing-prototyping': {
    title: 'Wireframing & Prototyping',
    description: 'Explore techniques to create effective wireframes and prototypes.',
    content: `Wireframing is the process of laying out content and functionality on a page. Prototyping adds interaction and logic to visualize the final product. Together, they help test usability and iterate design ideas early.`,
    tags: ['Wireframe', 'Prototype', 'UX Tools'],
  },
  'user-research-basics': {
    title: 'User Research Basics',
    description: 'Understand how to conduct user research to improve design decisions.',
    content: `User research uncovers what users need and how they behave. It involves interviews, surveys, observations, and usability testing. The insights gained guide the design process and lead to better user experiences.`,
    tags: ['User Research', 'UX', 'Usability'],
  },
  'accessibility-design': {
    title: 'Accessibility in Design',
    description: 'Make your designs inclusive by following accessibility best practices.',
    content: `Designing with accessibility in mind ensures that all users, including those with disabilities, can use your product. Use semantic HTML, proper color contrast, keyboard navigation, and ARIA roles.`,
    tags: ['Accessibility', 'Inclusive Design', 'WCAG'],
  },
  'design-systems': {
    title: 'Design Systems Explained',
    description: 'Learn how to build and maintain scalable design systems.',
    content: `A design system is a collection of reusable components, guided by clear standards. It helps teams build consistent, efficient, and scalable user interfaces across projects and platforms.`,
    tags: ['Design Systems', 'Component Libraries', 'UI Consistency'],
  },
};

// Dynamically load client component
 const BlogPostClient = dynamic(() => import('@/components/BlogPostClient'), { ssr: false });

export function generateMetadata({ params }) {
  const blog = blogContent[params.slug];
  if (!blog) return <h1>blog not foud</h1>;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://kumarwebworks.com/blog/frontend/${params.slug}`,
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }) {
  const blog = blogContent[params.slug];
  if (!blog) return notFound();

  return (
       <BlogPostClient blog={blog} />
  )
}
