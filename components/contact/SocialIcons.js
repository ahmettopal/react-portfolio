import React from "react";
import {
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";

const SocialIcons = () => {
    return (
        <div className="text-4xl 2xl:text-7xl flex justify-center gap-16 md:py-10 2xl:py-10 text-gray-600 dark:text-slate-200">
            <a href='https://github.com/ahmettopal' target="_blank"><AiFillGithub /></a>
            <AiFillLinkedin />
        </div>
    );
};

export default SocialIcons;