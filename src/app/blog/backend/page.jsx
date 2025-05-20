// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import SectionIntro from '@/components/SectionIntro';

// import Container from '@/components/Container'; 
// import { clsx } from 'clsx';
// import FadeIn from '@/components/FadeIn';
// import { GlowingEffectGrid } from '@/components/GlowingEffectGrid';
// import { Code, Server, Settings, PenTool, TerminalSquare } from 'lucide-react';

// const blogItems = [
//   {
   
//     area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
//     icon: <Code className="h-4 w-4 text-black dark:text-neutral-400" />,
//     title: "Learn HTML Basics for Web Development",
//     description: "Get started with HTML basics in this beginner-friendly guide.",
//     imageSrc: "/frontend-main.jpg",
//     href: "/html-basics",
//   },
//   {

    
//     area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
//     icon: <Server className="h-4 w-4 text-black dark:text-neutral-400" />,
//     title: "CSS Grid vs Flexbox – When to Use What?",
//     description: "Compare CSS Grid and Flexbox to build responsive layouts efficiently.",
//     imageSrc: "/backend-main.jpg",
//     href: "/css-grid-vs-flexbox",
//   },
//   {

 
//     area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
//     icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
//     title: "JavaScript DOM Manipulation Techniques",
//     description: "Master JavaScript techniques to manipulate the DOM easily.",
//     imageSrc: "/devops-main.jpg",
//     href: "/js-dom",
//   },
//   {

 
//     area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
//     icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
//     title: "JavaScript DOM Manipulation Techniques",
//     description: "Master JavaScript techniques to manipulate the DOM easily.",
//     imageSrc: "/devops-main.jpg",
//     href: "/js-dom2",
//   },
//    {

 
//     area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
//     icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
//     title: "JavaScript DOM Manipulation Techniques",
//     description: "Master JavaScript techniques to manipulate the DOM easily.",
//     imageSrc: "/devops-main.jpg",
//     href: "/js-dom3",
//   },
// ];







// export default function FrontendBlog() {

//   const [search, setSearch] = useState('');

//   const filtered = blogItems.filter((blog) =>
//     blog.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
    
//    <SectionIntro
//   eyebrow="Frontend Blog"
//   title="Master Frontend Development"
//   className="mt-24 sm:mt-32 lg:mt-40"
// >
//   <p>
//     Explore practical tutorials, tips, and insights on HTML, CSS, JavaScript, and modern frontend tools. Whether you're a beginner or a pro, there's something here for every developer.
//   </p>
// </SectionIntro>
//  <Container
//        className={clsx("mt-24 sm:mt-32 lg:mt-40",  "text-left")}
//       >
//         <FadeIn>


//        <div >
//   {/* <GlowingEffectDemoSecond "/> */}
//    <GlowingEffectGrid className="dark" items={blogItems}  />
// </div>

       
           
//         </FadeIn>
//       </Container>
// </>

//     // <div className="max-w-4xl mx-auto px-4 py-10">
//     //   <h1 className="text-4xl font-bold mb-6 text-center">Frontend Blog</h1>

//     //   <input
//     //     type="text"
//     //     placeholder="Search blogs..."
//     //     value={search}
//     //     onChange={(e) => setSearch(e.target.value)}
//     //     className="w-full mb-6 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//     //   />

//     //   {filtered.length === 0 && (
//     //     <p className="text-gray-500 text-center">No matching blogs found.</p>
//     //   )}

//     //   <ul className="space-y-6">
//     //     {filtered.map((blog) => (
//     //       <li key={blog.slug} className="p-4 border rounded-lg shadow hover:shadow-md transition">
//     //         <Link href={`/${blog.slug}`}>
//     //           <div className="cursor-pointer">
//     //             <h2 className="text-xl font-semibold">{blog.title}</h2>
//     //             <p className="text-gray-600">{blog.description}</p>
//     //           </div>
//     //         </Link>
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
//   );
// }


// "use client";

