import React from "react";
import {
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";

const Footer = ({ ...props }) => {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-800 p-8">
            <footer className="flex-1 md:flex p-5 justify-between md:mx-10">
                <div className="text-start max-w-xl dark:text-gray-400">
                    <p className=" ">
                        If you have a website or mobile app idea in mind or you need some advice about product design,
                        feel free to contact me.
                    </p>
                    <button className="mt-3 hover:bg-slate-200 rounded-md p-1">
                        <a href='https://github.com/ahmettopal/react-portfolio' target="_blank">
                            Source Code
                        </a>
                    </button>
                </div>
                <div className="text-center font-bold text-gray-400 text-sm">
                    <div className="text-2xl 2xl:text-5xl flex justify-center gap-4 py-1 text-gray-600 dark:text-slate-200">
                        <a href='https://github.com/ahmettopal' target="_blank"><AiFillGithub /></a>
                        <AiFillLinkedin />
                    </div>
                    <p>© {new Date().getFullYear()} Ahmet Topal</p>
                    <p className="hover:underline decoration-1">
                        <a href="mailto:ahmettopal9816@gmail.com">ahmettopal9816@gmail.com</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;