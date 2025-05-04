import { FaArrowLeft } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import ActionImg from "/assets/movies-page-images/Movies/Our Genres/Container (1).png";
import AdventureImg from "/assets/movies-page-images/Movies/Our Genres/Container (2).png";
import ComedyImg from "/assets/movies-page-images/Movies/Our Genres/Container (3).png"
import DramaImg from "/assets/movies-page-images/Movies/Our Genres/Container (4).png"
import HorrorImg from "/assets/movies-page-images/Movies/Our Genres/Container (5).png"
import Categorie from "./Categorie";

const Categories = () => {

    const categories = [
        {
            image: `${ActionImg}`,
            title: "Action",
            categorieURL: "action"
        },
        {
            image: `${AdventureImg}`,
            title: "Adventure",
            categorieURL: "adventure"
        },
        {
            image: `${ComedyImg}`,
            title: "Comedy",
            categorieURL: "comedy"
        },
        {
            image: `${DramaImg}`,
            title: "Drama",
            categorieURL: "drama"
        },
        {
            image: `${HorrorImg}`,
            title: "Horror",
            categorieURL: "horror"
        },

    ]

    return (
        <div className="md:mx-40 mx-5 py-10 lg:py-20 space-y-14">
            <div className=" w-full flex md:flex-row flex-col items-center justify-between">
                <div className="space-y-5">
                    <h1 className="md:text-4xl text-3xl ">Explore our wide variety of categories</h1>
                    <p className="text-zinc-400 md:text-lg font-light">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>
                <div className="space-x-6 bg-[#000000] p-2">
                    <button className="categories-btn"><FaArrowLeft /></button>
                    <button className="categories-btn"><IoMdArrowForward /></button>
                </div>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
                {categories.map((categorie, idx) => <Categorie categorie={categorie} key={idx} />)}
            </div>
        </div>
    )
}

export default Categories