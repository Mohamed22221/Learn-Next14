"use client";
import { useInterval } from "./_components/intervelDeploy";

export async function DeployRefreshManager() {
  useInterval(
    async () => {
      const ApibuildId: any = await fetch(`/api`);
      const  {buildId}  = await ApibuildId.json();
      if (buildId && process.env.buildId && buildId !== process.env.buildId) {
        console.log("There's a new version deployed that we need to load");
      }
    },
    { interval: 40000 }
  );
  return null;
}
