import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Navbar = ({ onMode = () => { } }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <nav className='py-5 mb-6 flex justify-between'>
                {/*<h1 className='text-xl'>Ahmet</h1>*/}
                <ul className='flex items-center' >
                    <li><BsFillMoonStarsFill onClick={() => onMode()} className='cursor-pointer text-2xl' /></li>
                    <li className='bg-cyan-500 text-white px-4 py-2 rounded-md ml-8'>Resume</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;