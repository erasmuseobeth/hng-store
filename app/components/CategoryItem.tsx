import Image from 'next/image';


export default function CategoryItem(label:string) {
    return (
      <div className="flex w-[82px] h-[100px] p-[8px] flex-col justify-center items-center gap-[4px] flex-shrink-0 rounded-[8px] bg-white shadow-custom">
  
         <Image 
        src="/assets/hero.png" 
        alt="Descriptive Alt Text" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        className='max-w-full max-h-full object-cover'
      />
      <p className="center text-xs">{label}</p>


      </div>
    );
  }
  