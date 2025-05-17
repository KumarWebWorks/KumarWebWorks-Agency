
import BlogCard from "@/components/BlogCard";

import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Meta from "@/components/Meta";
import PageIntro from "@/components/PageIntro";
import React from "react";
import clsx from "clsx";



export const metadata = {
 title:"Our Blog – Tech Insights from Kumar Web Works",
        description:"Explore web dev tutorials, case studies, and expert tips from the Kumar Web Works team.",
         metadataBase: new URL("https://www.kumarwebworks.com/blog"),
  alternates: {
    canonical: "/blog",
  },
         
       };


const BlogPage = () => {
  


  return (
    <> 
      
<Meta
        title="Our Blog – Tech Insights from Kumar Web Works"
        description="Explore web dev tutorials, case studies, and expert tips from the Kumar Web Works team."
        url="https://www.kumarwebworks.com/blog"
        image="https://www.kumarwebworks.com/agency.PNG"
        keywords="web dev blog, fullstack tips, react tutorials, spring boot insights"
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


          
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 md:gap-y-8  lg:gap-x-8 md:gap-x-6 gap-8 p-2">

             
            
             <BlogCard />
            <BlogCard />
            <BlogCard />
              <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          
          <div className="mt-20  flex justify-center">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Load more
            </a>
            </div>
           
        </FadeIn>
      </Container>
        
    </>
  );
};

export default BlogPage;
