// components/Header.tsx
'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <Image 
            src="/quizland-logo.svg" 
            alt="Quizland Logo" 
            width={110} 
            height={28} 
            priority
          />
        </div>
        <nav className="hidden md:flex items-center space-x-14">
          <a href="#about" className="font-outfit font-semibold text-base hover:text-gray-500">About us</a>
          <a href="#contact" className="font-outfit font-semibold text-base hover:text-gray-500">Contact us</a>
          <button 
            className="bg-[#262D3A] text-white px-4 py-3 rounded-lg flex items-center border border-[#676C76] transition-all duration-300 hover:bg-[#3A4351] hover:border-[#8A90A0]"
            onClick={openModal}
          >
            <span className="font-semibold">Get Quizland Free</span>
          </button>
        </nav>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#101827] z-50 flex flex-col items-center justify-center">
            <button className="absolute top-6 right-6" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#about" className="font-outfit font-semibold text-xl mb-4 text-white">About us</a>
            <a href="#contact" className="font-outfit font-semibold text-xl mb-4 text-white">Contact us</a>
            <button 
              className="bg-[#262D3A] text-white px-4 py-3 rounded-lg flex items-center border border-[#676C76] transition-all duration-300 hover:bg-[#3A4351] hover:border-[#8A90A0]"
              onClick={() => {
                openModal();
                toggleMobileMenu();
              }}
            >
              <span className="font-semibold">Get Quizland Free</span>
            </button>
          </div>
        )}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </header>
    );
  }
