import React from "react";
import { PortfolioCard, Title } from "../components";
import { PortfolioData } from "../constants/data";

const portfolio = () => {
    return (
        <div className="dark:bg-zinc-700 w-screen">
            <Title title="Projects" />
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
