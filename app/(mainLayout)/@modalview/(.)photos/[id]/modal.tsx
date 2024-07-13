"use client"
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useRouter } from 'next/navigation';

const ModalComponent = ({children} : any) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // setIsModalOpen(false);
    router.back();

  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {children}
      </Modal>
    </>
  );
};

export default ModalComponent;