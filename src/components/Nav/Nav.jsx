import Logo from '../../assets/logo/logo.png'
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";


import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header className="py-4  ">
            <nav className="flex justify-around text-xl text-zinc-500 ">
                <div className="logo flex font-medium cursor-pointer">
                    <Link to={'/'} className='flex'>
                        <img src={Logo} className='w-16 h-16 my-4'></img>
                        <p className='my-9 text-white text-3xl'>Poke<span className='text-orange-400'>Zizi</span></p>
                    </Link>
                </div>
                <div className="links-part flex gap-x-5 my-9">
                    <a href='/' className="hover:text-zinc-200 transition-all duration-200">Home</a >
                    <a href='/#produtos' className="hover:text-zinc-200 transition-all duration-200">Produtos</a >
                    <a href='/#sobre' className="hover:text-zinc-200 transition-all duration-200">Sobre</a >
                </div>

                <div className="flex gap-3 login-part my-9 cursor-pointer ">
                    <Link to='/login'><FaRegUserCircle className="text-2xl text-zinc-200 hover:text-orange-400 transition-all duration-200"/> </Link>
                    
                    <RiSearch2Line className='text-2xl text-zinc-200 hover:text-orange-400 transition-all duration-200'/>
                    <RiShoppingCart2Line className='text-2xl text-zinc-200 hover:text-orange-400 transition-all duration-200'/>
                </div>

            </nav>
        </header>

    )
}

export default Nav