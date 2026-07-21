import Activity from "../Home/Activity";
import ActivityHistory from "./ActivityHistory";
import GenreOverview from "./GenreOverview";
import FavoritesCard from "./FavoritesCard";
import WatchedStats from "./WatchedStats";

import { useState, useEffect } from "react";
import type { MovieListsType } from "../../services/tmdb/movieLists";
import { fetchFavMovies } from "../../services/backend/movies";

type OverviewProps = {
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};

function Overview({ setCurrentMovieId }: OverviewProps ){
    const [loading, setLoading] = useState(true);
    const [favMovies, setFavMovies] = useState<MovieListsType[]>([]);

    useEffect(() => {
        async function getFavorites(){
            try {
                const data = await fetchFavMovies();
                setFavMovies(data);
            } finally {
                setLoading(false);
            };
        };

        getFavorites();
    }, []);

    return(
        <>
            {/* page container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 px-5 md:px-[32px] py-[32px] pb-16 xl:px-0 max-w-5xl 2xl:max-w-7xl w-full">
                    <div className="hidden xl:flex flex-col gap-5 max-w-sm 2xl:max-w-lg w-full">
                        <ActivityHistory />
                        <GenreOverview />
                        {favMovies.length !== 0 && <FavoritesCard title="Movies" favData={favMovies} setCurrentMovieId={setCurrentMovieId} loading={loading} />}
                        {favMovies.length !== 0 && <FavoritesCard title="Shows" favData={favMovies} setCurrentMovieId={setCurrentMovieId} loading={loading} />}
                    </div>

                    <div className="flex flex-col xl:flex-1 gap-6">
                        <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 gap-6">
                            <WatchedStats title="Total Movies" total="75" days="28.6" mean="78.2" />
                            <WatchedStats title="Total Shows" total="14" days="45" mean="85.0" />
                        </div>
                        <Activity page="Overview" setCurrentMovieId={setCurrentMovieId}  />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Overview;