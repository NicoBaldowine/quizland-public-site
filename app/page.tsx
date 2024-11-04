// app/page.tsx
'use client';

import { useState } from 'react';
import HeroSection from "../components/HeroSection";
import FeatureBox from "../components/FeatureBox";
import { FadeInSection } from "../components/FadeInSection";
import Image from 'next/image';
import CustomerStories from "../components/CustomerStories";
import Modal from "../components/Modal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#101827] min-h-screen">
      <HeroSection openModal={openModal} />
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-[1090px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-10 gap-x-[40px]">
          <FadeInSection>
            <FeatureBox 
              title="Instant Quiz Generation on Any Topic with AI"
              description="Just type your topic, and let AI do the rest. From history and pop culture to complex sciences, generate quizzes instantly with a single click."
              bgColor="bg-[#FEDE67]"
              imageSource="/box1.png"
            />
          </FadeInSection>
          <FadeInSection delay={200}>
            <FeatureBox 
              title="Level Up with Custom Knowledge Challenges"
              description="Challenge yourself with personalized difficulty levels. Start as a beginner and climb the ranks as your knowledge grows, from basic to expert."
              bgColor="bg-[#FF9A62]"
              imageSource="/box2.png"
            />
          </FadeInSection>
          <FadeInSection delay={400}>
            <FeatureBox 
              title="Smart Suggestions for Your Next Quiz"
              description="Get topic suggestions from trending subjects, your interests, or popular categories. Discover new and exciting areas to challenge your knowledge."
              bgColor="bg-[#C9A0FF]"
              imageSource="/box3.png"
            />
          </FadeInSection>
          <FadeInSection delay={600}>
            <FeatureBox 
              title="Instant Results to Help You Improve"
              description="Receive immediate feedback after each quiz. See what you got right, where you went wrong, and try again to improve your score!"
              bgColor="bg-[#94DBFB]"
              imageSource="/box4.png"
            />
          </FadeInSection>
        </div>
      </section>
      
      <CustomerStories />
      
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-[1090px] mx-auto text-center">
          <h2 className="font-outfit font-semibold text-4xl md:text-[80px] leading-[1.1] md:leading-[1.1] tracking-[-0.01em] mb-8 gradient-text">
            Join the Fun<br />
            Create Your First Quiz Now
          </h2>
          <div className="flex flex-row justify-center space-x-4">
            <a 
              href="https://apps.apple.com/us/app/quizland-app/id6737491930"
              className="md:hidden bg-[#182236] text-white px-4 py-3 rounded-lg flex items-center justify-center border border-[#748098] transition-all duration-300 hover:bg-[#2E394E] hover:border-[#8A90A0]"
            >
              <Image 
                src="/app-store-icon.svg" 
                alt="App Store" 
                width={24} 
                height={24} 
              />
              <span className="ml-2">Get it on App Store</span>
            </a>
            <button 
              onClick={openModal}
              className="hidden md:flex bg-[#182236] text-white px-4 py-3 rounded-lg items-center justify-center border border-[#748098] transition-all duration-300 hover:bg-[#2E394E] hover:border-[#8A90A0]"
            >
              <Image 
                src="/app-store-icon.svg" 
                alt="App Store" 
                width={24} 
                height={24} 
              />
              <span className="ml-2">Get it on App Store</span>
            </button>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
