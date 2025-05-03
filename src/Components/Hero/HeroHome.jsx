import { FaPlay } from "react-icons/fa";
import bannerImage from "/assets/home-page-images/home-hero-banner.png";

const HeroHome = () => {
    return (
        <div className="h-[98vh]  bg-cover bg-center " style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className='bg-[#050101cc]  w-full  h-[98vh] flex gap-10 justify-center items-center flex-col'>
                <div className="md:mt-10 flex justify-center items-center">
                    <img className="md:w-1/2 w-1/5" src="/public/assets/home-page-images/Abstract Design.png" alt="" />
                </div>

                <div className="flex flex-col justify-center items-center md:space-y-4 space-y-4">
                    <h1 className="md:text-5xl text-2xl">The Best Streaming Experience</h1>

                    <p className="text-secondary md:text-md text-xs px-5 w-2/3 ">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. <span className="md:flex hidden">With  StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</span></p>

                    <div className="flex justify-center items-center">
                        <button className="bg-[#E50000] md:px-6 px-4 py-2 md:py-4 cursor-pointer hover:bg-transparent border border-transparent hover:border-[#E50000] active:scale-95 transition-all duration-300 rounded-xl flex items-center justify-center gap-2"><FaPlay />Start Watching Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroHome