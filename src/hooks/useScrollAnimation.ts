import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
  delay = 0,
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (hasAnimated && once) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;
          setProgress(ratio);

          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
                setHasAnimated(true);
              }, delay);
            } else {
              setIsVisible(true);
              setHasAnimated(true);
            }

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, delay, hasAnimated]);

  return { ref, isVisible, progress };
};

// 🚀 تأثير الصاروخ - لما تيجي من الـ Navbar
export const rocketVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: 45,
    y: 200,
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 💥 تأثير الانفجار - لما تسكرول عادي
export const explosionVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

// 💨 تأثير الدخان - لما ترجع لفوق
export const smokeVariants = {
  hidden: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  visible: {
    opacity: 0,
    scale: 1.5,
    filter: 'blur(10px)',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};