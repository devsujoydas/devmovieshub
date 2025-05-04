import { RiSmartphoneFill } from "react-icons/ri";

const VariousDevices = () => {
    const devices = [
        {
            phone: "Smartphones",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        },
        {
            phone: "Tablet",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        },
        {
            phone: "Smart TV",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        },
        {
            phone: "Laptops",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        },
        {
            phone: "Gaming Consoles",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        },
        {
            phone: "VR Headsets",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        },
    ]

    return (
        <div className="md:mx-40 md:py-20 mx-5 py-10">
            <div className="space-y-5">
                <h1 className="md:text-4xl text-3xl ">We Provide you streaming experience across various devices.</h1>
                <p className=" text-zinc-400 md:text-lg font-light" >With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of <br /> devices, ensuring that you never miss a moment of entertainment.</p>
            </div>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                {
                    devices.map((device) => (
                        <div className="border border-zinc-700 rounded-xl bg-[#0c0c0c] md:p-12 p-5 space-y-4 md:space-y-7 hover:scale-105 transition-all cursor-pointer">

                            <div className="flex items-center gap-3">
                                <RiSmartphoneFill className="text-[#FF014F] bg-[#252525] md:text-6xl text-5xl rounded-md md:p-2 p-1"/>
                                <h1 className="md:text-2xl text-xl">{device.phone}</h1>
                            </div>
                            <p className="text-zinc-400 md:text-lg font-light">{device.description}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default VariousDevices