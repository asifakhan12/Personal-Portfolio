"use client"
import React from 'react';
import Image from 'next/image';
import image from '../../../public/photos/dp.jpg'
import Typewriter from 'typewriter-effect';
import Link from 'next/link'


const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-[#59253A]">
                <div className=" container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#ffc857]">
                            I Am 
                            <br className="hidden lg:inline-block" />
                            <Typewriter
                                options={{
                                    strings: ['Web Developer','Frontend Developer', 'Backend Developer','UI/UX'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />

                        </h1>
                        <div className='w-[100px] h-[4px] bg-[#ffc857] mb-2'></div>
                        <p className="mb-8 leading-relaxed text-white">
                        Hey there! I am Asifa Khan, Software developer who believes in the magic of code.A seasoned Software Developer with a profound belief in the transformative power of code. Over the course of my 2-year technical journey, Skilled in HTML, CSS, JavaScript,Typescript and creating engaging UI/UX.
                        </p>
                        <div className="flex justify-center">
                            <Link href={"#contact"}>
                            <button className="inline-flex text-black bg-[#fedc97] border-0 py-2 px-6 focus:outline-none hover:bg-[#ffc857] rounded text-lg">
                                Contact
                            </button>
                            </Link>
                            <Link href={"#contact"}>
                            <button className="inline-flex text-black bg-[#fedc97] border-0 py-2 px-6 focus:outline-none hover:bg-[#ffc857] rounded text-lg ml-5">
                                View CV
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-cover object-center w-[400px] h-[400px] rounded-3xl"
                            alt="image"
                            src={image} width={200} height={200}
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Hero