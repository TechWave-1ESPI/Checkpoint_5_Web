import React, { useState } from 'react';
import Logo from '../../assets/logo/logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="py-4">
            <nav className="flex justify-around items-center text-xl text-zinc-500">

                {/* Menu Hamburger */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <GiHamburgerMenu className="text-3xl" />
                    </button>
                </div>

                <div className="logo flex font-medium cursor-pointer">
                    <Link to={'/'} className='flex'>
                        <img src={Logo} className='w-16 h-16 my-4' alt="Logo" />
                        <p className='my-9 text-white text-3xl'>Poke<span className='text-orange-400'>Zizi</span></p>
                    </Link>
                </div>

                

                {/* Links para telas grandes */}
                <div className="hidden lg:flex gap-x-5 my-9">
                    <Link to="/" className="hover:text-zinc-200 transition-all duration-200">Home</Link>
                    <Link to="/#produtos" className="hover:text-zinc-200 transition-all duration-200">Produtos</Link>
                    <Link to="/#sobre" className="hover:text-zinc-200 transition-all duration-200">Sobre</Link>
                </div>

                {/* Ícones */}
                <div className="flex gap-3 login-part my-9 cursor-pointer">
                    <Link to='/login'><FaRegUserCircle className="text-2xl text-zinc-200 hover:text-orange-400 transition-all duration-200" /></Link>
                    <RiSearch2Line className='text-2xl text-zinc-200 hover:text-orange-400 transition-all duration-200' />
                    <RiShoppingCart2Line className='text-2xl text-zinc-200 hover:text-orange-400 transition-all duration-200' />
                </div>
            </nav>

            {/* Menu Lateral */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
                    <div className="bg-white w-64 h-full absolute left-0 top-0 p-4">
                        <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
                            {/* O mesmo botão para fechar o menu */}
                            <AiOutlineClose className="text-3xl" />
                        </button>
                        <div className="flex flex-col mt-16">
                            <Link to="/" className="py-2 hover:text-orange-400">Home</Link>
                            <Link to="/#produtos" className="py-2 hover:text-orange-400">Produtos</Link>
                            <Link to="/#sobre" className="py-2 hover:text-orange-400">Sobre</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Nav;
