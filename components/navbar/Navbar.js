import React, { useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavComponent } from "..";

export const Navbar = ({ onMode = () => { }, darkMode }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="flex-1 py-5 mb-6 mx-5 xl:mx-48">
            <div className="flex justify-between md:justify-start">
                <div
                    onClick={() => onMode()}
                    className="bg-white dark:bg-zinc-700 rounded-md px-3 py-2 shadow-md"
                >
                    {darkMode ? (
                        <BsSun className="cursor-pointer text-2xl text-white" />
                    ) : (
                        <BsFillMoonFill className="cursor-pointer text-2xl text-black" />
                    )}
                </div>
                <div
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="bg-white dark:bg-zinc-700 rounded-md px-3 py-2 shadow-md md:hidden self-end"
                >
                    {navbarOpen ? (
                        <AiOutlineClose className="cursor-pointer text-2xl text-black dark:text-white" />
                    ) : (
                        <AiOutlineMenu className="cursor-pointer text-2xl text-black dark:text-white" />
                    )}
                </div>
                <div className="hidden md:flex">
                    <NavComponent />
                </div>
            </div>
            {navbarOpen ? (
                <div className="bg-white dark:bg-zinc-700 rounded-md md:hidden mt-3">
                    <NavComponent />
                </div>
            ) : null}
        </nav>
    );
};

export default Navbar;
