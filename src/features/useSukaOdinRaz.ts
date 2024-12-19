import {useEffect, useRef} from 'react';

export function useSukaOdinRaz(fn: () => void, deps?: any[]): void { //@typescript-eslint/no-explicit-any
  const canCall = useRef(true);
  useEffect(() => {
    if (typeof window !== 'undefined' && canCall.current) {
      canCall.current = false;
      fn();
    }
  }, [deps])
}