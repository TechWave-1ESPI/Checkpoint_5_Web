import { BsFillClockFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contato = () => {
    return (
        <section>
            {/* Cards */}
        <div className='grid grid-cols-3 gap-6 max-w-screen-lg mx-auto mt-[7%] justify-center text-center'>
            <div className="flex flex-col cards py-10 bg-zinc-50 rounded-tr-[65px] rounded-bl-[65px] ">
              <div className="icon-part pb-3 flex justify-center items-center">
                <BsFillClockFill className='text-orange-400 text-6xl'/>
              </div>
              <h2 className='font-bold text-xl'>Today 10:00am - 7:00 pm</h2>
              <p className='font-medium text-zinc-500'>Waiting hours</p>
            </div>

            <div className="flex flex-col cards py-10 bg-zinc-50 rounded-tr-[65px] rounded-bl-[65px] ">
              <div className="icon-part pb-3 flex justify-center items-center">
                <IoLocationSharp className='text-orange-400 text-6xl'/>
              </div>
              <h2 className='font-bold text-xl'>Av. Paulista, 1111</h2>
              <p className='font-medium text-zinc-500'>Get directions</p>
            </div>

            <div className="flex flex-col cards py-10 bg-zinc-50 rounded-tr-[65px] rounded-bl-[65px] ">
              <div className="icon-part pb-3 flex justify-center items-center">
                <BsFillTelephoneFill className='text-orange-400 text-6xl'/>
              </div>
              <h2 className='font-bold text-xl'>+55 (11) 99492-9391</h2>
              <p className='font-medium text-zinc-500'>Call Online</p>
            </div> 
        </div>
        </section>
    )
}

export default Contato