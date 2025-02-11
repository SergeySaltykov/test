import { RefObject, useEffect } from 'react';

export const useIntersectionObserver = <T extends Element>(
  targetRef: RefObject<T | null>,
  onIntersect: () => void,
  options?: IntersectionObserverInit,
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
          observer.unobserve(targetRef.current!);
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current!);
      }
    };
  }, [targetRef, onIntersect, options]);
};
