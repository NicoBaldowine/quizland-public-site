// components/Header.tsx
'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
      <header className="flex justify-between items-center pl-4 pr-6 md:px-8 py-6 bg-[#101827]">
        <div className="flex items-center">
          <Link href="/" className="cursor-pointer">
            <Image 
              src="/quizland-logo.svg" 
              alt="Quizland Logo" 
              width={110} 
              height={28} 
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-12">
          <Link href="/about-us" className="font-outfit font-semibold text-base text-white hover:text-gray-300 transition-colors duration-200">
            About us
          </Link>
          <Link href="/contact-us" className="font-outfit font-semibold text-base text-white hover:text-gray-300 transition-colors duration-200">
            Contact us
          </Link>
          <div className="flex space-x-4 ml-12">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200">
              <Image src="/icons/instagram-icon.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200">
              <Image src="/icons/discord-icon.svg" alt="Discord" width={24} height={24} />
            </a>
          </div>
          <button 
            className="bg-[#182236] text-white px-4 py-3 rounded-lg flex items-center border border-[#748098] transition-all duration-300 hover:bg-[#2E394E] hover:border-[#8A90A0] ml-12"
            onClick={openModal}
          >
            <span className="font-semibold">Get Quizland Free</span>
          </button>
        </nav>
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
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
            <Link href="/about-us" className="font-outfit font-semibold text-xl mb-6 text-white hover:text-gray-300 transition-colors duration-200" onClick={toggleMobileMenu}>
              About us
            </Link>
            <Link href="/contact-us" className="font-outfit font-semibold text-xl mb-6 text-white hover:text-gray-300 transition-colors duration-200" onClick={toggleMobileMenu}>
              Contact us
            </Link>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200">
                <Image src="/icons/instagram-icon.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200">
                <Image src="/icons/discord-icon.svg" alt="Discord" width={24} height={24} />
              </a>
            </div>
            <a 
              href="https://apps.apple.com/us/app/quizland-app/id6737491930"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#182236] text-white px-4 py-3 rounded-lg flex items-center border border-[#748098] transition-all duration-300 hover:bg-[#2E394E] hover:border-[#8A90A0]"
              onClick={toggleMobileMenu}
            >
              <span className="font-semibold">Get Quizland Free</span>
            </a>
          </div>
        )}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </header>
    );
  }
