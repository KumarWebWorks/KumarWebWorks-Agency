

'use client';
import { useRef, useEffect, useState } from 'react';
import Container from './Container';
import SectionIntro from './SectionIntro';
import { Server, Braces, Database, Shield, Settings , Eye } from "lucide-react";
import { increaseBlogView } from '@/lib/increseViews';

export default function BlogLayout({ blog }) {
  const contentRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const subtopics = blog.subtopic || [];

  const handleScrollTo = (index) => {
    contentRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) setActiveIndex(idx);
        });
      },
      { rootMargin: '-50% 0px -49% 0px', threshold: 0.1 }
    );

    contentRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  if (blog?.id) {
    increaseBlogView(blog.id);
  }
}, [blog.id]);



  return (
    <Container>
        <SectionIntro
              eyebrow={blog.title}
              title={blog.description}
              className="mt-24 sm:mt-32 lg:mt-40"
            >
              <p>{blog.content}</p>
            </SectionIntro>

             <header className="mt-11 z-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={blog.author_image || '/laptop.jpg'}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
           
             <p className="font-semibold text-gray-700">{blog.author_name || "Kumar Web Works"}</p>
            <p className="text-sm text-gray-500">Created: {new Date(blog.created_at).toLocaleDateString()}</p>
           
          </div>
        </div>
        <div className="text-right text-sm text-gray-600 dark:text-gray-400">
          <p> <Eye size={16} /> {blog.views || 10} views</p>
          
         
        </div>
      </header> 
    <div className=" mt-5 relative flex flex-col md:flex-row w-full">
      {/* Sticky Header
      <header className="sticky top-0 z-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={blog.author_image || '/laptop.jpg'}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
           
             <p className="font-semibold">sahil kumar</p>
            <p className="text-sm text-gray-500">Created: {new Date(blog.created_at).toLocaleDateString()}</p>
           
          </div>
        </div>
        <div className="text-right text-sm text-gray-600 dark:text-gray-400">
          <p>👁 {blog.views || 0} views</p>
          
          <p>💬 {blog.comments.length || 0} comments</p>
        </div>
      </header> */}

      {/* Main Content + Aside */}
      <div className="flex w-full">
        {/* Main Scrollable Content */}
        <main className="w-full md:w-3/4 h-screen px-4 py-6 space-y-10 overflow-scroll overflow-x-hidden scroll-smooth">
          {/* <h1 className="text-3xl font-bold">{blog.title}</h1> */}
            {/* <h1 className="text-3xl font-bold">{blog.title}</h1> */}

          {blog.subtopic.map((sub, index) => (
            <section
              key={index}
              ref={(el) => (contentRef.current[index] = el)}
              id={`subtopic-${index}`}
              className="py-6"
            >
              <h2 className="text-2xl font-semibold text-gray-900">{sub.title}</h2>
              <p className="text-gray-700 mt-2">{sub.content}</p>
              <p className="text-gray-700 mt-2">{sub.description}</p>
              <div className="mt-3">
                {/* <p className="whitespace-pre-wrap text-gray-800">{sub.content}</p> */}
                {sub.codeExample && (
                  <pre className="mt-4 p-4 bg-gray-900 text-green-400 rounded text-sm overflow-x-auto">
                    <code>{sub.codeExample}</code>
                  </pre>
                )}
              </div>
            </section>
          ))}
        </main>

        {/* Sticky Aside */}
       
      </div>
      <aside className="hidden md:block w-1/4 absolute  top-10 right-2 self-start px-4 py-6 h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="bg-white dark:bg-gray-900 border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-4 text-lg text-gray-700">Subtopics</h3>
            <ul className="space-y-2 text-sm">
              {subtopics.map((sub, index) => (
                <li
                  key={index}
                  onClick={() => handleScrollTo(index)}
                  className={`cursor-pointer hover:underline ${
                    activeIndex === index ? 'text-blue-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {sub.title}
                </li>
              ))}
            </ul>
          </div>
        </aside>

    </div>
    </Container>
  );
}
