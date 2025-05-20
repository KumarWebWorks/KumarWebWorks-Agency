// "use client";

import React from "react";
import clsx from "clsx";

import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Meta from "@/components/Meta";
import SectionIntro from "@/components/SectionIntro";
import GlowingEffectGrid from "@/components/GlowingEffectGrid";

import {
  Code,
  LayoutTemplate,
  Atom,
  Server,
} from 'lucide-react';

const gridItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Code className="h-4 w-4 text-black dark:text-neutral-400" aria-hidden="true" />,
    title: "HTML Basics",
    description: "Get started with HTML basics in this beginner-friendly guide.",
    imageSrc: "/uiux-main.jpg",
    href: "/blog/frontend/html-basics",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <LayoutTemplate className="h-4 w-4 text-black dark:text-neutral-400" aria-hidden="true" />,
    title: "CSS Grid vs Flexbox",
    description: "Compare CSS Grid and Flexbox to build responsive layouts.",
    imageSrc: "/uiux-main.jpg",
    href: "/blog/frontend/css-grid-vs-flexbox",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Atom className="h-4 w-4 text-black dark:text-neutral-400" aria-hidden="true" />,
    title: "React Hooks Intro",
    description: "Learn how to use useState and useEffect in React functional components.",
    imageSrc: "/uiux-main.jpg",
    href: "/blog/frontend/react-hooks-intro",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Server className="h-4 w-4 text-black dark:text-neutral-400" aria-hidden="true" />,
    title: "Node.js Express API",
    description: "Create powerful backend APIs using Node.js and Express framework.",
    imageSrc: "/uiux-main.jpg",
    href: "/blog/frontend/nodejs-express-api",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <LayoutTemplate className="h-4 w-4 text-black dark:text-neutral-400" aria-hidden="true" />,
    title: "CSS Grid vs Flexbox",
    description: "Compare CSS Grid and Flexbox to build responsive layouts.",
    imageSrc: "/uiux-main.jpg",
    href: "/blog/frontend/css-grid-vs-flexbox",
  },
];
export const metadata = {
  title: "Frontend Blog – Learn HTML, CSS, React & More | Kumar Web Works",
  description:
    "Master frontend web development with expert tutorials on HTML, CSS, React, JavaScript, and modern UI/UX practices. Updated regularly for all skill levels.",
  metadataBase: new URL("https://www.kumarwebworks.com"),
  alternates: {
    canonical: "/blog/frontend",
  },
  openGraph: {
    title: "Frontend Blog – Learn HTML, CSS, React & More | Kumar Web Works",
    description:
      "Level up your frontend skills with hands-on guides and deep dives into HTML5, Flexbox, CSS Grid, React Hooks, and Node.js Express APIs.",
    url: "https://www.kumarwebworks.com/blog/frontend",
    siteName: "Kumar Web Works",
    images: [
      {
        url: "https://www.kumarwebworks.com/agency.PNG",
        width: 1200,
        height: 630,
        alt: "Frontend Web Development Tutorials – Kumar Web Works",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Blog – HTML, CSS, React & More | Kumar Web Works",
    description:
      "Hands-on tutorials and design tips for mastering frontend web development, from HTML and CSS to React and Express APIs.",
    images: ["https://www.kumarwebworks.com/agency.PNG"],
  },
  robots: "index, follow",
  keywords:
    "frontend development tutorials, HTML5 guide, CSS Grid vs Flexbox, React Hooks tutorial, Node.js Express API, UI/UX tips, web design blog, Kumar Web Works frontend",
  type: "website",
  locale: "en_US",
};


const FrontendBlogPage = () => {
  return (
    <>
      <Meta {...metadata} />

      <main aria-labelledby="page-title" className="bg-white dark:bg-gray-900 min-h-screen">
        <Container className={clsx("mt-24 sm:mt-32 lg:mt-40", "text-left")}>
          <SectionIntro
            eyebrow="Frontend Blog"
            title="Master Frontend Development"
            className="mb-12"
          >
            <p>
              Explore practical tutorials, tips, and insights on HTML, CSS, JavaScript, and
              modern frontend tools. Whether you are a beginner or a pro, there is something here
              for every developer.
            </p>
          </SectionIntro>

          <FadeIn>
            <nav aria-label="Frontend blog articles">
              <GlowingEffectGrid className="dark" items={gridItems} />
            </nav>
          </FadeIn>
        </Container>
      </main>
    </>
  );
};

export default FrontendBlogPage;
