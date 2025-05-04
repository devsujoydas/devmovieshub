import bannerImage from "/assets/images/StartYourFreeTial.png";
const StartYourFreeTial = () => {
    return (
        <div className="md:mx-40 mx-5 py-10 md:py-20 ">
            <div className="md:h-80 w-full flex items-center justify-between md:flex-row flex-col md:p-20 p-10 gap-5 bg-cover" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="md:space-y-6 space-y-2">
                    <h1 className="md:text-5xl text-2xl">Start your free tial today!</h1>

                    <p className="text-zinc-400 text-sm md:text-lg font-light">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="px-4 py-3 md:px-7 md:py-4 rounded-sm md:rounded-md bg-[#ff0101] cursor-pointer hover:bg-[#ff5555] active:scale-95 transition-all">Start a Free Trail</button>
                </div>
            </div>
        </div>
    )
}

export default StartYourFreeTial