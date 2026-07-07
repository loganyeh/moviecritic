import BrowseDropdown from "./BrowseDropdown";
import DesktopSearch from "./DesktopSearch";
import DesktopTopList from "./DesktopTopList";
import MobileSearch from "./MobileSearch";
import MobileTopList from "./MobileTopList";
import CurrentMovies from "./CurrentMovies";

import { useState, useEffect } from "react";

import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming } from "../../services/tmdb/movieLists";
import { fetchMovie } from "../../services/tmdb/search";
import type { MovieListsType } from "../../services/tmdb/movieLists";
import SearchQuery from "./SearchQuery";

type BrowseProps = {
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};

function Browse({ setCurrentMovieId }: BrowseProps ){
    const currentMoviesTitles = ["TRENDING NOW", "POPULAR THIS SEASON", "UPCOMING NEXT SEASON", "ALL TIME POPULAR"];
    const [search, setSearch] = useState<MovieListsType[]>([]);
    const [query, setQuery] = useState("");
    const [trendingNow, setTrendingNow] = useState<MovieListsType[]>([]);
    const [topRated, setTopRated] = useState<MovieListsType[]>([]);
    const [popular, setPopular] = useState<MovieListsType[]>([]);
    const [upcoming, setUpcoming] = useState<MovieListsType[]>([]);

    useEffect(() => {
        async function getNowPlaying(){
            const data = await fetchNowPlaying();
            setTrendingNow(data);
        };

        async function getPopular(){
            const data = await fetchPopular();
            setPopular(data);
        };
        
        async function getTopRated(){
            const data = await fetchTopRated();
            setTopRated(data);
        };

        async function getUpcoming(){
            const data = await fetchPopular();
            setUpcoming(data);
        };

        getNowPlaying();
        getPopular();
        getTopRated();
        getUpcoming();
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
            {/* Page Container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col gap-6 xl:gap-14 2xl:gap-10 p-3 pt-4 pb-10 lg:px-5 xl:p-0 xl:py-12 max-w-5xl 2xl:max-w-7xl w-full">
                    <BrowseDropdown />

                    <MobileSearch setQuery={setQuery} />
                    <DesktopSearch setQuery={setQuery} />

                    {!query && <div className="flex flex-col gap-12">
                        <CurrentMovies categoryName={"TRENDING NOW"} movieData={trendingNow} setCurrentMovieId={setCurrentMovieId} />
                        <CurrentMovies categoryName={"POPULAR THIS SEASON"} movieData={popular.slice(5, 14)} setCurrentMovieId={setCurrentMovieId} />
                        <CurrentMovies categoryName={"UPCOMING NEXT SEASON"} movieData={upcoming.slice(15, 22)} setCurrentMovieId={setCurrentMovieId} />
                        <CurrentMovies categoryName={"ALL TIME POPULAR"} movieData={topRated} setCurrentMovieId={setCurrentMovieId} />
                    </div>}

                    {!query && <MobileTopList movieData={topRated} setCurrentMovieId={setCurrentMovieId} />}
                    {!query && <DesktopTopList movieData={topRated} setCurrentMovieId={setCurrentMovieId} />}

                    {/* Movie Query Search */}
                    {query && <SearchQuery search={search} query={query} setCurrentMovieId={setCurrentMovieId} />}

                </div>
            </div>
        </>
    )
};

export default Browse;