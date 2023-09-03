import React from "react";
import Image from "next/image";
import { AiOutlineLink, AiFillAndroid, AiFillApple } from "react-icons/ai";

const PortfolioCard = ({
    image,
    title = "",
    description = "",
    webLink = "",
    androidLink = "",
    iosLink = "",
    tech = [],
    onClick = () => { },
}) => {
    return (
        <div className="flex flex-col md:flex-row p-4 gap-5 md:w-10/12 min-h-80 my-3 bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col md:w-10/12 justify-between leading-normal">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </div>
                <div>
                    <div className="flex flex-col">
                        <span className="text-gray-600 dark:text-gray-400 mt-2">
                            Links:
                        </span>
                        <div className="text-lg flex gap-2 items-center">
                            {webLink ? (
                                <LinkItem
                                    url={webLink}
                                    icon={<AiOutlineLink color="gray" size={22} />}
                                />
                            ) : null}
                            {androidLink ? (
                                <LinkItem
                                    url={androidLink}
                                    icon={<AiFillAndroid color="gray" size={22} />}
                                />
                            ) : null}
                            {iosLink ? (
                                <LinkItem
                                    url={iosLink}
                                    icon={<AiFillApple color="gray" size={22} />}
                                />
                            ) : null}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-600 dark:text-gray-400 mt-2">
                            Technologies:
                        </span>
                        <div className="text-lg flex gap-2 items-center">
                            {tech?.map((data, index) => {
                                return (
                                    <Image
                                        key={index}
                                        src={data}
                                        width={"25%"}
                                        height={"25%"}
                                        alt="tech"
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex cursor-pointer md:w-5/12">
                <Image
                    width={500}
                    height={250}
                    src={image}
                    objectFit="cover"
                    alt="portfolio"
                    onClick={onClick}
                />
            </div>
        </div>
    );
};

export default PortfolioCard;

const LinkItem = ({ url = "", icon }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {icon}
        </a>
    );
};
