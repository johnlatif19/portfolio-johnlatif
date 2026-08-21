import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTypewriterOptions {
  words: string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export const useTypewriter = ({
  words,
  speed = 100,
  delay = 0,
  loop = true,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: UseTypewriterOptions) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMounted = useRef(true);

  const type = useCallback(() => {
    if (!isMounted.current) return;

    const currentWord = words[wordIndex];
    const isComplete = currentText === currentWord && !isDeleting;
    const isDeleted = currentText === '' && isDeleting;

    // Pause when word is complete
    if (isComplete) {
      setIsPaused(true);
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return;
    }

    // Move to next word when deleted
    if (isDeleted) {
      setIsDeleting(false);
      const nextIndex = (wordIndex + 1) % words.length;
      setWordIndex(nextIndex);
      if (!loop && nextIndex === 0) {
        return;
      }
      return;
    }

    // Typing or deleting
    const currentSpeed = isDeleting ? deleteSpeed : speed;
    const charIndex = isDeleting ? currentText.length - 1 : currentText.length;

    if (isDeleting) {
      setCurrentText(currentWord.substring(0, charIndex));
    } else {
      setCurrentText(currentWord.substring(0, charIndex + 1));
    }

    timeoutRef.current = setTimeout(type, currentSpeed);
  }, [currentText, isDeleting, wordIndex, words, speed, deleteSpeed, pauseDuration, loop]);

  useEffect(() => {
    isMounted.current = true;

    // Initial delay before starting
    const initialTimeout = setTimeout(() => {
      if (isMounted.current) {
        type();
      }
    }, delay);

    return () => {
      isMounted.current = false;
      clearTimeout(initialTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [type, delay]);

  // Reset when words change
  useEffect(() => {
    setCurrentText('');
    setIsDeleting(false);
    setWordIndex(0);
    setIsPaused(false);
  }, [words]);

  return {
    text: currentText,
    isDeleting,
    isPaused,
    wordIndex,
    isComplete: currentText === words[wordIndex] && !isDeleting,
  };
};

// Optional: Typewriter with cursor
export const useTypewriterWithCursor = (options: UseTypewriterOptions) => {
  const { text, isDeleting, isPaused, isComplete } = useTypewriter(options);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return {
    text,
    cursor: showCursor ? '|' : '',
    isDeleting,
    isPaused,
    isComplete,
  };
};