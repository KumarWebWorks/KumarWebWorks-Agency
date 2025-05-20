
import BlogCard from "@/components/BlogCard";

import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Meta from "@/components/Meta";
import PageIntro from "@/components/PageIntro";
import React from "react";
import clsx from "clsx";
import GlowingEffectGrid from "@/components/GlowingEffectGrid";

import { Code, Server, Settings, PenTool, TerminalSquare } from 'lucide-react';

const gridItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Code className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Frontend",
    description: "Articles on React, Vue, and UI design.",
    imageSrc: "/frontend-main.jpg",
    href: "/blog/frontend",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Server className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Backend",
    description: "Node.js, Spring Boot, Databases.",
    imageSrc: "/backend-main.jpg",
    href: "/blog/backend",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "DevOps",
    description: "Docker, CI/CD, and deployments.",
    imageSrc: "/devops-main.jpg",
    href: "/blog/devops",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <PenTool className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "UI/UX",
    description: "Design systems, Figma, animations.",
    imageSrc: "/uiux-main.jpg",
    href: "/blog/uiux",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <TerminalSquare className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "The best AI code editor ever",
    description:
      "Experience real-time code suggestions, bug fixes, and smart refactoring—powered by cutting-edge AI. This is the future of development.",
    imageSrc: "/codeeditor-main.jpg",
    href: "/ai-code-editor",
  },
];




export const metadata = {
  title: "Our Blog – Tech Insights from Kumar Web Works",
  description: "Explore web dev tutorials, case studies, and expert tips from the Kumar Web Works team.",
  metadataBase: new URL("https://www.kumarwebworks.com/blog"),      
  alternates: {
    canonical: "/blog",
  }, 
  openGraph: {
    title: "Our Blog – Tech Insights from Kumar Web Works",
    description: "Explore web dev tutorials, case studies, and expert tips from the Kumar Web Works team.",
    url: "https://www.kumarwebworks.com/blog",
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
    title: "Our Blog – Tech Insights from Kumar Web Works",
    description: "Explore web dev tutorials, case studies, and expert tips from the Kumar Web Works team.",
    images: ["https://www.kumarwebworks.com/agency.PNG"],
  },
  robots: "index, follow",
  keywords: "web dev blog, fullstack tips, react tutorials, spring boot insights",
  type: "website",
  locale: "en_US", 
         
       };


const BlogPage = () => {
  


  return (
    <> 
      
<Meta
        {...metadata}
      />
       
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          Stay up-to-date with the latest industry news as our marketing teams
          finds new ways to re-purpose old CSS tricks articles.
        </p>
      </PageIntro>

      <Container
       className={clsx("mt-24 sm:mt-32 lg:mt-40",  "text-left")}
      >
        <FadeIn>


       <div >
  {/* <GlowingEffectDemoSecond /> */}
  <GlowingEffectGrid className="dark" items={gridItems} />
</div>

       
           
        </FadeIn>
      </Container>
     
        
    </>
  );
};

export default BlogPage;
