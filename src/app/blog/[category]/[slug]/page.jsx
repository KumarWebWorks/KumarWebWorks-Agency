
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { getAllBlogs } from '@/lib/getAllBlogs'; // helper to fetch blogs from backend

const BlogPostClient = dynamic(() => import('@/components/BlogPostClient'), {
  ssr: false,
});

// Generate SEO metadata dynamically
export async function generateMetadata({ params }) {
      
  
  const allBlogs = await getAllBlogs();
  const backendBlogs = allBlogs.filter(blog => blog.category === params.category);



   const blog = backendBlogs.find(b => b.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post does not exist.',
    };
  }

  

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://kumarwebworks.com/blog/backend/${params.slug}`,
      type: 'article',
      images: [
        {
          url: blog.image || '/default-backend-image.jpg',
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    },
  };
}

// Main blog post page
export default async function BlogPostPage({ params }) {
    const { category } = params;
    const { slug } = params
    
  const allBlogs = await getAllBlogs();
    
  const backendBlogs = allBlogs.filter(blog => blog.category === category);
 
  const blog = backendBlogs.find(b => b.slug === slug);
 

  if (!blog) return notFound();
   console.log('Blog post:', blog);
  return (<BlogPostClient blog={blog} />);
   
}
