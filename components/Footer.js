import React from "react";
import {
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";

const Footer = ({ ...props }) => {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-800">
            <footer className="flex-1 md:flex p-5 justify-between md:mx-10">
                <span className="text-start max-w-xl">
                    If you have a website or mobile app idea in mind or you need some advice about product design, feel free to contact me.
                </span>
                <div>
                    <div className="text-2xl 2xl:text-5xl flex justify-center gap-4 py-1 text-gray-600 dark:text-slate-200">
                        <a href='https://github.com/ahmettopal' target="_blank"><AiFillGithub /></a>
                        <AiFillLinkedin />
                    </div>
                    <span className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Powered by{' '} Ahmet Topal
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;