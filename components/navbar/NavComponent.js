import React from "react";
import NextLink from "next/link";
import { resume } from "../../constants";

const NavComponent = () => {
    return (
        <div className="md:flex">
            <NavItem to="/" text="Home" />
            <NavItem to="/portfolio" text="Portfolio" />
            <NavItem to="/contact" text="Contact" />
            <div className="bg-white dark:bg-zinc-700 text-black dark:text-white px-2 py-2 rounded-md md:ml-3 shadow-md">
                <a href={resume} alt="resume" target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
        </div>
    );
};

export default NavComponent

const NavItem = ({ to, text }) => {
    return (
        <div className="bg-white dark:bg-zinc-700 text-black dark:text-white px-2 py-2 rounded-md md:ml-3 shadow-md">
            <NextLink href={to}>{text}</NextLink>
        </div>
    );
};