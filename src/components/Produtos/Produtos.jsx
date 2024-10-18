import Poke4 from '../../assets/pokes/4.png' 
import Poke3 from '../../assets/pokes/3.png' 
import Poke5 from '../../assets/pokes/5.png' 
import Ingredient from '../../assets/ingredients/ingredient1.png'
import Ingredient3 from '../../assets/ingredients/ingredient3.png'
import Ingredient4 from '../../assets/ingredients/ingredient4.png'

const Produtos = () => {
    return (
        <section>
            <div className="flex cards mt-20 max-w-screen-xl mx-auto items-center w-full bg-white rounded-[30px] h-[40vh]">
                <div className='w-[45%] h-[80%] flex flex-col justify-between ml-10'>
                    <div className='flex flex-col h-[55%] justify-between'>
                        <p className='text-4xl font-bold'>Salmon Poke</p>
                        <p className='text-lg font-medium text-gray-800 mt-2'>Indulge in our freshest salmon poke, marinated in a special sauce, served with sushi rice, creamy avocado, and crunchy vegetables. An explosion of ocean flavors!</p>
                    </div>
                    <div className='flex  w-[50%] justify-between items-center'>
                        <p className='line-through text-3xl font-medium '>$54.90</p>
                        <button className='bg-orange-400 px-8 py-3 text-3xl font-medium rounded-xl drop-shadow-[0_0px_8px_rgba(0,0,0,0.35)]'>$39.99</button>
                    </div>
                    
                </div>
                
                <img src={Ingredient} className='w-[80px] ml-[60%] rotate-[260deg] mt-[-9%] absolute'/>
                <img src={Ingredient3} className='w-[130px] ml-[48%] mt-[12%] rotate-[-65deg] absolute'/>
                <img src={Poke5} alt="Poke 5" className='w-[550px] right-[-50px] absolute product'/>
            </div>

            <div className="flex cards mt-20 max-w-screen-xl mx-auto items-center w-full bg-white rounded-[30px] h-[40vh]">
                <img src={Poke4} alt="Poke 4" className='w-[430px] ml-9 product'/>

                <div className='w-[45%] h-[80%] flex flex-col justify-between ml-[15%] '>
                    <div className='flex flex-col h-[55%] justify-between'>
                        <p className='text-4xl font-bold text-right '>Rice Poke</p>
                        <p className='text-lg font-medium text-right text-gray-800 mt-2'>Rice and Vegetable Poke Savor our rice poke with fresh veggies and nutritious grains. A light and flavorful meal in every bite!</p>
                    </div>
                    <div className='flex justify-between items-center ml-[50%]'>
                        <button className='bg-orange-400 px-8 py-3 text-3xl font-medium rounded-xl drop-shadow-[0_0px_8px_rgba(0,0,0,0.35)]'>$35.90</button>
                        <p className='line-through text-3xl font-medium '>$48.99</p>
                    </div>
                </div>
                
                <img src={Ingredient4} className='w-[300px] ml-[32%] rotate-[60deg] mt-[22%] absolute'/>
            </div>

            <div className="flex cards mt-20 max-w-screen-xl mx-auto items-center w-full bg-white rounded-[30px] h-[40vh]">
                <div className='w-[45%] h-[80%] flex flex-col justify-between ml-10'>
                    <div className='flex flex-col h-[55%] justify-between'>
                        <p className='text-4xl font-bold'>Vegetable Poke</p>
                        <p className='text-lg font-medium text-gray-800 mt-2'>Veggie Poke Bowl Indulge in our veggie poke, filled with a variety of fresh, crunchy vegetables. A light and vibrant option, perfect for those who love flavor and freshness!</p>
                    </div>
                    <div className='flex  w-[50%] justify-between items-center'>
                        <p className='line-through text-3xl font-medium '>$39.99</p>
                        <button className='bg-orange-400 px-8 py-3 text-3xl font-medium rounded-xl drop-shadow-[0_0px_8px_rgba(0,0,0,0.35)]'>$29.90</button>
                    </div>
                    
                </div>
                
                <img src={Ingredient4} className='w-[250px] ml-[85%] rotate-[90deg] absolute'/>
                <img src={Ingredient} className='w-[80px] ml-[58%] mt-[12%] rotate-[-65deg] absolute'/>
                <img src={Poke3} alt="Poke 5" className='w-[400px] right-[50px] absolute product'/>
            </div>
        </section>
    )
}

export default Produtos