import DesktopHeader from "../../components/DesktopHeader";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";

import BrowseDropdown from "./BrowseDropdown";
import DesktopSearch from "./DesktopSearch";
import DesktopTopList from "./DesktopTopList";
import MobileSearch from "./MobileSearch";
import MobileTopList from "./MobileTopList";
import CurrentMovies from "./CurrentMovies";

import { useState, useEffect } from "react";

import { fetchNowPlaying, fetchTopRated } from "../../services/tmdb/movieLists";
import { fetchMovie } from "../../services/tmdb/search";
import type { MovieListsType } from "../../services/tmdb/movieLists";
import SearchQuery from "./SearchQuery";

type BrowseProps = {
    currentMovieId: number, 
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};

import { fetchDetails } from "../../services/tmdb/movies";

function Browse({ currentMovieId, setCurrentMovieId }: BrowseProps ){
    const [search, setSearch] = useState<MovieListsType[]>([]);
    const [query, setQuery] = useState("");
    const [trendingNow, setTrendingNow] = useState<MovieListsType[]>([]);
    const [topRated, setTopRated] = useState<MovieListsType[]>([]);

    useEffect(() => {
        async function getNowPlaying(){
            const data = await fetchNowPlaying();
            setTrendingNow(data);
        };

        async function getTopRated(){
            const data = await fetchTopRated();
            setTopRated(data);
        };

        getNowPlaying();
        getTopRated();
    }, []);

    useEffect(() => {
        async function getMovie(query: string){
            const data: MovieListsType[] = await fetchMovie(query);
            setSearch(data);
        };

        getMovie(query);
    }, [query]);

    return(
        <>
            <DesktopHeader />

            {/* Page Container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col gap-6 xl:gap-14 2xl:gap-10 p-3 pt-4 pb-10 lg:px-5 xl:p-0 xl:py-12 max-w-5xl 2xl:max-w-7xl w-full">
                    <BrowseDropdown />

                    <MobileSearch setQuery={setQuery} />
                    <DesktopSearch setQuery={setQuery} setCurrentMovieId={setCurrentMovieId} />

                    {!query && <div className="flex flex-col gap-12">
                        <CurrentMovies categoryName="TRENDING NOW" movieData={trendingNow} setCurrentMovieId={setCurrentMovieId} />
                        {/* <CurrentMovies categoryName="POPULAR THIS SEASON" movieData={trendingNow} setCurrentMovieId={setCurrentMovieId} /> */}
                        {/* <CurrentMovies categoryName="UPCOMING NEXT SEASON" movieData={trendingNow} setCurrentMovieId={setCurrentMovieId} /> */}
                        {/* <CurrentMovies categoryName="ALL TIME POPULAR" movieData={trendingNow} setCurrentMovieId={setCurrentMovieId} /> */}
                    </div>}

                    {!query && <MobileTopList movieData={topRated} />}
                    {!query && <DesktopTopList movieData={topRated} />}

                    {/* Movie Query Search */}
                    {query && <SearchQuery search={search} query={query} setCurrentMovieId={setCurrentMovieId} />}

                </div>
            </div>

            <FloatingNav />
            <Footer />
        </>
    )
};

export default Browse;