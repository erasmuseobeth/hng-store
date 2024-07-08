import Image from "next/image";
import ButtonLink from "./ButtonLink";
export default function Hero() {
    return (
      <div className="flex justify-center items-center gap-5 h-44 rounded-lg bg-[rgb(6,58,136)] w-full">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl  text-[#303030] font-bold">Discover the latest in Technology</h2>
        <p>Explore our exclusive collection of high-prfomance gadgets</p>
        <div>
          <ButtonLink href="/product/:id" label="Shop Now" className="bg-[#F45E0C]" />
        </div>
      </div>
      <div>
        <Image src="/hero-laptop" alt="laptop image" width="185" height="153" className="w-full bg-cover" />

      </div>
      </div>
      
    );
  }
  