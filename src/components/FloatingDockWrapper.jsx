'use client';

import { useEffect, useState } from 'react';
import { FloatingDockDemo } from '@/components/FloatingDockDemo';

const FloatingDockWrapper = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const screenHeight = window.innerHeight;

      if (scrollY > screenHeight * 1.1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-opacity m-auto duration-500 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <FloatingDockDemo />
    </div>
  );
};

export default FloatingDockWrapper;
