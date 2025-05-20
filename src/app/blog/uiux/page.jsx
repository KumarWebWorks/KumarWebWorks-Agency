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
  PenTool,
  LayoutTemplate,
  Atom,
  Braces,
  RefreshCcw,
  Code,
} from "lucide-react";

const gridItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <PenTool className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "UI Design Principles",
    description: "Learn fundamental principles for designing intuitive user interfaces.",
    imageSrc: "/uiux/ui-design-principles.jpg",
    href: "/blog/uiux/ui-design-principles",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <LayoutTemplate className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Wireframing & Prototyping",
    description: "Explore techniques to create effective wireframes and prototypes.",
    imageSrc: "/uiux/wireframing.jpg",
    href: "/blog/uiux/wireframing-prototyping",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Atom className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "User Research Basics",
    description: "Understand how to conduct user research to improve design decisions.",
    imageSrc: "/uiux/user-research.jpg",
    href: "/blog/uiux/user-research-basics",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Braces className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Accessibility in Design",
    description: "Make your designs inclusive by following accessibility best practices.",
    imageSrc: "/uiux/accessibility.jpg",
    href: "/blog/uiux/accessibility-design",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <RefreshCcw className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Design Systems Explained",
    description: "Learn how to build and maintain scalable design systems.",
    imageSrc: "/uiux/design-systems.jpg",
    href: "/blog/uiux/design-systems",
  },
];

export const metadata = {
  title: "UI/UX Blog – Design, Research & Prototyping | Kumar Web Works",
  description: "Explore tutorials and tips on UI design, user research, prototyping, and accessibility.",
  metadataBase: new URL("https://www.kumarwebworks.com/blog/uiux"),
  alternates: {
    canonical: "/blog/uiux",
  },
  openGraph: {
    title: "UI/UX Blog – Design, Research & Prototyping | Kumar Web Works",
    description: "Explore tutorials and tips on UI design, user research, prototyping, and accessibility.",
    url: "https://www.kumarwebworks.com/blog/uiux",
    siteName: "Kumar Web Works",
    images: [
      {
        url: "https://www.kumarwebworks.com/uiux.jpg",
        width: 800,
        height: 600,
        alt: "UI/UX Blog - Kumar Web Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Blog – Design, Research & Prototyping | Kumar Web Works",
    description: "Explore tutorials and tips on UI design, user research, prototyping, and accessibility.",
    images: ["https://www.kumarwebworks.com/uiux.jpg"],
  },
  robots: "index, follow",
  keywords: "ui design, ux research, wireframing, prototyping, accessibility, design systems",
  type: "website",
  locale: "en_US",
};

const UiUxBlogPage = () => {
  return (
    <>
      <Meta {...metadata} />

      <SectionIntro
        eyebrow="UI/UX Blog"
        title="Design Experiences That Delight"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Dive into UI and UX design tutorials, from wireframing and user research to accessibility and design systems. Build skills to create engaging, user-friendly digital products.
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

export default UiUxBlogPage;
