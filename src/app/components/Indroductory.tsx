"use client";
import React, { useEffect, useState, useRef, CSSProperties } from 'react';

const Indroductory: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;

        // Trigger animation only when scrolling down and the section is in the viewport
        if (inViewport && currentScrollY > lastScrollY) {
          setIsVisible(true);
        }

        // Only update last scroll position if scrolling down
        if (currentScrollY > lastScrollY) {
          setLastScrollY(currentScrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Define the animation styles with CSSProperties
  const animationStyles: CSSProperties = {
    position: 'relative',
    transition: 'transform 1.5s ease-out, opacity 1.5s ease-out',
    transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20vh)',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div ref={sectionRef} className='flex flex-col items-center justify-center min-h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold mb-4'>Get to Know</h1>
        <p className='mb-4'>Watch our introductory video to learn more about our team, our process, and how we can help your business grow.</p>
        <div style={animationStyles}>
          <video
            src="/intro.mp4"
            className="w-full max-w-4xl h-auto mb-8 rounded-lg px-4"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Indroductory;
