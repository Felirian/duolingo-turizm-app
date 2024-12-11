import {useEffect, useRef} from 'react';

export function useSukaOdinRaz(fn: () => void): void {
  const canCall = useRef(true);
  useEffect(() => {
    if (typeof window !== 'undefined' && canCall.current) {
      canCall.current = false;
      fn();
    }
  })
}