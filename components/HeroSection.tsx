// components/HeroSection.tsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-full px-4 pt-16 md:pt-32 pb-16 flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 hidden lg:block">
        <div className="w-[1000px] h-[1000px]">
          <Image
            src="/allimages.png"
            alt="Background Images"
            width={1000}
            height={1000}
            quality={100}
            priority
          />
        </div>
      </div>
      <h1 className="font-outfit font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[98px] leading-[93%] tracking-[-1%] max-w-[900px] text-center gradient-text pb-2 md:pb-4 relative z-10">
        Create quizzes on<br />
        any topic you<br />
        can imagine
      </h1>
      <p className="font-outfit font-normal text-white text-opacity-80 mt-4 md:mt-8 text-sm sm:text-base md:text-[15px] max-w-[800px] text-center relative z-10">
        Create quizzes on any topic you can imagine—no limits! With AI<br className="hidden sm:inline" />
        powering your creativity, expand your knowledge and become<br className="hidden sm:inline" />
        smarter on any topic you choose.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 relative z-10">
        <a href="#" className="bg-[#262D3A] text-white px-4 py-3 rounded-lg flex items-center justify-center border border-[#676C76] transition-all duration-300 hover:bg-[#3A4351] hover:border-[#8A90A0]">
          <img src="/app-store-icon.svg" alt="App Store" className="w-6 h-6" />
          <span className="ml-2">App Store</span>
        </a>
        <a href="#" className="bg-[#262D3A] text-white px-4 py-3 rounded-lg flex items-center justify-center border border-[#676C76] transition-all duration-300 hover:bg-[#3A4351] hover:border-[#8A90A0]">
          <img src="/google-play-icon.svg" alt="Google Play" className="w-6 h-6" />
          <span className="ml-2">Google Play</span>
        </a>
      </div>
    </section>
  );
}
