import { FaArrowLeft } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaClock } from "react-icons/fa6";
import { PiCardsThreeBold } from "react-icons/pi";

const NewReleasedShows = () => {
  return (
    <div className="md:mx-40 mx-5 py-10 lg:py-20 space-y-14">
    {/* component header  */}
    <div className=" w-full flex md:flex-row flex-col items-center justify-between">
      <h1 className="md:text-4xl text-3xl font-semibold">New Released Shows</h1>
      <div className="space-x-6 bg-[#000000] p-2">
        <button className="categories-btn"><FaArrowLeft /></button>
        <button className="categories-btn"><IoMdArrowForward /></button>
      </div>
    </div>


    <div className="grid grid-cols-5">
        <div className="border border-zinc-800 bg-[#38383863] md:p-5 pb-2 p-3 rounded-xl md:space-y-4 ">
          <div>
            <Link to={"/movies"}>
              <img className='w-full' src={"/public/assets/movies-page-images/Shows/New Released Shows/Image-1.png"} alt="" />
            </Link>
          </div>
          <div className="flex justify-between items-center pt-1 text-zinc-400">
            <h1 className="flex items-center gap-1 bg-zinc-900 px-2 py-1 rounded-full"><FaClock />8h 20min</h1>
            <h1 className="flex items-center gap-1 bg-zinc-900 px-2 py-1 rounded-full"><PiCardsThreeBold />4 Season</h1>
          </div>
        </div>
      </div>
  </div>
  )
}

export default NewReleasedShows