import React from 'react'
import { IoMdArrowForward } from "react-icons/io";


const Categorie = ({ categorie }) => {

    const { image, title, categorieURL } = categorie;
    return (
        <div className="border border-zinc-800 bg-[#38383863] w-fit p-8 rounded-xl space-y-4">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="flex justify-between items-center">
                <h1>{title}</h1>
                <a href={`/${categorieURL}`}>
                    <IoMdArrowForward className='text-3xl' />
                </a>
            </div>
        </div>
    )
}

export default Categorie