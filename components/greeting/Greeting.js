import React from "react";
import Image from 'next/image';
import {
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";
import { BsMouse } from "react-icons/bs";

const Greetings = () => {
    return (
        <div className="md:mt-20 2xl:mt-28">
            <div className='flex items-center justify-center flex-col-reverse md:flex-row md:space-x-15 lg:space-x-28'>
                <div className='text-start p-8'>
                    <p className="text-2xl md:text-6xl 2xl:text-9xl py-2 text-gray-900 dark:text-teal-100 font-sourceCodePro">Ahmet Topal</p>
                    <p className="text-xl md:text-4xl 2xl:text-7xl py-2 text-gray-900 dark:text-cyan-50">- Full Stack Developer</p>
                    <p className="text-md 2xl:text-5xl md:py-5 max-w-sm 2xl:max-w-3xl leading-8 text-gray-900 dark:text-cyan-50">
                        &#60; Hello this is Ahmet. I am working as a full stack web and mobile developer.
                        Below you can find the technologies I use &#47;&#62;
                    </p>
                </div>
                <div className="relative overflow-hidden rounded-full w-40 h-40 md:h-56 md:w-56 2xl:h-96 2xl:w-96">
                    <Image src="https://picsum.photos/200" layout="fill" objectFit="cover" alt="greeting" />
                </div>
            </div>
            <div className="flex justify-center text-4xl 2xl:text-7xl gap-16 md:py-10 2xl:py-36 text-gray-600 dark:text-slate-200">
                <a href='https://github.com/ahmettopal' target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                <a href='https://www.linkedin.com/in/ahmetopal' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            </div>
            <div className="flex justify-center p-10 dark:text-slate-200">
                <BsMouse size={25} className="animate-bounce" />
            </div>
        </div>
    );
};

export default Greetings;