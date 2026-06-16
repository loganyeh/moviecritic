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

import { fetchNowPlaying } from "../../services/tmdb/search";
import type { NowPlayingType } from "../../services/tmdb/search";

function Browse(){
    const [isSearch, setIsSearch] = useState(false);
    const [trendingNow, setTrendingNow] = useState<NowPlayingType[]>([]);

    useEffect(() => {
        async function getNowPlaying(){
            const data = await fetchNowPlaying();
            setTrendingNow(data);
            console.log(data.slice(0, 5));
        };

        getNowPlaying();
        
    }, []);

    return(
        <>
            <DesktopHeader />

            {/* Page Container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col gap-6 2xl:gap-10 p-3 pt-4 pb-10 lg:px-5 xl:p-0 xl:py-12 max-w-5xl 2xl:max-w-7xl w-full">
                    <BrowseDropdown />
                    <MobileSearch />

                    <DesktopSearch />

                    {!isSearch && <div className="flex flex-col gap-12">
                        <CurrentMovies categoryName="TRENDING NOW" movieData={trendingNow} />
                        {/* <CurrentMovies categoryName="POPULAR THIS SEASON" /> */}
                        {/* <CurrentMovies categoryName="UPCOMING NEXT SEASON" /> */}
                        {/* <CurrentMovies categoryName="ALL TIME POPULAR" /> */}
                    </div>}

                    {!isSearch && <MobileTopList />}
                    {!isSearch && <DesktopTopList />}

                    {/* Movie Query Search */}
                    {isSearch && <section className="flex flex-col gap-[32px]">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <i className='bx bxs-purchase-tag text-2xl' ></i>
                                <div className="p-1 px-2 bg-blue-400 text-white text-sm rounded-md">Search: naruto</div>
                            </div>

                            <div className="flex items-center gap-2 text-2xl">
                                <div className="hidden md:flex gap-2 items-center">
                                    <div className="flex flex-col text-xs">
                                        <i className='bx bxs-up-arrow' ></i>
                                        <i className='bx bxs-down-arrow' ></i>
                                    </div>
                                    <p className="text-sm font-medium">Popularity</p>
                                </div>
                                <i className='bx bxs-grid' ></i>
                                <i className='bx bxs-grid-alt' ></i>
                                <div className="hidden md:flex">
                                    <i className='bx bx-menu' ></i>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-3.5 md:gap-5 xl:gap-6 2xl:gap-10 grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-5 2xl:grid-cols-6">
                            {Array.from({length: 9}).map((_, index) => {
                                return <div key={index} className="">
                                    <div className="aspect-[3/4] bg-blue-300 rounded-md"></div>
                                    <p className="p-2 text-sm font-semibold">Naruto</p>
                                </div>
                            })}
                        </div>
                    </section>}

                </div>
            </div>

            <FloatingNav />
            <Footer />
        </>
    )
};

export default Browse;