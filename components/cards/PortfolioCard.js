import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'

const PortfolioCard = ({ image, title = "", description = "", webLink = "" }) => {
    return (
        <div className="flex flex-col p-4 gap-4 md:flex-row max-w-xl md:max-w-6xl my-3 bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="rounded-t-lg w-full md:w-3/5 h-44 rounded-lg object-cover" src={image} alt="" />
            <div className="flex flex-col justify-between leading-normal">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
                <div className="text-lg" >
                    <a href={webLink} target="_blank" rel="noopener noreferrer"><AiOutlineLink /></a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard