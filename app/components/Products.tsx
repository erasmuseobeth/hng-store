
export default function Products() {
    return (
      <div className="snap-proximity snap-x ... rounded bg-[#063A88]  h-[35vh] flex-shrink-0 flex my-12 w-full p-5 pl-6 ml-6 justify-center items-center gap-4 overflow">

         <div className="snap-center ... flex w-[82px] h-[100px] p-[8px] justifify-center items-center gap-2 flex-shrink-0 rounded flex-col text-white">
            <div className="center items-between justify-between">
            <p className="center text-bold text-sm">Products on Sale</p>
            <p className="center text-xs">Shop Now</p>
            </div>
            <div>
            <p className="center text-xs">View</p>
            </div>
          </div>


          <div className="snap-center ... flex lex flex-col justify-center items-center  rounded-4 bg-white">
            <img src="/assets/cat/img4.png"/>
            <p className="center text-xs">Accessories</p>
          </div>
         
        


         </div>

    );
  }
  