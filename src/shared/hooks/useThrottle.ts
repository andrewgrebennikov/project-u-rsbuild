import { useCallback, useRef } from 'react';

export const useThrottle = (callback: (...args: never[]) => void, delay: number) => {
  const throttleRef = useRef(false);

  return useCallback(
    (...args: never[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );
};
