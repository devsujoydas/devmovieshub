import HeroMovies from "../../Components/Hero/HeroMovies"
import MustWatchMovies from "../../Components/Genres/MustWatchMovies/MustWatchMovies"
import NewReleases from "../../Components/Genres/NewReleases/NewReleases"
import OurGenres from "../../Components/Genres/OurGenres/OurGenres"
import PopularTop10Genres from "../../Components/Genres/PopularTop10Genres/PopularTop10Genres"
import StartYourFreeTial from "../../Components/StartYourFreeTial/StartYourFreeTial"
import TrendingNow from "../../Components/Genres/TrendingNow/TrendingNow"
import TrendingShowsNow from "../../Components/Shows/TrendingShowsNow/TrendingShowsNow"
import NewReleasedShows from "../../Components/Shows/NewReleasedShows/NewReleasedShows"
import MustWatchShows from "../../Components/Shows/MustWatchShows/MustWatchShows"


const Movies = () => {
    return (
        <div>
            <HeroMovies />

            <div>
                <OurGenres />
                <PopularTop10Genres />
                <TrendingNow />
                <NewReleases />
                <MustWatchMovies />
            </div>

            <div>
                <TrendingShowsNow/>
                <NewReleasedShows/>
                <MustWatchShows/>
            </div>
            
            <StartYourFreeTial />
        </div>
    )
}

export default Movies