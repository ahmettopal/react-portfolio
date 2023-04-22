import React from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import NextLink from "next/link";
import { resume } from "../constants";

export const Navbar = ({ onMode = () => { }, darkMode }) => {
    return (
        <nav className='py-5 mb-6 flex justify-between mx-5 xl:mx-48'>
            <ul className='flex items-center'>
                <li onClick={() => onMode()} className="bg-white dark:bg-zinc-700 rounded-md px-3 py-2 shadow-md">
                    {darkMode === true ?
                        <BsSun className='cursor-pointer text-2xl text-white' />
                        :
                        <BsFillMoonFill className='cursor-pointer text-2xl text-black' />}
                </li>
                <NavItem to="/" text="Home" />
                <NavItem to="/portfolio" text="Portfolio" />
                <NavItem to="/contact" text="Contact" />
                <li className='bg-white dark:bg-zinc-700 text-black dark:text-white px-2 py-2 rounded-md ml-3 shadow-md'>
                    <a
                        href={resume}
                        alt="resume"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

const NavItem = ({ to, text }) => {
    return (
        <li className='bg-white dark:bg-zinc-700 text-black dark:text-white px-2 py-2 rounded-md ml-3 shadow-md'>
            <NextLink href={to}>
                {text}
            </NextLink>
        </li>
    )
}