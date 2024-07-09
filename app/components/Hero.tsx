// components/Hero.tsx
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-[30vh] md:h-screen overflow-hidden shadow-xl custom-grad">
      <Image 
        src="/assets/hero.png" 
        alt="Descriptive Alt Text" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        className='my-4'
      />
    </div>
  );
};

export default Hero;
