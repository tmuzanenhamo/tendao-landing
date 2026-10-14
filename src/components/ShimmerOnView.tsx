'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

// The gold sweep, played once when the text first comes into view rather than
// on load, for text that sits below the fold.
export default function ShimmerOnView({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setSeen(true);
        observer.disconnect();
      },
      { threshold: 0.6 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`${seen ? 'shimmer-once' : ''} ${className}`}>
      {children}
    </span>
  );
}
