'use client';

import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverReturn {
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
}

export function useIntersectionObserver(options = {}): UseIntersectionObserverReturn {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isVisible };
}
