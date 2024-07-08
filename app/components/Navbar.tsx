import Link from "next/link";
import { Logo, User, ShoppingCart, Menu } from './Icons'
export default function Navbar() {
  return (
   <nav className="flex justify-between w-screen px-4 py-2 bg-white shadow-custom fixed">

        <div>
          <Link href="/" className="w-8 h-8">
           <Logo />
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <Link href="/signin" className="w-8 h-8">
            <User />
          </Link>
          <Link href="/cart" className="w-8 h-8">
          <ShoppingCart/>
          </Link>
          <button className="hover:underline flex items-center w-8 h-8">
            <Menu/>
          </button>
        </div>
  
    </nav>
  );
  }