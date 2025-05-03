import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-[#000000] md:px-40 pt-10 text-secondary'>
            <div className='grid md:grid-cols-6 grid-cols-2 md:gap-0 gap-10 md:px-0 px-5  md:pt-20 pt-5 md:pb-10 pb-5'>

                <div className=''>
                    <h1 className='md:text-xl text-lg md:mb-5 mb-2 text-primary'>Home</h1>
                    <div className='grid  md:space-y-3 space-y-2'>
                        <Link className='footer-link' to={"/"}>Categories</Link>
                        <Link className='footer-link' to={"/"}>Devices</Link>
                        <Link className='footer-link' to={"/"}>Pricing</Link>
                        <Link className='footer-link' to={"/"}>FAQ</Link>
                    </div>
                </div>

                <div className=''>
                    <h1 className='md:text-xl text-lg md:mb-5 mb-2 text-primary'>Movies</h1>
                    <div className='grid  md:space-y-3 space-y-2'>
                        <Link className='footer-link' to={"/"}>Gernes</Link>
                        <Link className='footer-link' to={"/"}>Trending</Link>
                        <Link className='footer-link' to={"/"}>New Release</Link>
                        <Link className='footer-link' to={"/"}>Popular</Link>
                    </div>
                </div>

                <div className=''>
                    <h1 className='md:text-xl text-lg md:mb-5 mb-2 text-primary'>Shows</h1>
                    <div className='grid  md:space-y-3 space-y-2'>
                        <Link className='footer-link' to={"/"}>Gernes</Link>
                        <Link className='footer-link' to={"/"}>Trending</Link>
                        <Link className='footer-link' to={"/"}>New Release</Link>
                        <Link className='footer-link' to={"/"}>Popular</Link>
                    </div>
                </div>

                <div className=''>
                    <h1 className='md:text-xl text-lg md:mb-5 mb-2 text-primary'>Support</h1>
                    <div className='grid  md:space-y-3 space-y-2'>
                        <Link className='footer-link' to={"/"}>Contact Us</Link>

                    </div>
                </div>

                <div className=''>
                    <h1 className='md:text-xl text-lg md:mb-5 mb-2 text-primary'>Subscription</h1>
                    <div className='grid  md:space-y-3 space-y-2'>
                        <Link className='footer-link' to={"/"}>Plans</Link>
                        <Link className='footer-link' to={"/"}>Features</Link>
                    </div>
                </div>

                <div className=''>
                    <h1 className='md:text-xl text-lg md:mb-5 mb-2 text-primary'>Connect With Us</h1>
                    <div className='flex  items-center gap-4 text-xl text-primary '>
                        <button className='p-3 bg-zinc-800 hover:bg-zinc-600 cursor-pointer rounded-md footer-link'><a href="/"><FaFacebook /></a></button>
                        <button className='p-3 bg-zinc-800 hover:bg-zinc-600 cursor-pointer rounded-md footer-link'><a href="/"><FaYoutube /></a></button>
                        <button className='p-3 bg-zinc-800 hover:bg-zinc-600 cursor-pointer rounded-md footer-link'><a href="/"><FaLinkedin /></a></button>
                    </div>
                </div>




            </div>

            <hr />

            <div className='flex justify-between md:flex-row flex-col gap-2 items-center py-10'>
                <h1>@2025 <a className='footer-link' href="https://devsujoydas.vercel.app">devsujoydas</a>. All Rights Reserved</h1>
                <div className='flex items-center gap-3'>
                    <a href='/' className='footer-link'>Terms of Use</a>
                    <a href='/' className='footer-link border-x border-gray-500 px-2'>Privacy Policy</a>
                    <a href='/' className='footer-link'>Cookie Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer