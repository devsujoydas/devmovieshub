import { FaPlay } from "react-icons/fa";
import bannerImage from "/assets/movies-page-images/Banner/hero banner.jpg";

const HeroMovies = () => {
    return (
        <div className="md:h-[98vh] h-[50vh] bg-cover bg-center " style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className='bg-[#050101cc]  w-full h-[98vh] flex  justify-end items-center flex-col'>
                

                <div className="text-center space-y-4 mb-10">
                    <h1 className="text-5xl">The Best Streaming Experience</h1>

                    <p className="text-secondary">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With <br /> StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. <br /> You can also create your own watchlists, so you can easily find the content you want to watch.</p>

                    <div className="flex justify-center items-center">
                        <button className="bg-[#E50000] px-6 py-4 cursor-pointer hover:bg-transparent border border-transparent hover:border-[#E50000] active:scale-95 transition-all duration-500 rounded-xl flex items-center justify-center gap-2"><FaPlay />Start Watching Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroMovies