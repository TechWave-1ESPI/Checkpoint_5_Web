import Poke1 from '../../assets/pokes/1.png'
import Ingredient from '../../assets/ingredients/ingredient1.png'
import Ingredient2 from '../../assets/ingredients/ingredient2.png'

import { BsFillClockFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";




const Home = () => {
  return (
      <>
      {/* Inicio */}
          <div className="grid grid-cols-3 gap-5 max-w-screen-xl mx-auto px-4 w-full"> 
            <div className="col-span-2 my-20 w-full flex flex-col justify-center flex-grow">
              <h1 className="uppercase text-6xl font-bold text-zinc-200">
                enjoy our delicious<br/>
                <span className="text-orange-400">poke</span>
                </h1>
                <div className="description my-6">
                  <p className=' text-zinc-200'>Experience the best Poke restaurant in the world! We invite you to visit us at our store for a <br />dining experience that will tantalize your taste buds and leave you wanting more.</p>
                </div>
                <div className="btn-inicio">
                  <button className='bg-orange-400 font-semibold rounded-xl px-4 py-[5px]'>BOOK A TABLE</button>
                  <img src={Ingredient} className='ml-48 w-[80px] absolute'></img>
                </div>
            </div>

            <div className="col-span-1 img-size">
              <div className="image-side flex justify-center">
                <img
                  src={Poke1}
                  alt="delicious poke"
                  className="poke w-[400px] h-auto object-cover animate-spin-slow z-10" 
                />
                <img
                  src={Ingredient2}
                  alt='mango'
                  className='absolute z-0 w-96 ml-24 '
                />
              </div>
            </div>
          </div>
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
              <h2 className='font-bold text-xl'>+55 (11)99492-9391</h2>
              <p className='font-medium text-zinc-500'>Call Online</p>
            </div>


            
          </div>

          
      </>
  )
}

export default Home