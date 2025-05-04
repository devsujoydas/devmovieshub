import React from 'react'

const Plan = ({ plan }) => {
    const { title, description, price } = plan;
    return (
        <div className="bg-[#0000005e] md:p-14 p-5 rounded-2xl md:space-y-6 space-y-4">
            <h1 className="text-2xl">{title}</h1>
            <p className="text-zinc-400">{description}</p>
            <h1 className="md:text-4xl text-2xl">${price} <span className="md:text-lg text-sm text-zinc-400">/month</span></h1>

            <div className="flex  items-center gap-5">
                <button className="px-4 py-3 md:px-7 md:py-4 rounded-sm md:rounded-md bg-[#131313] cursor-pointer hover:bg-[#444444] active:scale-95 transition-all">Start Free Trial</button>
                <button className="px-4 py-3 md:px-7 md:py-4 rounded-sm md:rounded-md bg-[#ff0101] cursor-pointer hover:bg-[#ff5555] active:scale-95 transition-all">Choose Plan</button>
            </div>
        </div>
    )
}

export default Plan