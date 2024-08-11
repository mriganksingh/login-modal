"use client";
import React, { useState } from 'react';
import Modal from "@/app/components/Modal";
import Card from "@/app/components/Card";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card onPost={openModal}/>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
  );
};

export default Home;
