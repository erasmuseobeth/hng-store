import Hero from "./components/Hero";
import CategoryContainer from "./components/CategoryContainer";
import Products from "./components/Products";


import Image from "next/image";
export default function Home() {
  return (
    <div className="box-border" >
        <Hero/>
        <CategoryContainer/>
        <Products/>

    
      
    </div>
  );
}
