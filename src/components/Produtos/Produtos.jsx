import Poke4 from '../../assets/pokes/4.png' 
import Poke3 from '../../assets/pokes/3.png' 
import Poke5 from '../../assets/pokes/5.png' 
import Ingredient from '../../assets/ingredients/ingredient1.png'
import Ingredient3 from '../../assets/ingredients/ingredient3.png'
import Ingredient4 from '../../assets/ingredients/ingredient4.png'

const Produtos = () => {
    return (
        <section className='py-5'>
            {/* Layout para Desktop */}
            <div className="hidden md:flex cards mt-20 max-w-screen-xl mx-auto items-center w-full bg-white rounded-[30px] h-[30vh]">
                <div className='w-[45%] h-[80%] flex flex-col justify-between ml-10'>
                    <div className='flex flex-col h-[55%] justify-between'>
                        <p className='text-4xl font-bold'>Salmon Poke</p>
                        <p className='font-medium text-gray-800 mt-2'>Indulge in our freshest salmon poke, marinated in a special sauce, served with sushi rice, creamy avocado, and crunchy vegetables. An explosion of ocean flavors!</p>
                    </div>
                    <div className='flex gap-5 w-[50%] items-center'>
                        <p className='line-through text-2xl font-medium '>$54.90</p>
                        <button className='bg-orange-400 px-8 py-3 text-2xl font-medium rounded-xl drop-shadow-[0_0px_8px_rgba(0,0,0,0.35)]'>$39.99</button>
                    </div>
                </div>
                
                <img src={Ingredient} className='w-[80px] ml-[60%] rotate-[260deg] mt-[-9%] absolute'/>
                <img src={Ingredient3} className='w-[130px] ml-[48%] mt-[12%] rotate-[-65deg] absolute'/>
                <img src={Poke5} alt="Poke 5" className='w-[400px] right-[50px] absolute product'/>
            </div>

            {/* Layout Responsivo para Mobile */}
            <div className="flex md:hidden flex-col items-center mt-20 max-w-screen-xl mx-auto w-full bg-white rounded-[30px] h-auto p-5">
                <img src={Poke5} alt="Poke 5" className='w-full max-w-[400px] mb-4' />
                <div className='flex flex-col justify-between w-full'>
                    <p className='text-4xl font-bold'>Salmon Poke</p>
                    <p className='font-medium text-gray-800 mt-2'>Indulge in our freshest salmon poke, marinated in a special sauce, served with sushi rice, creamy avocado, and crunchy vegetables. An explosion of ocean flavors!</p>
                    <div className='flex gap-5 w-full justify-center mt-4'>
                        <p className='line-through text-2xl my-3 font-medium '>$54.90</p>
                        <button className='bg-orange-400 px-8 py-3 text-2xl font-medium rounded-xl drop-shadow-[0_0px_8px_rgba(0,0,0,0.35)]'>$39.99</button>
                    </div>
                </div>
            </div>

            {/* Outros Cards para Desktop */}
            <div className="hidden md:flex cards card-rice mt-20 max-w-screen-xl mx-auto items-center w-full bg-white rounded-[30px] h-[30vh]">
                <img src={Poke4} alt="Poke 4" className='w-[430px] ml-9 product'/>
                <div className='w-[45%] h-[80%] flex flex-col justify-between ml-[15%] '>
                    <div className='flex flex-col h-[55%] justify-between'>
                        <p className='text-4xl font-bold text-right '>Rice Poke</p>
                        <p className='font-medium text-right text-gray-800 mt-2'>Rice and Vegetable Poke Savor our rice poke with fresh veggies and nutritious grains. A light and flavorful meal in every bite!</p>
                    </div>
                    <div className='flex gap-5 items-center ml-[50%]'>
                        <button className='bg-orange-400 px-8 py-3 text-2xl font-medium rounded-xl drop-shadow-[0_0px_8px_rgba(0,0,0,0.35)]'>$35.90</button>
                        <p className='line-through text-2xl my-3 font-medium '>$48.99</p>
                    </div>
                </div>
                <img src={Ingredient4} className='w-[300px] ml-[32%] rotate-[60deg] mt-[22%] absolute'/>
            </div>

            {/* Layout Responsivo para Mobile do Card Rice */}
            <div className="flex md:hidden flex-col items-center mt-20 max-w-screen-xl mx-auto w-full bg-white rounded-[30px] h-auto p-5">
                <img src={Poke4} alt="Poke 4" className='w-full max-w-[400px] mb-4' />
                <div className='flex flex-col justify-between w-full'>
                    <p className='text-4xl font-bold'>Rice Poke</p>
                    <p className='font-medium text-gray-800 mt-2'>Rice and Vegetable Poke Savor our rice poke with fresh veggies and nutritious grains. A light and flavorful meal in every bite!</p>
                    <div className='flex gap-5 w-full justify-center mt-4'>
                        <button className='bg-orange-400 px-8 py-3 text-2xl font-medium rounded-xl drop-shadow-[0_0px_8px_rgba(0,0,0,0.35)]'>$35.90</button>
                        <p className='line-through text-2xl my-3 font-medium '>$48.99</p>
                    </div>
                </div>
            </div>

            {/* Outros Cards para Desktop */}
            <div className="hidden md:flex cards mt-20 max-w-screen-xl mx-auto items-center w-full bg-white rounded-[30px] h-[30vh]">
                <div className='w-[45%] h-[80%] flex flex-col justify-between ml-10'>
                    <div className='flex flex-col h-[55%] justify-between'>
                        <p className='text-4xl font-bold'>Vegetable Poke</p>
                        <p className='font-medium text-gray-800 mt-2'>Veggie Poke Bowl Indulge in our veggie poke, filled with a variety of fresh, crunchy vegetables. A light and vibrant option, perfect for those who love flavor and freshness!</p>
                    </div>
                    <div className='flex gap-5 w-[50%] items-center'>
                        <p className='line-through text-2xl my-3 font-medium '>$39.99</p>
                        <button className='bg-orange-400 px-8 py-3 text-2xl font-medium rounded-xl drop-shadow-[0_0px_8px_rgba(0,0,0,0.35)]'>$29.90</button>
                    </div>
                </div>
                
                <img src={Ingredient4} className='w-[250px] ml-[85%] rotate-[90deg] absolute'/>
                <img src={Ingredient} className='w-[80px] ml-[58%] mt-[12%] rotate-[-65deg] absolute'/>
                <img src={Poke3} alt="Poke 5" className='w-[400px] right-[50px] absolute product'/>
            </div>

            {/* Layout Responsivo para Mobile do Card Vegetable */}
            <div className="flex md:hidden flex-col items-center mt-20 max-w-screen-xl mx-auto w-full bg-white rounded-[30px] h-auto p-5">
                <img src={Poke3} alt="Poke 5" className='w-full max-w-[400px] mb-4' />
                <div className='flex flex-col justify-between w-full'>
                    <p className='text-4xl font-bold'>Vegetable Poke</p>
                    <p className='font-medium text-gray-800 mt-2'>Veggie Poke Bowl Indulge in our veggie poke, filled with a variety of fresh, crunchy vegetables. A light and vibrant option, perfect for those who love flavor and freshness!</p>
                    <div className='flex gap-5 w-full justify-center mt-4'>
                        <p className='line-through text-2xl my-3 font-medium '>$39.99</p>
                        <button className='bg-orange-400 px-8 py-3 text-2xl font-medium rounded-xl drop-shadow-[0_0px_8px_rgba(0,0,0,0.35)]'>$29.90</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Produtos