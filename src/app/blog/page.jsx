import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Blog | Kumar Web Works",
  description: "Stay updated with the latest web development trends, tips, and insights from Kumar Web Works' expert team.",
};

const BlogPage = () => {
  return (
    <>
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
