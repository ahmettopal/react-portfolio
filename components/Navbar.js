import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Navbar = () => {
    return (
        <div className="max-w-screen-lg flex 2xl:justify-center">
            <nav className='py-10 mb-12 flex justify-between'>
                {/*<h1 className='text-xl'>Ahmet</h1>*/}
                <ul className='flex items-center' >
                    <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' /></li>
                    <li className='bg-cyan-500 text-white px-4 py-2 rounded-md ml-8'>Resume</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;