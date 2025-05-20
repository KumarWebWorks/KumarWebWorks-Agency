// // src/app/blog/frontend/[slug].jsx
// 'use client';
// import { notFound, useParams } from 'next/navigation';
// import { useState, useEffect } from 'react';
// const blogContent = {
//   'intro-to-nodejs': {
//     title: 'Intro to Node.js',
//     description: 'Understand the event-driven architecture and asynchronous nature of Node.js.',
//     content: `Node.js is a runtime built on Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Ideal for building scalable network applications, Node.js is perfect for real-time apps like chat servers and APIs.`,
//     tags: ['Node.js', 'JavaScript', 'Backend']
//   },
//   'spring-boot-rest-api': {
//     title: 'Spring Boot REST APIs',
//     description: 'Build powerful RESTful APIs using Spring Boot and Java.',
//     content: `Spring Boot simplifies the process of building production-grade Spring-based applications. Learn how to create RESTful APIs, handle HTTP requests, use annotations, and connect to databases for enterprise-level backend systems.`,
//     tags: ['Java', 'Spring Boot', 'REST API']
//   },
//   'mastering-databases': {
//     title: 'Mastering Databases',
//     description: 'Learn how to design and manage relational and NoSQL databases effectively.',
//     content: `Mastering databases involves understanding schemas, indexing, relationships, and querying using SQL for relational databases like PostgreSQL and MySQL. Also explore NoSQL systems like MongoDB for flexible, scalable data models.`,
//     tags: ['Databases', 'SQL', 'NoSQL']
//   },
//   'authentication-security': {
//     title: 'Authentication & Security',
//     description: 'Explore secure authentication methods including JWT, OAuth2, and password hashing.',
//     content: `Secure your backend with best practices in authentication and authorization. Learn how to implement JWT-based sessions, OAuth2 integrations, password hashing with bcrypt, and secure headers to protect user data.`,
//     tags: ['Security', 'Authentication', 'JWT']
//   },
//   'docker-for-devs': {
//     title: 'Docker for Devs',
//     description: 'Package and run your backend apps in isolated Docker containers.',
//     content: `Docker helps developers build, ship, and run applications in containers. Learn how to create Dockerfiles, build images, manage containers, and use Docker Compose to simplify local development environments.`,
//     tags: ['Docker', 'Containers', 'Backend']
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

//     if (!blog) return notFound();

  
      
       
          
    
//       return (
//         <PageIntro eyebrow={blog.title} title={blog.description} >
//               <p>
//                 {blog.content} 
//               </p>
//             </PageIntro>

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


import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

const blogContent = {
  'intro-to-nodejs': {
    title: 'Intro to Node.js',
    description: 'Understand the event-driven architecture and asynchronous nature of Node.js.',
    content: `Node.js is a runtime built on Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Ideal for building scalable network applications, Node.js is perfect for real-time apps like chat servers and APIs.`,
    tags: ['Node.js', 'JavaScript', 'Backend']
  },
  'spring-boot-rest-api': {
    title: 'Spring Boot REST APIs',
    description: 'Build powerful RESTful APIs using Spring Boot and Java.',
    content: `Spring Boot simplifies the process of building production-grade Spring-based applications. Learn how to create RESTful APIs, handle HTTP requests, use annotations, and connect to databases for enterprise-level backend systems.`,
    tags: ['Java', 'Spring Boot', 'REST API']
  },
  'mastering-databases': {
    title: 'Mastering Databases',
    description: 'Learn how to design and manage relational and NoSQL databases effectively.',
    content: `Mastering databases involves understanding schemas, indexing, relationships, and querying using SQL for relational databases like PostgreSQL and MySQL. Also explore NoSQL systems like MongoDB for flexible, scalable data models.`,
    tags: ['Databases', 'SQL', 'NoSQL']
  },
  'authentication-security': {
    title: 'Authentication & Security',
    description: 'Explore secure authentication methods including JWT, OAuth2, and password hashing.',
    content: `Secure your backend with best practices in authentication and authorization. Learn how to implement JWT-based sessions, OAuth2 integrations, password hashing with bcrypt, and secure headers to protect user data.`,
    tags: ['Security', 'Authentication', 'JWT']
  },
  'docker-for-devs': {
    title: 'Docker for Devs',
    description: 'Package and run your backend apps in isolated Docker containers.',
    content: `Docker helps developers build, ship, and run applications in containers. Learn how to create Dockerfiles, build images, manage containers, and use Docker Compose to simplify local development environments.`,
    tags: ['Docker', 'Containers', 'Backend']
  }
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
