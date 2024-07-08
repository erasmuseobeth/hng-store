import { Chat, ArrowUp, UserFooter, ArrowRight, Paypal, AmericanExpress, Visa, MasterCard, Facebook, Twitter, Instagram, Youtube, ArrowDown} from './Icons';

export default function Footer() {
  return (

    <footer className="flex w-screen flex-col items-start shrink-0 px-6 pt-4 gap-4 bg-[#021736] mb-16 self-stretch justify-center">

{/* chat */}
      <div className="flex justify-between items-end self-stretch w-full">
        <span className="rounded-full bg-[#aecdfb] flex justify-center items-center w-10 h-10">
          <Chat/>
        </span>
        <span className="rounded-full bg-[#aecdfb] flex justify-center items-center w-10 h-10">
          <ArrowUp/>
        </span>
      </div>

{/* updates */}
      <div className="flex flex-col items-center self-stretch rounded-lg py-2 gap-3">

      <p className="text-white leading-6 font-medium text-base self-stretch">
      Sign up for News and updates
      </p>
{/* input mail */}
      <div className="flex items-center justify-around self-stretch border border-white  px-3 border-solid rounded-lg box-border">
        <label htmlFor="email">
          <UserFooter className='size-6 mr-2' />
        </label>
        <input type="email" id='email' placeholder='E-mail Address' className='py-2.5 bg-transparent w-fit placeholder-white outline-none text-white'/>
         <ArrowRight className='size-5 xs:-ml-6'/>
      </div>

      </div>

{/* about us */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex justify-between items-center text-white py-2 self-stretch">
          <p>Company</p><ArrowDown/>
        </div>
        <div className="flex justify-between items-center text-white py-2 self-stretch">
          <p>Info</p><ArrowDown/>
        </div>

        <div className="flex justify-between items-center text-white py-2 self-stretch">
          <p>Contact us</p><ArrowDown/>
        </div>


      </div>

{/* partners and social media */}
      <div className="flex justify-between py-2 self-stretch mb-4">
        <div className='flex justify-center items-center gap-1'>
          <Paypal/>
          <AmericanExpress/>
          <Visa/>
          <MasterCard/>
        </div>
        <div className='flex justify-center items-center  gap-2 ml-6'>
          <Facebook/>
          <Twitter/>
          <Instagram/>
          <Youtube/>
        </div>
      </div>
             
    </footer>
  );
  }