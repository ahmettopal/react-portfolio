import React from "react";
import Image from 'next/image';

const SkillCard = ({ name, svg }) => {
    return (
        <div className="text-center shadow-lg p-2 md:p-5 rounded-xl">
            <Image
                src={svg}
                width={'100%'}
                height={'100%'}
            />
            <h3 className="text-xs sm:text-sm md:text-lg font-medium ">
                {name}
            </h3>
        </div>
    );
};

export default SkillCard;