import React from "react";
import { PortfolioCard } from "../components";
import { PortfolioData } from "../constants/data";

const portfolio = () => {
    return (
        <div className="dark:bg-zinc-700 w-screen">
            <div className="text-center font-bold">
                <p className="text-xl md:text-4xl 2xl:text-7xl py-2 dark:text-cyan-50">Projects</p>
            </div>
            <div className="flex flex-col items-center p-5">
                {PortfolioData.map((item, index) => {
                    return (
                        <div key={index}>
                            <PortfolioCard
                                image={item?.image}
                                title={item?.title}
                                description={item?.description}
                                webLink={item?.webLink}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default portfolio;
