import React from 'react'

const Title = ({ title = "" }) => {
    return (
        <div className="text-center font-bold">
            <p className="text-2xl md:text-4xl 2xl:text-7xl py-2 text-gray-900 dark:text-gray-400">{title}</p>
        </div>
    )
}

export default Title