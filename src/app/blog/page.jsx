
import Meta from "@/components/Meta";
import PageIntro from "@/components/PageIntro";


export const metadata = {
 title:"Our Blog – Tech Insights from Kumar Web Works",
        description:"Explore web dev tutorials, case studies, and expert tips from the Kumar Web Works team."
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
    </>
  );
};

export default BlogPage;
