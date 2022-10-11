import React, { useState } from "react";
import SkillsList from "./SkillsList";
import { techStack } from "../../constants";

const Skills = (props) => {
    return (
        <div className="max-w-screen-lg">
            <h3 className="text-center text-sm sm:text-md md:text-2xl font-bold p-2">
                Skills
            </h3>
            <SkillsList items={techStack.main} />
        </div>
    );
};

export default Skills;