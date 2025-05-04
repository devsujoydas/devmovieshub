import Categories from "../../Components/Categories/Categories"
import ChooseThePlan from "../../Components/ChooseThePlan/ChooseThePlan"
import FAQ from "../../Components/FAQ/FAQ"
import HeroHome from "../../Components/Hero/HeroHome"
import StartYourFreeTial from "../../Components/StartYourFreeTial/StartYourFreeTial"
import VariousDevices from "../../Components/VariousDevices/VariousDevices"

const Home = () => {
  return (
    <div>
      <HeroHome />
      <Categories />
      <VariousDevices />
      <FAQ />
      <ChooseThePlan />
      <StartYourFreeTial />
    </div>
  )
}

export default Home