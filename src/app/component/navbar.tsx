'use client'
import { useState } from 'react';
import React from 'react';
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/photos/logo asifa.png";
import { CiMenuBurger } from 'react-icons/ci';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div>
            <header className="text-white bg-[#59253A]">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center ">
                    <a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={logo} alt="logo" width={100} height={100} className="w-[60px] ml-5 rounded-full " />
                        <span className="ml-3 text-xl text-[#e56b6f]">Asifa Khan</span>
                    </a>
                    <nav className="hidden md:block md:ml-auto flex-wrap items-center text-base justify-center duration-100">
                        <Link href="" className="mr-4 hover:text-[#ffc857]  hover:border-b-purple-800 hover:border-b-2">HOME</Link>
                        <Link href="#about" className="mr-4 hover:text-[#ffc857] hover:border-b-purple-800 hover:border-b-2">About</Link>
                        <Link href="#contact" className="mr-4 hover:text-[#ffc857]hover:border-b-purple-800 hover:border-b-2">Contact</Link>
                        <Link href="#skills" className="mr-4 hover:text-[#ffc857]hover:border-b-purple-800 hover:border-b-2">SKILL</Link>
                        <Link href="#projects" className="mr-4 hover:text-[#ffc857]hover:border-b-purple-800 hover:border-b-2">PROJECT</Link>

                    </nav>
                    {/* Sidebar for mobile screens */}
                    <ul className={`fixed top-0 ${isSidebarOpen ? 'right-0' : '-right-full'} w-full h-screen bg-[#1B1464] z-[999] flex flex-col justify-center items-center list-none transition-right duration-300 ease-in-out`}>
                        <li><Link href="/" className="link" onClick={toggleSidebar}>Home</Link></li>
                        <li><Link href="/about" className="link" onClick={toggleSidebar}>About</Link></li>
                        <li><Link href="/contact" className="link" onClick={toggleSidebar}>Contact Us</Link></li>
                    </ul>

                    {/* Toggle between Hamburger and Cross icons */}
                    <div className="block cursor-pointer z-[1001]" onClick={toggleSidebar}>
                        {isSidebarOpen ? <ImCross className="text-[30px] text-white transition-transform duration-300s" /> : <CiMenuBurger className="text-[30px] text-white transition-transform duration-300" />}
                    </div>
                    <a href='../../../public/cv' className='hidden md:block'>
                        <button className="inline-flex items-center bg-[#ffc857] border-0 py-1 px-2 focus:outline-none hover:bg-[#e56b6f] rounded text-base mt-4 md:mt-0 text-black duration-150">
                            Download CV
                            <FaDownload className='text-medium ml-1.5 bg-[#ffb703]' />

                        </button>
                    </a>
                </div>
            </header>
        </div>
    )
}
export default Navbar
