import Poke1 from '../../assets/pokes/1.png'



const Home = () => {
  return (
      <>
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
                </div>
            </div>

            <div className="col-span-1 img-size">
              <div className="image-side flex justify-center">
                <img
                  src={Poke1}
                  alt="delicious poke"
                  className="w-[400px] h-auto object-cover animate-spin-slow" 
                />
              </div>
            </div>
          </div>

          
      </>
  )
}

export default Home