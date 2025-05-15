

import PageIntro from "@/components/PageIntro";
import React from "react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import StylizedImage from "@/components/StylizedImage";
import imageLaptop from "@/images/laptop.jpg";
import List, { ListItem } from "@/components/List";
import WorkList from "@/components/WorkList";
import Meta from "@/components/Meta";



export const metadata = {
  title:"Our Work | Kumar Web Works – Learn More About Kumar Web Works",
  description:"Explore our portfolio of high-performance websites and apps built with React, Next.js, and Java Spring Boot.",
   metadataBase: new URL("https://www.kumarwebworks.com/work"),
  alternates: {
    canonical: "/work",
  },
    };



const WorkPage = () => {
  

  
  const initialLinks = [
    {
      title: "Rahi Restro",
      description: "A modern food delivery app with real-time tracking.",
      image: "https://i.imgur.com/8ALzZGF.png",
      techStack: ["React Native", "Firebase", "Express"],
      href: "https://kumarwebworks.com/",
    },
    {
      title: "Foodie App",
      description: "A modern food delivery app with real-time tracking.",
      image: "https://i.imgur.com/8ALzZGF.png",
      techStack: ["React Native", "Firebase", "Express"],
    },
    {
      title: "Portfolio Site",
      description: "A personal portfolio to showcase web development projects.",
      image: "https://i.imgur.com/8ALzZGF.png",
      techStack: ["React", "Tailwind CSS", "Vite"],
    },
    {
      title: "Booking Platform",
      description: "An online hotel booking service and travel booking service.",
      image: "https://i.imgur.com/8ALzZGF.png",
      techStack: ["Next.js", "MongoDB", "Node.js"],
    },
  ];



  return (
    <>
     <Meta
        title={metadata.name}
        description={metadata.description}
        url="https://www.kumarwebworks.com/work"
        image="https://www.kumarwebworks.com/favicon.ico"
        keywords="our work, Kumar Web Works, web development, portfolio, digital solutions"
      />
       
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. Our approach is rooted in smart planning,
          streamlined processes, and the use of cutting-edge technology to
          minimize waste and boost productivity.
          <br />
          <br />
          Every project we undertake is carefully evaluated to identify
          opportunities for automation and optimization. By eliminating
          redundancies and focusing on lean execution, we ensure that time and
          money are spent only where they matter most.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            {initialLinks.map((item, index) => (
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
        </div>
        <WorkList/>
       
      </Container>
    </>
  );
};

export default WorkPage;
