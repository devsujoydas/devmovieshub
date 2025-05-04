import React from 'react'

const Plan = ({ plan }) => {
    const { title, description, price } = plan;
    return (
        <div className="bg-[#242424] p-14 rounded-md space-y-6">
            <h1 className="text-2xl">{title}</h1>
            <p className="text-zinc-400">{description}</p>
            <h1 className="text-4xl">${price} <span className="text-lg text-zinc-400">/month</span></h1>

            <div className="flex  items-center gap-5">
                <button className=" px-7 py-4 rounded-md bg-[#131313] cursor-pointer hover:bg-[#444444] active:scale-95 transition-all">Start Free Trial</button>
                <button className=" px-7 py-4 rounded-md bg-[#ff0101] cursor-pointer hover:bg-[#ff5555] active:scale-95 transition-all">Choose Plan</button>
            </div>
        </div>
    )
}

export default Plan