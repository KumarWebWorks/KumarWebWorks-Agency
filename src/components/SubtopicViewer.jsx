"use client";
import React, { useRef, useEffect, useState } from "react";

const SubtopicViewer = ({ subtopics }) => {
  const subtopicRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Add refs dynamically
  useEffect(() => {
    subtopicRefs.current = subtopics.map((_, i) => subtopicRefs.current[i] || React.createRef());
  }, [subtopics]);

  // Highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const index = subtopicRefs.current.findIndex((ref) => ref.current === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    subtopicRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      subtopicRefs.current.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleClick = (index) => {
    subtopicRefs.current[index]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex  gap-8 mt-10  px-6 py-10 max-w-3xl mx-auto">
      {/* Subtopic Titles Navigation */}
      
      <aside className="w-1/4 sticky top-20 h-full space-y-4">
        <h2 className="font-semibold text-lg mb-2">Subtopics</h2>
        {subtopics.map((sub, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer transition-colors duration-300 ${
              activeIndex === index ? "text-blue-600 font-semibold" : "text-gray-700"
            }`}
          >
            {sub.title}
          </div>
        ))}
      </aside>

      {/* Subtopic Content */}
      <section className="w-3/4 space-y-12">
        {subtopics.map((sub, index) => (
          <div key={index} ref={subtopicRefs.current[index]}>
            <h3 className="text-xl font-semibold mb-2">{sub.title}</h3>
            <p className="text-gray-600">{sub.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SubtopicViewer;
