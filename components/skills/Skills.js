import React, { useState } from "react";
import SkillsList from "./SkillsList";
import { techStack } from "../../constants";

const Skills = (props) => {
    return (
        <div className='flex justify-center bg-white dark:bg-zinc-700'>
            <div className="2xl:min-w-[50%] p-3 md:p-20">
                <h3 className="text-center text-sm sm:text-md md:text-2xl font-bold mb-2 dark:text-slate-300">
                    Skills
                </h3>
                <SkillsList items={techStack.main} />
            </div>
        </div>
    );
};

export default Skills;