"use client"
import React from 'react'
import { useShowMore } from '@/hooks/useShowMore'

import FadeIn from "@/components/FadeIn";
import StylizedImage from "@/components/StylizedImage";
import imageLaptop from "@/images/laptop.jpg";
import List, { ListItem } from "@/components/List";

function WorkList() {

      const moreLinks = [
    {
      title: "Foodie App",
      description: "A modern food delivery app with real-time tracking.",
      image: "https://kumarwebworks.com/hero.jpg",
      techStack: ["React Native", "Firebase", "Express"],
    },
    {
      title: "Portfolio Site",
      description: "A personal portfolio to showcase web development projects.",
      image: "https://kumarwebworks.com/hero.jpg",
      techStack: ["React", "Tailwind CSS", "Vite"],
    },
    {
      title: "Booking Platform",
      description: "An online hotel booking service and travel booking service.",
      image: "https://kumarwebworks.com/hero.jpg",
      techStack: ["Next.js", "MongoDB", "Node.js"],
    },
  ];
       
    const {showMore , toggle} = useShowMore();
    
  return (


    <>
     {showMore && (
          
          <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            {moreLinks.map((item, index) => (
              <ListItem key={index} title={item.title}>
                {item.description}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-black text-white px-2 py-1 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ListItem>
            ))}
          </List>
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
        </div>
           
        )}

        <div className="flex justify-center mt-10">
          <button
            onClick={() => toggle()}
            className="underline text-black hover:text-gray-700"
          >
            {showMore ? "Hide" : "See more"} <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
    </>
  )
}

export default WorkList