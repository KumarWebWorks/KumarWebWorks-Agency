'use client';

import { useEffect, useState } from 'react';
import PageIntro from '@/components/PageIntro';

export default function BlogPostClient({ blog }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('blog-dark-mode');
    if (saved === 'true') setIsDark(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('blog-dark-mode', isDark);
  }, [isDark]);

  return (
    <>
      <PageIntro eyebrow={blog.title} title={blog.description}>
        <p>{blog.content}</p>
      </PageIntro>

      {/* <div className={`transition-colors duration-300 px-6 py-10 max-w-3xl mx-auto ${isDark ? 'dark' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-sm px-3 py-1 border rounded dark:bg-white dark:text-black"
          >
            {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        <div className="prose dark:prose-invert dark:bg-gray-900 dark:text-white p-6 rounded-lg">
          <p className="text-lg leading-7 whitespace-pre-line">{blog.description}</p>
        </div>
      </div> */}
    </>
  );
}
