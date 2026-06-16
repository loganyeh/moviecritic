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

function Browse(){
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
                    <DesktopSearch setQuery={setQuery} />

                    {!query && <div className="flex flex-col gap-12">
                        <CurrentMovies categoryName="TRENDING NOW" movieData={trendingNow} />
                        <CurrentMovies categoryName="POPULAR THIS SEASON" movieData={trendingNow} />
                        <CurrentMovies categoryName="UPCOMING NEXT SEASON" movieData={trendingNow} />
                        <CurrentMovies categoryName="ALL TIME POPULAR" movieData={trendingNow} />
                    </div>}

                    {!query && <MobileTopList movieData={topRated} />}
                    {!query && <DesktopTopList movieData={topRated} />}

                    {/* Movie Query Search */}
                    {query && <SearchQuery search={search} query={query} />}

                </div>
            </div>

            <FloatingNav />
            <Footer />
        </>
    )
};

export default Browse;