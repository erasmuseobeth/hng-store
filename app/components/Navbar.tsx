import Link from "next/link";
import { Logo, User, ShoppingCart, Menu } from './Icons'
export default function Navbar() {
  return (
   <nav className="flex justify-between w-screen px-6 py-2 bg-white shadow-custom">

        <div>
          <Link href="/" className="w-6 h-6">
           <Logo />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/signin" className="w-6 h-6">
            <User />
          </Link>
          <Link href="/cart" className="w-6 h-6">
          <ShoppingCart/>
          </Link>
          <button className="hover:underline flex items-center w-6 h-6">
            <Menu/>
          </button>
        </div>
  
    </nav>
  );
  }