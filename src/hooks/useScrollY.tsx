import { useEffect, useState } from 'react';

export default function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', () => setScrollY(window.pageYOffset));
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', () =>
        setScrollY(window.pageYOffset)
      );
    };
  }, []);

  return scrollY;
}
