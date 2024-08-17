"use client";
import { useEffect, useRef } from 'react';

export function useInterval(
  callback: any,
  { interval, lead }: { interval: number; lead?: boolean },
): void {
  const savedCallback = useRef<any>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = (): void => savedCallback.current();

    lead && tick();

    if (interval !== null) {
      const id = setInterval(tick, interval);

      return () => clearInterval(id);
    }
  }, [interval]);
}