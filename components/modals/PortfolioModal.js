import React from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";
import { PortfolioData } from "../../constants/data";

const PortfolioModal = ({ closeModal = () => { }, id }) => {
    return (
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-700 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                    {PortfolioData[id]?.title}
                </h3>
                <button
                    className="p-1 ml-auto border-0 float-right text-black dark:text-white text-3xl leading-none outline-none focus:outline-none"
                    onClick={closeModal}
                >
                    <AiFillCloseCircle />
                </button>
            </div>
            {/*body*/}
            <div className="relative p-3 flex-auto">
                <Image
                    width={1000}
                    height={600}
                    src={PortfolioData[id]?.image}
                    objectFit="contain"
                    alt="portfolio"
                />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
        </div>
    );
};

export default PortfolioModal;
