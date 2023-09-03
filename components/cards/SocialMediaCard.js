import React from "react";
import { social_icons } from "../../constants";

const SocialMediaCard = () => {
    return (
        <>
            {social_icons.map((data, index) => {
                return (
                    <a
                        key={index}
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.icon}
                    </a>);
            })}
        </>
    );
};

export default SocialMediaCard;
