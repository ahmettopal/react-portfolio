import React from "react";
import Image from 'next/image';

const SkillCard = ({ name, svg }) => {
    return (
        <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150">
            <div className="text-center shadow-lg p-2 md:p-5 rounded-md dark:bg-zinc-800">
                <div className="">
                    <Image
                        src={svg}
                        width={'80%'}
                        height={'80%'}
                        alt="skils"
                    />
                </div>

                <h3 className="text-xs sm:text-sm md:text-md 2xl:text-lg font-medium dark:text-gray-400">
                    {name}
                </h3>
            </div>
        </div>
    );
};

export default SkillCard;