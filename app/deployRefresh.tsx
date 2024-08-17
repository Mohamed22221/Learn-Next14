"use client";
import { Modal } from "antd";
import { useInterval } from "./_components/intervelDeploy";
import { useState } from "react";
import { useRouter } from "next/navigation";

import React from 'react'

export const DeployRefreshManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleCancel = () => {
    setIsModalOpen(false);
    router.refresh();
  };
  useInterval(
    async () => {
      const ApibuildId: any = await fetch(`/api`);
      const { buildId } = await ApibuildId.json();

      if (buildId && process.env.buildId && buildId !== process.env.buildId) {
        setIsModalOpen(true);
      }
    },
    { interval: 40000 }
  );
  return (
    <Modal open={isModalOpen}  onCancel={handleCancel} footer={null} closeIcon={null}>
      <h3> new version deployed that we need to load</h3>
      <button onClick={handleCancel}>Reload Now</button>
    </Modal>
  )
}

