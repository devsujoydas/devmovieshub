import { FaArrowLeft } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";


const TrendingShowsNow = () => {
  return (
    <div className="md:mx-40 mx-5 py-10 lg:py-20 space-y-14">
      {/* component header  */}
      <div className=" w-full flex md:flex-row flex-col items-center justify-between">
        <h1 className="md:text-4xl text-3xl font-semibold">Trending Shows Now</h1>
        <div className="space-x-6 bg-[#000000] p-2">
          <button className="categories-btn"><FaArrowLeft /></button>
          <button className="categories-btn"><IoMdArrowForward /></button>
        </div>
      </div>
    </div>
  )
}

export default TrendingShowsNow