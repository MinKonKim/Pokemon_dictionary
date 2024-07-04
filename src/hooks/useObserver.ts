"use client";

import { RefObject, useEffect } from "react";

type UseObserverParams = {
  target: RefObject<Element>;
  onIntersect: IntersectionObserverCallback;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export const useObserver = ({
  target,
  onIntersect,
  root = null,
  rootMargin = "0px",
  threshold = 0.9,
}: UseObserverParams) => {
  useEffect(() => {
    let observer: IntersectionObserver;

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target, onIntersect, root, rootMargin, threshold]);
};
