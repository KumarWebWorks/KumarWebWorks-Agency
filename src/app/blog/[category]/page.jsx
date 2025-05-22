// app/blog/[category]/page.jsx
import { getAllBlogs } from "@/lib/getAllBlogs";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import SectionIntro from "@/components/SectionIntro";
import GlowingEffectGrid from "@/components/GlowingEffectGrid";
import { Server, Braces, Database, Shield, Settings } from "lucide-react";
import clsx from "clsx";

const iconComponents = [Server, Braces, Database, Shield, Settings];

const generateGridArea = (index) => {
  const md = [
    "md:[grid-area:1/1/2/7]",
    "md:[grid-area:1/7/2/13]",
    "md:[grid-area:2/1/3/7]",
    "md:[grid-area:2/7/3/13]",
    "md:[grid-area:3/1/4/13]",
  ];
  const xl = [
    "xl:[grid-area:1/1/2/5]",
    "xl:[grid-area:2/1/3/5]",
    "xl:[grid-area:1/5/3/8]",
    "xl:[grid-area:1/8/2/13]",
    "xl:[grid-area:2/8/3/13]",
  ];
  return `${md[index % md.length]} ${xl[index % xl.length]}`;
};

const CATEGORY_DATA = {
  backend: {
    id: "Backend Blog",
    title: "Build Powerful Server-Side Applications",
    description:
      "Discover essential techniques in server-side development using technologies like Node.js, Spring Boot, databases, and authentication. Learn how to build robust, scalable backend systems.",
  },
  frontend: {
    id: "Frontend Blog",
    title: "Master Frontend Development",
    description:
      "Explore practical tutorials, tips, and insights on HTML, CSS, JavaScript, and modern frontend tools. Whether you are a beginner or a pro, there is something here for every developer.",
  },
  uiux: {
    id: "UI/UX Blog",
    title: "Design Experiences That Delight",
    description:
      "Dive into UI and UX design tutorials, from wireframing and user research to accessibility and design systems. Build skills to create engaging, user-friendly digital products.",
  },
  devops: {
    id: "DevOps Blog",
    title: "Automate Everything, Deploy Anywhere",
    description:
      "From CI/CD pipelines and containerization to infrastructure automation and monitoring, explore practical DevOps knowledge to supercharge your development workflow.",
  },
};

export async function generateMetadata({ params }) {
  const category = params.category;

  const data = CATEGORY_DATA[category] ?? {
    id: "Blog",
    title: "Tech Articles",
    description: "Latest articles on software development and technology.",
  };

  const baseUrl = "https://www.kumarwebworks.com";

  return {
    title: `${data.id} – ${data.title} by Kumar Web Works`,
    description: data.description,
    metadataBase: new URL(`${baseUrl}/blog/${category}`),
    alternates: {
      canonical: `/blog/${category}`,
    },
    openGraph: {
      title: `${data.id} – ${data.title} by Kumar Web Works`,
      description: data.description,
      url: `${baseUrl}/blog/${category}`,
      siteName: "Kumar Web Works",
      images: [
        {
          url: `${baseUrl}/agency.PNG`,
          width: 800,
          height: 600,
          alt: "Kumar Web Works Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.id} – ${data.title} by Kumar Web Works`,
      description: data.description,
      images: [`${baseUrl}/agency.PNG`],
    },
    robots: "index, follow",
    keywords: `${category}, blog, web development`,
  };
}

const BlogCategoryPage = async ({ params }) => {
  const { category } = params;
  const categoryData = CATEGORY_DATA[category];

  if (!categoryData) {
    return (
      <div className="text-center mt-20 text-red-500">
        Category not found.
      </div>
    );
  }

  const allBlogs = await getAllBlogs();
  const filteredBlogs = allBlogs.data.filter(
    (blog) => blog.category === category
  );

  const gridItems = filteredBlogs.map((post, index) => {
    const Icon = iconComponents[index % iconComponents.length];
    return {
      area: generateGridArea(index),
      icon: <Icon className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: post.title,
      description: post.description,
      imageSrc: post.image || "/backend-main.jpg",
      href: `/blog/${category}/${post.slug}`,
    };
  });

  return (
    <>
      <SectionIntro
        eyebrow={categoryData.id}
        title={categoryData.title}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{categoryData.description}</p>
      </SectionIntro>

      <Container className={clsx("mt-24 sm:mt-32 lg:mt-40", "text-left")}>
        <FadeIn>
          <GlowingEffectGrid className="dark" items={gridItems} />
        </FadeIn>
      </Container>
    </>
  );
};

export default BlogCategoryPage;
