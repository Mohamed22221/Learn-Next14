"use client";
import { useInterval } from "./_components/intervelDeploy";


export async function DeployRefreshManager() {
  

  useInterval(
    async () => {
      const buildId : any = await fetch(`/api`);
      console.log(buildId)

      if (buildId && process.env.buildId && buildId !== process.env.buildId) {
        console.log('There\'s a new version deployed that we need to load');
      }
    },
    { interval: 20000 },
  );

  return null;
}