// import Container from "@/components/Container";
// import FadeIn from "@/components/FadeIn";
// import Meta from "@/components/Meta";
// import PageIntro from "@/components/PageIntro";
// import React from "react";
// import clsx from "clsx";
// import GlowingEffectGrid from "@/components/GlowingEffectGrid";

// // import { Code, Server, Settings, PenTool, TerminalSquare } from 'lucide-react';
// import SectionIntro from "@/components/SectionIntro";


// import {
//   Code,
//   LayoutTemplate,
//   Braces,
//   Atom,
//   RefreshCcw,
//   Server,
// } from 'lucide-react';

// const gridItems = [
//   {
//      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
//     icon: <Code className="h-4 w-4 text-black dark:text-neutral-400" />,
//     title: "HTML Basics",
//     description: "Get started with HTML basics in this beginner-friendly guide.",
//     imageSrc: "/uiux-main.jpg",
//     href: "/blog/frontend/html-basics",
//   },
//   {
//     area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
//     icon: <LayoutTemplate className="h-4 w-4 text-black dark:text-neutral-400" />,
//     title: "CSS Grid vs Flexbox",
//     description: "Compare CSS Grid and Flexbox to build responsive layouts.",
//     imageSrc: "/uiux-main.jpg",
//     href: "/blog/frontend/css-grid-vs-flexbox",
//   },

//   {
//    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
//     icon: <Atom className="h-4 w-4 text-black dark:text-neutral-400" />,
//     title: "React Hooks Intro",
//     description: "Learn how to use useState and useEffect in React functional components.",
//     imageSrc: "/uiux-main.jpg",
//     href: "/blog/frontend/react-hooks-intro",
//   },
//   {
//     area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
//     icon: <Server className="h-4 w-4 text-black dark:text-neutral-400" />,
//     title: "Node.js Express API",
//     description: "Create powerful backend APIs using Node.js and Express framework.",
//     imageSrc: "/uiux-main.jpg",
//     href: "/blog/frontend/nodejs-express-api",
//   },

//    {
//     area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
//     icon: <LayoutTemplate className="h-4 w-4 text-black dark:text-neutral-400" />,
//     title: "CSS Grid vs Flexbox",
//     description: "Compare CSS Grid and Flexbox to build responsive layouts.",
//     imageSrc: "/uiux-main.jpg",
//     href: "/blog/frontend/css-grid-vs-flexbox",
//   },
// ];





// export const metadata = {
//   title: "Our Blog – Tech Insights from Kumar Web Works",
//   description: "Explore web dev tutorials, case studies, and expert tips from the Kumar Web Works team.",
//   metadataBase: new URL("https://www.kumarwebworks.com/blog/frontend"),      
//   alternates: {
//     canonical: "/blog/frontend",
//   }, 
//   openGraph: {
//     title: "Our Blog – Tech Insights from Kumar Web Works",
//     description: "Explore web dev tutorials, case studies, and expert tips from the Kumar Web Works team.",
//     url: "https://www.kumarwebworks.com/blog/frontend",
//     siteName: "Kumar Web Works",
//     images: [
//       {
//         url: "https://www.kumarwebworks.com/agency.PNG",
//         width: 800,
//         height: 600,
//         alt: "Kumar Web Works Logo",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Our Blog – Tech Insights from Kumar Web Works",
//     description: "Explore web dev tutorials, case studies, and expert tips from the Kumar Web Works team.",
//     images: ["https://www.kumarwebworks.com/agency.PNG"],
//   },
//   robots: "index, follow",
//   keywords: "web dev blog, fullstack tips, react tutorials, spring boot insights",
//   type: "website",
//   locale: "en_US", 
         
//        };


// const FrontendBlogPage = () => {
  


//   return (
//     <> 
      
// <Meta
//         {...metadata}
//       />
       
