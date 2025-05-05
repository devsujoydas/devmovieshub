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
        <div className="md:mx-40 mx-5 md:py-20 py-10">
            <div className="flex justify-between items-center md:flex-row flex-col gap-5 ">
                <div className="space-y-6">
                    <h1 className="md:text-4xl text-3xl">Choose the plan that's right for you</h1>
                    <p className="text-zinc-400 md:text-lg font-light">Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                </div>
                <div className=" bg-[#0F0F0F] lg:p-2 rounded-sm md:rounded-md border border-zinc-600">
                    <ul className="flex justify-center items-center  md:gap-1 md:text-lg">
                        <a className="hover:text-[#FF014F] bg-zinc-800 px-3 py-2 rounded-sm duration-500 transition-all" href="/subscriptions">Monthly</a>
                        <a className="hover:text-[#FF014F] bg-zinc-900 px-3 py-2 rounded-sm duration-500 transition-all" href="/subscriptions">Yearly</a>
                    </ul>
                </div>
            </div>

            <div className="grid mt-10  lg:grid-cols-3 gap-5 md:gap-10 md:mt-20">
                {plans.map((plan, idx) => <Plan plan={plan} key={idx} />)}
            </div>

        </div>
    )
}

export default ChooseThePlan