// components/FeatureBox.tsx
'use client';

import Image from 'next/image';

interface FeatureBoxProps {
  title: string;
  description: string;
  bgColor: string;
  imageSource: string;
}

export default function FeatureBox({ title, description, bgColor, imageSource }: FeatureBoxProps) {
  return (
    <div 
      className={`px-6 md:px-12 pt-8 md:pt-12 ${bgColor} rounded-[20px] md:rounded-[40px] w-full md:w-[505px] h-[700px] md:h-[750px] flex flex-col relative overflow-hidden group`}
    >
      <h2 className="font-outfit text-[1.8rem] md:text-[36px] font-semibold mb-4 text-[#101827] leading-tight">{title}</h2>
      <p className="text-sm md:text-base text-[#101827] mb-6">{description}</p>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[320px] h-[500px] overflow-hidden">
        <Image 
          src={imageSource}
          alt={title}
          width={320}
          height={500}
          className="w-full h-full object-contain [--tw-scale-x:1,] [--tw-scale-y:1.1] scale-110"
          priority
        />
      </div>
    </div>
  );
}
