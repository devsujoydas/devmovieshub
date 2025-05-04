/* eslint-disable no-unused-vars */
import React from 'react'
import { IoMdArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const Categorie = ({ categorie }) => {

    const { image, title, categorieURL } = categorie;
    return (
        <div className="border border-zinc-800 bg-[#38383863] w-fit md:p-8 p-5 rounded-xl md:space-y-4 space-y-2">
            <div>
                {/* <a href={`/${categorieURL}`} className=''> */}
                <Link to={"/movies"}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <div className="flex justify-between items-center">
                <h1>{title}</h1>
                <Link to={"/movies"} className='active:scale-95 transition-all'>
                    <IoMdArrowForward className='text-3xl footer-link' />
                </Link>
            </div>
        </div>
    )
}

export default Categorie