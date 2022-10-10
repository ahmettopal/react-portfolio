import React from "react";
import Image from 'next/image';
import {
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";

const Greetings = () => {
    return (
        <div>
            <div className='flex items-center justify-center flex-col-reverse md:flex-row'>
                <div className='text-center p-10'>
                    <h2 className="text-4xl md:text-5xl 2xl:text-7xl py-2">Ahmet Topal</h2>
                    <h3 className="text-xl md:text-3xl 2xl:text-4xl py-2">Full Stack Developer</h3>
                    <p className="text-md 2xl:text-lg py-5 leading-8 text-gray-1000">Hello Im Full stack Developer</p>
                </div>
                <div className="rounded-full w-40 h-40 relative overflow-hidden md:h-56 md:w-56 2xl:h-72 2xl:w-72 bg-slate-600">
                    <Image src="https://picsum.photos/200" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className="text-5xl 2xl:text-7xl flex justify-center gap-16 py-3 2xl:py-10 text-gray-600">
                <AiFillLinkedin />
                <a href='https://github.com/ahmettopal' target="_blank"><AiFillGithub /></a>
            </div>
        </div>
    );
};

export default Greetings;