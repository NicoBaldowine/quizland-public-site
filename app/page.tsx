// app/page.tsx
'use client';

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureBox from "../components/FeatureBox";
import Footer from "../components/Footer";
import { FadeInSection } from "../components/FadeInSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-[1090px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-10 gap-x-[40px]">
            <FadeInSection>
              <FeatureBox 
                title="Instant Quiz Generation on Any Topic with AI"
                description="Just type your topic, and let AI do the rest. From history and pop culture to complex sciences, generate quizzes instantly with a single click."
                bgColor="bg-[#FEDE67]"
                videoSource="/revolutexample.mp4"
              />
            </FadeInSection>
            <FadeInSection delay={200}>
              <FeatureBox 
                title="Level Up with Custom Knowledge Challenges"
                description="Challenge yourself with personalized difficulty levels..."
                bgColor="bg-[#FF9A62]"
                videoSource="/revolutexample.mp4"
              />
            </FadeInSection>
            <FadeInSection delay={400}>
              <FeatureBox 
                title="Smart Suggestions for Your Next Quiz"
                description="Get topic suggestions from trending subjects..."
                bgColor="bg-[#C9A0FF]"
                videoSource="/revolutexample.mp4"
              />
            </FadeInSection>
            <FadeInSection delay={600}>
              <FeatureBox 
                title="Instant Results to Help You Improve"
                description="Receive immediate feedback after each quiz..."
                bgColor="bg-[#94DBFB]"
                videoSource="/revolutexample.mp4"
              />
            </FadeInSection>
          </div>
        </section>
        
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-[1090px] mx-auto text-center">
            <h2 className="font-outfit font-semibold text-4xl md:text-[80px] leading-tight md:leading-[93%] tracking-[-1%] mb-8 gradient-text">
              Join the Fun<br />
              Create Your First Quiz Now
            </h2>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="#" className="bg-[#262D3A] text-white px-4 py-3 rounded-lg flex items-center justify-center border border-[#676C76] transition-all duration-300 hover:bg-[#3A4351] hover:border-[#8A90A0]">
                <img src="/app-store-icon.svg" alt="App Store" className="w-6 h-6" />
                <span className="ml-2">App Store</span>
              </a>
              <a href="#" className="bg-[#262D3A] text-white px-4 py-3 rounded-lg flex items-center justify-center border border-[#676C76] transition-all duration-300 hover:bg-[#3A4351] hover:border-[#8A90A0]">
                <img src="/google-play-icon.svg" alt="Google Play" className="w-6 h-6" />
                <span className="ml-2">Google Play</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
