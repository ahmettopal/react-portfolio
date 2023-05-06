import React from "react";
import NextLink from "next/link";
import { SocialMediaCard } from ".";

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
                        <FooterItem href={"/"} text="Home" />
                        <FooterItem href={"/contact"} text="Contact" />
                        <FooterItem href='https://github.com/ahmettopal/react-portfolio' text="Source Code" />
                    </div>
                </div>
                <div className="text-center font-bold text-gray-400 text-sm mt-5 md:mt-0">
                    <div className="text-2xl 2xl:text-5xl flex justify-center gap-4 py-1 text-gray-600 dark:text-slate-200">
                        <SocialMediaCard />
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

const FooterItem = ({ href = "", text = "" }) => {
    return (
        <button className="mt-3 hover:bg-slate-200 rounded-md">
            <NextLink href={href}>
                {text}
            </NextLink>
        </button>
    )
}