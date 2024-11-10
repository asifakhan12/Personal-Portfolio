import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";




const Footer = () => {
    return (
        <div>
            <footer className="text-white body-font bg-[#c8d6e5]">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 text-2xl">Asifa Khan</span>
                    </a>
                    <p className="mt-2 text-sm text-[#341f97]">
                    Certified Cloud Applied Generative AI Engineer.
                    </p>
                </div>
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-[#59253A]">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © 2020 copyright
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500">
                        <FaFacebook className='text-3xl mr-4 text-[#fa983a] hover:text-[#fad390]'/>
                        </a>
                        <a className="ml-3 text-gray-500 ">
                        <IoLogoLinkedin className='text-3xl mr-4 text-[#fa983a] hover:text-[#fad390]' />

                        </a>
                        <a className="ml-3 text-gray-500">
                        <FaSquareInstagram className='text-3xl mr-4 text-[#fa983a] hover:text-[#fad390] ' />

                        </a>
                        <a className="ml-3 text-gray-500">
                        <MdEmail className='text-3xl mr-4 text-[#fa983a] hover:text-[#fad390]'/>

                        </a>
                    </span>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer