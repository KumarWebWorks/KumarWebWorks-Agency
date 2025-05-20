"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconArticle,
 

  IconCode,

  IconHome,
  
  IconMessageCircle,
  

  
  IconTools,
  
  
  IconUsers,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
     {
      title: "Contact",
      icon: (
        <IconMessageCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },

    {
      title: "Blog",
      icon: (
        <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    },
    {
      title: "Terminal",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/code",
    },
    // {
    //   title: "Work",
    //   icon: (
    //     <IconChecklist className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //     // <img
    //     //   src="https://assets.aceternity.com/logo-dark.png"
    //     //   width={20}
    //     //   height={20}
    //     //   alt="Aceternity Logo" />
    //   ),
    //   href: "#",
    // },
    {
      title: "Process",
      icon: (
        <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/process",
    },
     {
      title: "About",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    

    
   
  ];
  return (
    <div className="flex items-center justify-around  w-full sticky top-0 z-50">
     
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>
   
  );
}
