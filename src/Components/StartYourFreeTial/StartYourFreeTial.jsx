import bannerImage from "../../../public/assets/images/StartYourFreeTial.png";
const StartYourFreeTial = () => {
    return (
        <div className="p-40 ">
            <div className="h-80 w-full flex items-center justify-between p-20  bg-cover" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="space-y-6">
                    <h1 className="text-5xl ">Start your free tial today!</h1>
                    <p className="text-[#ffffffad]">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="bg-[#E50000] md:px-6 px-4 py-2 md:py-4 cursor-pointer hover:bg-transparent border border-transparent hover:border-[#E50000] active:scale-95 transition-all duration-300 rounded-lg flex items-center justify-center gap-2 md:text-lg text-sm">Start a Free Trail</button>
                </div>
            </div>
        </div>
    )
}

export default StartYourFreeTial