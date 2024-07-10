import { Home, Shop, Cart, Favourites, Profile } from './Icons';
import Link from 'next/link';
const BottomNavbar = () => {
    return ( 
        <div className="flex justify-between items-start gap-2.5 self-stretch p-2.5 bg-white w-full max-w-full lg:hidden fixed bottom-0 z-50 overflow-x-hidden">
           <Link href="/" className="flex flex-col justify-center items-center w-8 h-11 gap-1">
         
                <Home className='size-10'/>
                <span className="text-xs font-normal leading-normal text-grey text[#9b9b9b]">
                    Home
                </span>
          </Link>

           <Link href="/products" className="flex flex-col justify-center items-center w-8 h-11 gap-1">
         
                <Shop className='size-10'/>
                <span className="text-xs font-normal leading-normal text-grey text[#9b9b9b]">
                    Shop
                </span>
          </Link>  

          <Link href="/cart" className="flex flex-col justify-center items-center w-8 h-11 gap-1">
         
         <Cart className='size-10'/>
         <span className="text-xs font-normal leading-normal text-grey text[#9b9b9b]">
             Cart
         </span>
         </Link>

         <Link href="/cart" className="flex flex-col justify-center items-center w-8 h-11 gap-1">
         
         <Favourites className='size-10'/>
         <span className="text-xs font-normal leading-normal text-grey text[#9b9b9b]">
             Favourites
         </span>
        </Link>

        <Link href="/cart" className="flex flex-col justify-center items-center w-8 h-11 gap-1">
         
         <Profile className='size-10'/>
         <span className="text-xs font-normal leading-normal text-grey text[#9b9b9b]">
             Profile
         </span>
      </Link>


        </div>
     );
}
 
export default BottomNavbar;