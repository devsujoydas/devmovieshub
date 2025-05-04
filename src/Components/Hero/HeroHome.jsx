import { FaPlay } from "react-icons/fa";
import bannerImage from "/assets/home-page-images/home-hero-banner.png"; 

const HeroHome = () => {
    return (
        <div className="h-[98vh]  bg-cover bg-center " style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className='bg-[#050101bb]  w-full  h-[98vh] flex gap-5 justify-center items-center flex-col md:px-0 px-5'>

                <div className="md:mt-10 relative flex justify-center items-center">
                    <img className="lg:w-2/3 w-2/5" src="/assets/home-page-images/Abstract Design.png" alt="" />
                </div>

                <div className="flex flex-col justify-center gap-5 items-center md:space-y-5 ">

                    <h1 className="md:text-6xl font-semibold text-3xl text-center">The Best Streaming Experience</h1>

                    <p className="text-zinc-400 text-center text-lg  md:w-2/3 ">
                    StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. <span className="md:flex hidden">With  StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</span>
                    </p>

                    <div className="flex justify-center items-center">
                        <button className="px-4 py-3 md:px-7 md:py-4 rounded-sm md:rounded-md bg-[#ff0101] cursor-pointer hover:bg-[#ff5555] active:scale-95 transition-all flex items-center gap-2"><FaPlay />Start Watching Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroHome