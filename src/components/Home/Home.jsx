import Poke1 from '../../assets/pokes/1.png'
import Ingredient from '../../assets/ingredients/ingredient1.png'
import Ingredient2 from '../../assets/ingredients/ingredient2.png'
import Ingredient5 from '../../assets/ingredients/ingredient5.png'

import Sobre from '../Sobre/Sobre'
import Produtos from '../Produtos/Produtos'
import Contato from '../Contato/Contato'

const Home = () => {
  return (
      <>
      {/* Inicio */}
          <div className="grid grid-cols-3 gap-5 max-w-screen-xl mx-auto px-4 w-full"> 
            <div className="col-span-2 my-20 w-full flex flex-col justify-center flex-grow z-20">
              <h1 className="uppercase text-6xl font-bold text-zinc-200">
                enjoy our delicious<br/>
                <span className="text-orange-400">poke</span>
                </h1>
                <div className="description my-6">
                  <p className=' text-zinc-200'>Experience the best Poke restaurant in the world! We invite you to visit us at our store for a <br />dining experience that will tantalize your taste buds and leave you wanting more.</p>
                </div>
                <div className="btn-inicio">
                  <button className="relative border-2 rounded-md border-orange-400 bg-transparent py-2.5 px-5 font-medium uppercase text-orange-400 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">
                    BOOK A TABLE
                  </button>
                  <img src={Ingredient} className='ml-48 w-[80px] absolute'></img>
                </div>
            </div>

            <div className="col-span-1 img-size">
              <div className="image-side flex justify-center">
                <img
                  src={Poke1}
                  alt="delicious poke"
                  className="poke w-[400px] h-auto object-cover animate-spin-slow z-10 min-w-96 sm:w-0 ml-32 sm:m-0" 
                />
                <img
                  src={Ingredient5}
                  alt="salmao"
                  className="absolute z-0 w-96 ml-24 -translate-x-[-20px] translate-y-8 sm:translate-y-0 sm:ml-24 sm:-translate-x-0 rotate-180 sm:rotate-0 "
                />
              </div>
            </div>
          </div>

          <section id='contato'>
            <Contato />
          </section>
        

          <section id='produtos'>
            <Produtos/>
          </section>

          <section id='sobre'>
            <Sobre/>
          </section>
          
      </>
  )
}

export default Home