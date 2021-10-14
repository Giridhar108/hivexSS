import { RefObject, useEffect, useRef } from "react";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el: any = elRef.current;
    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
}
