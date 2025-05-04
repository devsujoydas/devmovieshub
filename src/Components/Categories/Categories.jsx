import { FaArrowLeft } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import ActionImg from "../../../public/assets/movies-page-images/Our Genres/Container (1).png"
import AdventureImg from "../../../public/assets/movies-page-images/Our Genres/Container (2).png"
import ComedyImg from "../../../public/assets/movies-page-images/Our Genres/Container (3).png"
import DramaImg from "../../../public/assets/movies-page-images/Our Genres/Container (4).png"
import HorrorImg from "../../../public/assets/movies-page-images/Our Genres/Container (5).png"
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
        <div className="md:mx-40 mx-5">
            <div className="h-80 w-full flex items-center justify-between   bg-cover">
                <div className="space-y-6">
                    <h1 className="text-4xl ">Explore our wide variety of categories</h1>
                    <p className="text-[#ffffffad]">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>
                <div className="space-x-6">
                    <button className="categories-btn"><FaArrowLeft /></button>
                    <button className="categories-btn"><IoMdArrowForward /></button>
                </div>
            </div>


            <div className="grid grid-cols-5 gap-5 mt-20">
                {categories.map((categorie, idx) => <Categorie categorie={categorie} key={idx} />)}
            </div>
        </div>
    )
}

export default Categories