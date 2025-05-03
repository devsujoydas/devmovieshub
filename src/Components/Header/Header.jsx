
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import Nav from "./Nav";

const Header = () => {
  const [humbarger, setHumbarger] = useState(1)

  return (
    <header className="fixed w-full bg-[#0a030394] z-10 top-0 shadow shadow-[#2e2c2c] font-montserrat ">

      <div className="text-[#B4BECC] lg:mx-40 flex flex-col lg:flex-row lg:gap-10 gap-5 justify-between md:items-center  md:py-3 py-3">

        {/* Nav Logo & Humbarger Menu Close  */}
        <div className="flex justify-between items-center  md:px-0 px-5">
          <div className="relative overflow-hidden">
            <a href="/" className=''>
              <img className='' src="/assets/Logo.png" alt="" />
            </a>
          </div>

          <div onClick={() => setHumbarger(!humbarger)} className="md:hidden block text-4xl text-secondary shadow-2xl">
            <LuMenu />
          </div>
        </div>

        {/* nav for large device */}
        <div className="hidden md:block bg-[#0F0F0F] lg:p-2 rounded-md">
          <Nav />
        </div>


        <div className="text-3xl hidden md:flex items-center justify-center gap-5  text-white">
          <div className="flex items-center gap-5 ">
            <button className=" cursor-pointer active:scale-95 transition-all"><IoSearch /></button>
            <button className=" cursor-pointer active:scale-95 transition-all"><FaRegBell /></button>
          </div>

          <div className="cursor-pointer active:scale-95 transition-all ">
            <img className="md:w-10 rounded-full " src="/public/default.jpg" alt="" />
          </div>
        </div>

        {/* nav for small device */}
        <div className={humbarger ? 'lg:hidden fixed z-20 top-0 -left-150 w-full h-screen grid grid-cols-5 opacity-0 duration-700 transition-all' : 'lg:hidden opacity-100 fixed z-20 top-0 left-0 w-full h-screen grid grid-cols-5 duration-700 transition-all'} >
          <div className=" col-span-4 px-8 bg-[#15171a] space-y-10">
            <div className="flex justify-between items-center py-5 ">
              <div className="relative overflow-hidden">
                <a href="/" className=''>
                  <img className='' src="/assets/Logo.png" alt="" />
                </a>
              </div>
              <div onClick={() => setHumbarger(!humbarger)} className="md:hidden block text-4xl">
                <IoClose className="text-secondary shadow-2xl shadow-gray-200 bg-[#2e333a] rounded-full p-1" />
              </div>
            </div>
            <div>
              <p className="leading-7 font-poppins text-lg text-primary ">Explore the web development portfolio and blog of Mahmoud Nabhan. Discover projects, skills, and insights into modern web technologies.</p>
            </div>
            <hr className="text-gray-700 my-5" />
            <div onClick={() => setHumbarger(!humbarger)} className="flex flex-col gap-5">
              <Nav />
            </div>
            <hr className="text-gray-700 my-5" />


          </div>
          <div onClick={() => setHumbarger(!humbarger)} className=" col-span-1 bg-[#000000b6]"></div>
        </div>

      </div>

    </header >
  )
}

export default Header