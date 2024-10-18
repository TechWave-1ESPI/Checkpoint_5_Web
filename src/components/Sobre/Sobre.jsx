import AboutImage from '../../assets/about_image.png'

const Sobre = () => {
    return (
        <section className="flex max-w-screen-xl mx-auto rounded-[30px] mt-24 h-[50vh] justify-between">
            <img src={AboutImage} alt="store" className='w-[35%] rounded-[20px]' />

            <div className='w-[58%] py-[30px] '>
                <h1 className='text-4xl font-bold text-white uppercase'>Who Are We?</h1>
                
                <div className='flex mt-6 gap-3'>
                    <div className='w-[48%]'>
                        <h2 className='text-2xl text-orange-400 font-semibold mb-2'>Mission and Specialty</h2>
                        <p className='leading-[28px] text-white '>Our poke shop is dedicated to providing unique and healthy dining experiences. With our customizable poke bowls, each customer can create their own combination using fresh, high-quality ingredients. We strive to ensure that every meal is delicious and tailored to individual tastes, making each visit a special occasion.</p>
                    </div>

                    <div className='w-[48%]'>
                        <h2 className='text-2xl text-orange-400 font-semibold mb-2'>Commitment to Sustainability</h2>
                        <p className='leading-[28px] text-white'>We are committed to sustainability and actively work to reduce our environmental impact. By sourcing from local suppliers, we guarantee fresh, seasonal ingredients, and we use biodegradable packaging to minimize waste. We believe that every meal can be both delicious and environmentally friendly.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre