import React from "react";
import SkillCard from "./SkillCard";

const SkillsList = ({ items }) => {
    return (
        <div className="content-center gap-1 md:gap-2 grid 2xl:gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {items.map((item, index) => {
                return <SkillCard key={index} {...item} />;
            })}
        </div>
    );
};

export default SkillsList;