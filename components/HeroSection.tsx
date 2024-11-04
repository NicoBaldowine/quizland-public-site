// components/HeroSection.tsx
import RotatingTopics from './RotatingTopics';
import Image from 'next/image';

interface HeroSectionProps {
  openModal: () => void;
}

export default function HeroSection({ openModal }: HeroSectionProps) {
  return (
    <section className="w-full px-4 pt-8 md:pt-16 pb-16 flex flex-col items-center relative">
      <div className="flex flex-col items-center space-y-0">
        <h1 className="font-outfit font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[82px] leading-[1.1] tracking-[-1%] text-center gradient-text min-h-[1.2em]">
          Create quizzes about
        </h1>
        <div className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-semibold">
          <RotatingTopics />
        </div>
        <div className="space-y-0">
          <h1 className="font-outfit font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[82px] leading-[1.1] tracking-[-1%] text-center gradient-text min-h-[1.2em]">
            and anything else you
          </h1>
          <h1 className="font-outfit font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[82px] leading-[1.1] tracking-[-1%] text-center gradient-text min-h-[1.2em]">
            can imagine
          </h1>
        </div>
      </div>

      <p className="font-outfit font-normal md:font-light text-white/60 mt-4 md:mt-8 text-sm sm:text-base md:text-[16px] max-w-[800px] text-center leading-[1.25rem] md:leading-[1.7rem]">
        Create quizzes on any topic you can imagine—no limits! With AI<br className="hidden sm:inline" />
        powering your creativity, expand your knowledge and become<br className="hidden sm:inline" />
        smarter on any topic you choose.
      </p>

      <div className="flex flex-row space-x-4 mt-8">
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
    </section>
  );
}
