// components/FeatureBox.tsx
'use client';


interface FeatureBoxProps {
  title: string;
  description: string;
  bgColor: string;
  videoSource: string;
}

export default function FeatureBox({ title, description, bgColor, videoSource }: FeatureBoxProps) {
  return (
    <div 
      className={`px-6 md:px-12 pt-6 md:pt-16 ${bgColor} rounded-[20px] md:rounded-[40px] w-full md:w-[505px] h-[600px] md:h-[650px] flex flex-col relative overflow-hidden group`}
    >
      <h2 className="font-outfit text-[1.8rem] md:text-[36px] font-semibold mb-4 text-[#101827] leading-tight">{title}</h2>
      <p className="text-sm md:text-base text-[#101827] mb-6">{description}</p>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[290px] h-[350px] overflow-hidden">
        <video 
          src={videoSource} 
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}