//       {/* <PageIntro eyebrow="Blog" title="The latest articles and news">
//         <p>
//           Stay up-to-date with the latest industry news as our marketing teams
//           finds new ways to re-purpose old CSS tricks articles.
//         </p>
//       </PageIntro> */}
//        <SectionIntro
//   eyebrow="Frontend Blog"
//   title="Master Frontend Development"
//   className="mt-24 sm:mt-32 lg:mt-40"
// >
//   <p>
//     Explore practical tutorials, tips, and insights on HTML, CSS, JavaScript, and modern frontend tools. Whether you're a beginner or a pro, there's something here for every developer.
//   </p>
// </SectionIntro>

//       <Container
//        className={clsx("mt-24 sm:mt-32 lg:mt-40",  "text-left")}
//       >
//         <FadeIn>


//        <div >
//   {/* <GlowingEffectDemoSecond /> */}
//   <GlowingEffectGrid className="dark" items={gridItems} />
// </div>

       
           
//         </FadeIn>
//       </Container>
     
        
//     </>
//   );
// };

// export default FrontendBlogPage;

"use client";

import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Meta from "@/components/Meta";
import SectionIntro from "@/components/SectionIntro";
import React from "react";
import clsx from "clsx";
import GlowingEffectGrid from "@/components/GlowingEffectGrid";

import {
  Server,
  Database,
  Braces,
  Shield,
  Settings,
} from 'lucide-react';

const gridItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Server className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Intro to Node.js",
    description: "Understand the event-driven architecture and asynchronous nature of Node.js.",
    imageSrc: "/backend-main.jpg",
    href: "/blog/backend/intro-to-nodejs",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Braces className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Spring Boot REST APIs",
    description: "Build powerful RESTful APIs using Spring Boot and Java.",
    imageSrc: "/backend-main.jpg",
    href: "/blog/backend/spring-boot-rest-api",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Database className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Mastering Databases",
    description: "Learn how to design and manage relational and NoSQL databases effectively.",
    imageSrc: "/backend-main.jpg",
    href: "/blog/backend/mastering-databases",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Shield className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Authentication & Security",
    description: "Explore secure authentication methods including JWT, OAuth2, and password hashing.",
    imageSrc: "/backend-main.jpg",
    href: "/blog/backend/authentication-security",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Docker for Devs",
    description: "Package and run your backend apps in isolated Docker containers.",
    imageSrc: "/backend-main.jpg",
    href: "/blog/backend/docker-for-devs",
  },
];

export const metadata = {
  title: "Backend Blog – Server-side Insights by Kumar Web Works",
  description: "Dive into backend development with guides on Node.js, Spring Boot, databases, and security.",
  metadataBase: new URL("https://www.kumarwebworks.com/blog/backend"),
  alternates: {
    canonical: "/blog/backend",
  },
  openGraph: {
    title: "Backend Blog – Server-side Insights by Kumar Web Works",
    description: "Dive into backend development with guides on Node.js, Spring Boot, databases, and security.",
    url: "https://www.kumarwebworks.com/blog/backend",
    siteName: "Kumar Web Works",
    images: [
      {
        url: "https://www.kumarwebworks.com/agency.PNG",
        width: 800,
        height: 600,
        alt: "Kumar Web Works Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backend Blog – Server-side Insights by Kumar Web Works",
    description: "Dive into backend development with guides on Node.js, Spring Boot, databases, and security.",
    images: ["https://www.kumarwebworks.com/agency.PNG"],
  },
  robots: "index, follow",
  keywords: "backend development, nodejs, spring boot, api, database, jwt, docker",
  type: "website",
  locale: "en_US",
};

const BackendBlogPage = () => {
  return (
    <>
      <Meta {...metadata} />

      <SectionIntro
        eyebrow="Backend Blog"
        title="Build Powerful Server-Side Applications"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Discover essential techniques in server-side development using technologies like Node.js,
          Spring Boot, databases, and authentication. Learn how to build robust, scalable backend systems.
        </p>
      </SectionIntro>

      <Container className={clsx("mt-24 sm:mt-32 lg:mt-40", "text-left")}>
        <FadeIn>
          <GlowingEffectGrid className="dark" items={gridItems} />
        </FadeIn>
      </Container>
    </>
  );
};

export default BackendBlogPage;
