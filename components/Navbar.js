import React from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { resume } from "../constants";

export const Navbar = ({ onMode = () => { }, darkMode }) => {
    return (
        <div className="">
            <nav className='py-5 mb-6 flex justify-between mx-5 xl:mx-48'>
                <ul className='flex items-center' >
                    <li onClick={() => onMode()} className="bg-white dark:bg-zinc-700 rounded-md px-4 py-2">{darkMode === true ?
                        <BsSun className='cursor-pointer text-2xl' />
                        :
                        <BsFillMoonFill className='cursor-pointer text-2xl' />}
                    </li>
                    <li className='bg-cyan-500 text-white px-4 py-2 rounded-md ml-8'>
                        <a
                            href={resume}
                            alt="resume"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;