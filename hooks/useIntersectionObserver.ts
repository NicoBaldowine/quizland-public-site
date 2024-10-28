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
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isVisible };
}
