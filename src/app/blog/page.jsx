import PageIntro from "@/components/PageIntro";

// export const metadata = {
//   title: "Blog | Kumar Web Works",
//   description: "Stay updated with the latest web development trends, tips, and insights from Kumar Web Works' expert team.",
// };

const BlogPage = () => {

   const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Blog | Kumar Web Works",
    "url": "https://www.kumarwebworks.com/blog",
    "logo": "https://www.kumarwebworks.com/images/laptop.jpg",
    "description": "Stay updated with the latest web development trends, tips, and insights from Kumar Web Works' expert team.",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-9942488298",
      "contactType": "customer service"
    }],
    "sameAs": [
      "https://www.linkedin.com/company/kumarwebworks",
      "https://twitter.com/kumarwebworks",
      "https://www.facebook.com/kumarwebworks"
    ]
  };
  return (
    <> 
        <Meta
  title = "Blog | Kumar Web Works"
  description = "Stay updated with the latest web development trends, tips, and insights from Kumar Web Works' expert team."
  url="https://kumarwebworks.com/blog"
  image="https://kumarwebworks.com/images/laptop.jpg"
  jsonLd={jsonLdData}
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
