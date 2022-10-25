import React from "react";
import {
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";
import NextLink from "next/link";

const Footer = ({ ...props }) => {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-800 p-8">
            <footer className="flex-1 md:flex justify-between md:mx-20 items-center text-gray-600 font-semibold">
                <div className="text-start dark:text-gray-400">
                    <p className="max-w-xl">
                        If you have a website or mobile app idea in mind or you need some advice about product design,
                        feel free to contact me.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        <button className="mt-3 hover:bg-slate-200 rounded-md">
                            <NextLink href={"/"}>
                                Home
                            </NextLink>
                        </button>
                        <button className="mt-3 hover:bg-slate-200 rounded-md">
                            <NextLink href={"/contact"}>
                                Contact
                            </NextLink>
                        </button>
                        <button className="mt-3 hover:bg-slate-200 rounded-md">
                            <a href='https://github.com/ahmettopal/react-portfolio' target="_blank" rel="noopener noreferrer">
                                Source Code
                            </a>
                        </button>
                    </div>
                </div>
                <div className="text-center font-bold text-gray-400 text-sm">
                    <div className="text-2xl 2xl:text-5xl flex justify-center gap-4 py-1 text-gray-600 dark:text-slate-200">
                        <a href='https://github.com/ahmettopal' target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                        <a href='https://www.linkedin.com/in/ahmetopal' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                    </div>
                    <p>© {new Date().getFullYear()} Ahmet Topal</p>
                    <p className="hover:underline decoration-1">
                        <a href="mailto:ahmettopal9816@gmail.com" rel="noopener noreferrer">ahmettopal9816@gmail.com</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;