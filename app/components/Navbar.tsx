import Link from "next/link";
import SearchBar from './SearchBar';

import { Logo, User, ShoppingCart, Menu, Search } from './Icons'
export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 right-0 flex items-center justify-between self-stretch gap-[6.25rem] w-full bg-white shadow-nav z-50  md:px-[5.25rem] md:py-[6.5625]">
      <div className="flex items-center justify-between gap-44 ">
        {/* logo */}
        <div>
          <Link href="/" className="flex items-start">
           <Logo />
          </Link>
        </div>

        {/* nav Links */}
        <div className="flex items-center py-4 gap-9 w-[132rem]">
          <Link href="/" className="flex p-4 justify-center items-center gap-2.5">Home</Link>
          <Link href="/products" className="flex p-4 justify-center items-center gap-2.5">Products</Link>
          <Link href="/blog" className="flex p-4 justify-center items-center gap-2.5">Blog</Link>
          <Link href="/faq" className="flex p-4 justify-center items-center gap-2.5">FAQ</Link>
          <Link href="#contact" className="flex p-4 justify-center items-center gap-2.5">Contact Us</Link>
        </div>        
      </div>  
      {/* nav icons */}
      <div className="flex items-center gap-[4.125rem]">
        {/* search container */}
        <div className="flex w-[220px] px-[0.429rem] py-2.5 justify-center items-center gap-[5.5px]">
          <label htmlFor="search" className="flex size-8 justify-center items-center shrink-0"><Search/></label>
          <input type="search" name="search" id="search" placeholder="Serch " />
          
        </div>  

        {/* <SearchBar/> */}
        {/* icons */}
        <div className="flex items-start py-2 gap-4">
          <Link href="/register" className="size-8">
            <User />
          </Link>
          <Link href="/cart" className="size-8">
          <ShoppingCart/>
          </Link>

          <button className="hover:underline flex items-center size-8 sm:hidden">
            <Menu/>
          </button>
        </div>
      </div>  

  
    </nav>
  );
  }
