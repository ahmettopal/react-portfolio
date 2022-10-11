import React from "react";
import SkillCard from "./SkillCard";

const SkillsList = ({ items }) => {
    return (
        <div className="justify-center gap-2 md:gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {items.map((item, index) => {
                return <SkillCard key={index} {...item} />;
            })}
        </div>
    );
};

export default SkillsList;