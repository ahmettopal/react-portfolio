import React from 'react'

const PortfolioCard = () => {
    return (
        <div className="flex flex-col md:flex-row items-center max-w-xl md:max-w-6xl my-3 bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-80 md:rounded-none md:rounded-l-lg" src="https://picsum.photos/450/350" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Titledsadsddsdsddsfdfsdfdf</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order</p>
            </div>
        </div>
    )
}

export default PortfolioCard