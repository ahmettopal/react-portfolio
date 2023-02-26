import React from 'react'
import { PortfolioCard } from "../components";

const portfolio = () => {
    return (
        <div className="dark:bg-zinc-700 w-screen">
            <p className='text-center text-2xl font-bold'>Projects</p>
            <div className='flex flex-col items-center p-5'>
                <PortfolioCard />
                <PortfolioCard />
            </div>
        </div>
    )
}

export default portfolio