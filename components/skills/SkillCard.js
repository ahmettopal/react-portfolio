import React from "react";
import Image from 'next/image';

const SkillCard = ({ name, svg }) => {
    return (
        <div className="text-center shadow-lg p-2 md:p-5 rounded-md dark:bg-zinc-800">
            <Image
                src={svg}
                width={'80%'}
                height={'80%'}

            />
            <h3 className="text-xs sm:text-sm md:text-md 2xl:text-lg font-medium dark:text-gray-400">
                {name}
            </h3>
        </div>
    );
};

export default SkillCard;