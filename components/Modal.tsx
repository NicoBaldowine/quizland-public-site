'use client';

import React from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#101827] text-white p-12 rounded-[20px] max-w-2xl w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center mt-4">
          <h2 className="text-4xl font-bold mb-3">
            Get Quizland Free
          </h2>
          <p className="text-sm text-white text-opacity-80 mb-8">
            Scan the QR code below to download our app:
          </p>
        </div>
        <div className="w-64 h-64 mx-auto mb-4 flex items-center justify-center">
          <Image 
            src="/qrcode.png"
            alt="QR Code for Quizland App"
            width={256}
            height={256}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
