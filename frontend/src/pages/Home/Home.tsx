import { useState, useEffect } from "react";
// components
import PosterSectionCard from "./PosterSectionCard";
import RecentReviews from "./RecentReviews";
import ForumActivity from "./ForumActivity";
import InProgress from "./InProgress";
import CurrentPoll from "./CurrentPoll";
import Activity from "./Activity";

import type { MovieListsType } from "../../services/tmdb/movieLists";
import { fetchNowPlaying, fetchPopular, fetchTopRated } from "../../services/tmdb/movieLists";

type HomeProps = {
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};

function Home({ setCurrentMovieId }: HomeProps ){
    const [trending, setTrending] = useState<MovieListsType[]>([]);
    const [movies, setMovies] = useState<MovieListsType[]>([]);
    const [tv, setTV] = useState<MovieListsType[]>([]);
    
    useEffect(() => {
        async function getMovieLists(){
            const [
                trending,
                movies,
                tv
            ] = await Promise.all([
                fetchNowPlaying(),
                fetchPopular(),
                fetchTopRated(),
            ]);

            setTrending(trending);
            setMovies(movies);
            setTV(tv);
        };

        getMovieLists();
    }, []);

    return(
        <>
            {/* page container */}
            <div className="flex justify-center px-5 pt-10 py-14 bg-gray-200">
                <div className="flex flex-col xl:flex-row gap-5 xl:gap-10 max-w-5xl 2xl:max-w-7xl w-full">
                    <div className="hidden xl:flex xl:flex-1">
                        <Activity page="Home" setCurrentMovieId={setCurrentMovieId} />
                    </div>

                    <div className="flex flex-col gap-5 xl:max-w-md w-full">
                        <CurrentPoll />
                        <InProgress setCurrentMovieId={setCurrentMovieId} />
                        <ForumActivity />
                        <RecentReviews />
                        <PosterSectionCard sectionHeader="Trending Movies & Shows" data={trending} setCurrentMovieId={setCurrentMovieId} />
                        <PosterSectionCard sectionHeader="Newly Added Movies" data={movies} setCurrentMovieId={setCurrentMovieId} />
                        <PosterSectionCard sectionHeader="Newly Added Shows" data={tv} setCurrentMovieId={setCurrentMovieId} />
                    </div>

                    <div className="xl:hidden">
                        <Activity page="Home" setCurrentMovieId={setCurrentMovieId} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;