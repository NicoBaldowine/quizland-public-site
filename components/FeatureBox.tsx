// components/FeatureBox.tsx
'use client';

import Image from 'next/image';

interface FeatureBoxProps {
  title: string;
  description: string;
  bgColor: 'bg-[#FEDE67]' | 'bg-[#FF9A62]' | 'bg-[#C9A0FF]' | 'bg-[#94DBFB]';
  imageSource: string;
}

type GradientMap = {
  [key in FeatureBoxProps['bgColor']]: string;
};

export default function FeatureBox({ title, description, bgColor, imageSource }: FeatureBoxProps) {
  // Define gradient backgrounds based on the base color
  const gradientMap: GradientMap = {
    'bg-[#FEDE67]': 'bg-gradient-to-br from-[#FEDE67] to-[#FFB930]',
    'bg-[#FF9A62]': 'bg-gradient-to-br from-[#FF9A62] to-[#FF7A3F]',
    'bg-[#C9A0FF]': 'bg-gradient-to-br from-[#C9A0FF] to-[#A571FF]',
    'bg-[#94DBFB]': 'bg-gradient-to-br from-[#94DBFB] to-[#5AC8FF]',
  };

  const gradientClass = gradientMap[bgColor];

  return (
    <div 
      className={`px-6 md:px-12 pt-8 md:pt-12 ${gradientClass} rounded-[20px] md:rounded-[40px] w-full md:w-[505px] h-[700px] md:h-[750px] flex flex-col relative overflow-hidden group transition-all duration-300 hover:shadow-lg`}
    >
      <h2 className="font-outfit text-[1.8rem] md:text-[36px] font-semibold mb-4 text-[#101827] leading-tight">
        {title}
      </h2>
      <p className="text-sm md:text-base text-[#101827] mb-6">
        {description}
      </p>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center w-full">
        <Image 
          src={imageSource}
          alt={title}
          width={500}
          height={600}
          className="w-auto h-[500px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          priority
        />
      </div>
    </div>
  );
}
