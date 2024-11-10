import React from 'react'
import Image from 'next/image'
import Link from "next/link"

const Project = () => {
    return (
        <div id="project">
            <section className="text-gray-400 bg-[#59253A] body-font">
                <div className="container px-5 py-24 mx-auto">
                <h2 className="title-font text-center sm:text-4xl text-3xl mb-5 font-medium text-[#219ebc]">
                            MY PROJECTS
                        </h2>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
                        <div className="shadow-xl shadow-stone-300 mb-10 text-center overflow-hidden">
                            <div className="overflow-hidden">
                                <Image src={require('../../../public/photos/Yellow.png')} alt="pic" className=" w-[300px] h-[300px] mx-auto rounded-lg hover:scale-125" />
                            </div>
                            <h1 className="py-2 text-[#ffc857] font-bold">Calculator</h1>
                            <button className="py-1 px-2 rounded-lg text-white mb-1 bg-[#e56b6f]">Explore Here</button>
                        </div>
                        <div className="shadow-xl shadow-stone-300 mb-10 text-center overflow-hidden">
                            <div className="overflow-hidden">
                                <Image src={require('../../../public/photos/todo list project.png')} alt="pic" className=" w-[300px] h-[300px] mx-auto rounded-lg hover:scale-125" />
                            </div>
                            <h1 className="py-2 text-[#ffc857] font-bold">To-Do App</h1>
                            <button className="py-1 px-2 rounded-lg text-white mb-1 bg-[#e56b6f]">explore here</button>
                        </div>
                        <div className="shadow-xl shadow-stone-300 mb-10 text-center overflow-hidden">
                            <div className="overflow-hidden">
                                <Image src={require('../../../public/photos/Facebook clone.png')} alt="pic" className=" w-[300px] h-[300px] mx-auto rounded-lg hover:scale-125" />
                            </div>
                            <h1 className="py-2 text-[#ffc857] font-bold">facebook Clone</h1>
                            <button className="py-1 px-2 bg-[#e56b6f] rounded-lg text-white">explore here</button>
                        </div>
                        <div className="shadow-xl shadow-stone-300 mb-10 text-center overflow-hidden">
                            <div className="overflow-hidden">
                                <Image src={require('../../../public/photos/node projects.png')} alt="pic" className=" w-[300px] h-[300px] mx-auto rounded-lg hover:scale-125" />
                            </div>
                            <h1 className="py-2 text-[#ffc857] font-bold">Node Projects</h1>
                            <button className="py-1 px-2 bg-[#e56b6f] rounded-lg text-white">explore here</button>
                        </div>
                        <div className="shadow-xl shadow-stone-300 mb-10 text-center overflow-hidden">
                            <div className="overflow-hidden">
                                <Image src={require('../../../public/photos/cooking website.png')} alt="pic" className=" w-[300px] h-[300px] mx-auto rounded-lg hover:scale-125" />
                            </div>
                            <h1 className="py-2 text-[#ffc857] font-bold">Cooking Website</h1>
                            <button className="py-1 px-2 bg-[#e56b6f] rounded-lg text-white mb-1">explore here</button>
                        </div>
                        <div className="shadow-xl shadow-stone-300 mb-10 text-center overflow-hidden">
                            <div className="overflow-hidden">
                                <Image src={require('../../../public/photos/quiz app.png')} alt="pic" className=" w-[300px] h-[300px] mx-auto rounded-lg hover:scale-125" />
                            </div>
                            <h1 className="py-2 text-[#ffc857] font-bold">Quiz App</h1>
                            <button className="py-1 px-2 bg-[#e56b6f] rounded-lg text-white mb-1">explore here</button>
                        </div>
                        <div className="shadow-xl shadow-stone-300 mb-10 text-center overflow-hidden">
                            <div className="overflow-hidden">
                                <Image src={require('../../../public/photos/Yellow.png')} alt="pic" className=" w-[300px] h-[300px] rounded-lg mx-auto hover:scale-125" />
                            </div>
                            <h1 className="py-2 text-[#ffc857] font-bold">picture</h1>
                            <button className="py-1 px-2 bg-[#e56b6f] rounded-lg text-white mb-1">explore here</button>
                        </div>
                        <div className="shadow-xl shadow-stone-300 mb-10 text-center overflow-hidden">
                            <div className="overflow-hidden">
                                <Image src={require('../../../public/photos/Yellow.png')} alt="pic" className="mx-auto w-[300px] h-[300px] rounded-lg hover:scale-125" />
                            </div>
                            <h1 className="py-2 text-[#ffc857] font-bold">picture</h1>
                            <button className="py-1 px-2 bg-[#e56b6f] rounded-lg text-white mb-1">explore here</button>
                        </div>
                    </div>
                </div>

            </section >

        </div >
    )
}

export default Project