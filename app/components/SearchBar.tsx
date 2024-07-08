
import Link from "next/link";
import { Search } from './Icons';

export default function SearchBar() {
  return ( 
    <div className="flex items-center justify-between self-stretch px-6 rounded-lg box-border shadow-md mx-3 min-h-9 py-1 mt-16 mb-4">

    <input type="search" id='search' placeholder='What can we help you to find ?' className='py-2 bg-transparent outline-none text-red text-[16px] text-[#1E5EFF]'/>
    <label htmlFor="search">
      <Search />
    </label>
  </div>

   );
}