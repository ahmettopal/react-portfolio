import React, { useState } from "react";
import { PortfolioCard, Title, Modal, PortfolioModal } from "../components";
import { PortfolioData } from "../constants/data";

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState(0);

    const showModalItem = (_index) => {
        setShowModal(true);
        setId(_index);
    };

    return (
        <div className="dark:bg-zinc-700">
            <Title title="My Portfolio" />
            <div className="p-5">
                {PortfolioData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center"
                        >
                            <PortfolioCard
                                image={item?.image}
                                title={item?.title}
                                description={item?.description}
                                webLink={item?.webLink}
                                androidLink={item?.androidLink}
                                iosLink={item?.iosLink}
                                tech={item?.tech}
                                onClick={() => showModalItem(index)}
                            />
                        </div>
                    );
                })}
            </div>
            <Modal show={showModal}>
                <PortfolioModal closeModal={() => setShowModal(false)} id={id} />
            </Modal>
        </div>
    );
};

export default Portfolio;
