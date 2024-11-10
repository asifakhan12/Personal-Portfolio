import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import MyPic from '../../../public/photos/dp.jpg'
import Highlighter from "react-highlight-words";

const About = () => {
    return (
        <div id="about">
            <section className="text-gray-600 body-font bg-[#59253A]">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                            className="object-cover object-center w-[300px] h-[300px] rounded-3xl"
                            alt="image"
                            src={MyPic} width={200} height={200}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#ffc857] ">
                            About Me
                        </h1>
                        <p className="mb-8 leading-relaxed text-white">
                            <Highlighter
                                highlightClassName="YourHighlightClass"
                                searchWords={[ "Full-Stack Developer"]}
                                autoEscape={true}
                                textToHighlight="Hey there! I’m Asifa Khan, Software developer who believes in the magic of code... A seasoned Software Developer with a profound belief in the transformative power of code. Over the course of my 1-year technical journey, I have cultivated expertise in both front-end and back-end development, positioning myself as a versatile Full-Stack Developer."
                            />
                        </p>
                        <p className="mb-8 leading-relaxed text-white">In my journey to become a Certified Cloud Applied Generative AI Engineer, I am gaining extensive expertise in deploying and overseeing generative AI models on cloud platforms.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About