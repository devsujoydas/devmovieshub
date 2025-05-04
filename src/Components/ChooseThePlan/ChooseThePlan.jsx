import Nav from "../Header/Nav"
import Plan from "./Plan"

const ChooseThePlan = () => {

    const plans = [
        {
            title: "Basic Plan",
            description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
            price: "9.99",
        },
        {
            title: "Standard Plan",
            description: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
            price: "12.99",
        },
        {
            title: "Premium Plan",
            description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
            price: "14.99",
        },
    ]
    return (
        <div className="md:mx-40 mx-5">
            <div className="flex justify-between items-center ">
                <div className="space-y-6">
                    <h1 className="text-4xl ">Choose the plan that's right for you</h1>
                    <p className="text-[#ffffffad]">Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                </div>
                <div className="hidden md:block bg-[#0F0F0F] lg:p-2 rounded-md border border-zinc-600">
                    <ul className="flex md:flex-row flex-col justify-center md:items-center flex-wrap md:gap-1 gap-5 md:text-lg">
                        <a className="hover:text-[#FF014F] bg-zinc-800 px-3 py-2 rounded-sm duration-500 transition-all" href="#">Monthly</a>
                        <a className="hover:text-[#FF014F] px-3 py-2 rounded-md duration-500 transition-all" href="#">Yearly</a>
                    </ul>
                </div>
            </div>


            <div className="grid grid-cols-3 gap-10 md:mt-20">
                {plans.map((plan, idx) => <Plan plan={plan} key={idx} />)}
            </div>

        </div>
    )
}

export default ChooseThePlan