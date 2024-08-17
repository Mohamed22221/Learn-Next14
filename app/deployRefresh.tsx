"use client";
import { useEffect, useRef } from 'react';
import request from 'superagent';

function useInterval(
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

export function DeployRefreshManager(): any {
  useInterval(
    async () => {
      const { buildId } = (await request.get('/api')).body;

      if (buildId && process.env.buildId && buildId !== process.env.buildId) {
        console.log('There\'s a new version deployed that we need to load');
      }
    },
    { interval: 20000 },
  );

  return null;
}