import { Link } from "react-router-dom";
import DesktopHeader from "../../components/DesktopHeader";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";

import Activity from "../Home/Activity";
import ProfileBanner from "./ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import ActivityHistory from "./ActivityHistory";
import GenreOverview from "./GenreOverview";
import FavoritesCard from "./FavoritesCard";
import WatchedStats from "./WatchedStats";

import { useState, useEffect } from "react";
import type { MovieListsType } from "../../services/tmdb/movieLists";

type OverviewProps = {
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};

function Overview({ setCurrentMovieId }: OverviewProps ){
    const [favMovies, setFavMovies] = useState<MovieListsType[]>([]);

    useEffect(() => {
        async function getFavorites(){
            const response = await fetch(`http://localhost:3000/movies/favorites`);
            const data: MovieListsType[] = await response.json();

            setFavMovies(data);
        };

        getFavorites();
    }, []);

    return(
        <>
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            {/* page container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 px-5 md:px-[32px] py-[32px] pb-16 xl:px-0 max-w-5xl 2xl:max-w-7xl w-full">
                    <div className="hidden xl:flex flex-col gap-5 max-w-sm 2xl:max-w-lg w-full">
                        <ActivityHistory />
                        <GenreOverview />
                        <FavoritesCard title="Movies" favData={favMovies} setCurrentMovieId={setCurrentMovieId} />
                        {/* <FavoritesCard title="Characters" favData={favMovies} setCurrentMovieId={setCurrentMovieId} /> */}
                    </div>

                    <div className="flex flex-col xl:flex-1 gap-6">
                        <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 gap-6">
                            <WatchedStats />
                            <WatchedStats />
                        </div>
                        <Activity page="Overview" setCurrentMovieId={setCurrentMovieId}  />
                    </div>
                </div>
            </div>
        
            <FloatingNav />
            <Footer />
        </>
    );
};

export default Overview;