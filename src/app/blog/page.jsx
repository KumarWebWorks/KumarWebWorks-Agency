import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Kumar Web Works - React & Spring Boot Web Development",
  description:
    "Kumar Web Works offers top-notch website and app development using React, Next.js, and Java Spring Boot. We also provide mobile app development and UI/UX services.",
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
