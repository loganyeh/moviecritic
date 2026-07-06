import DesktopHeader from "../../components/DesktopHeader";
import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";
import MobileListSearch from "../AnimeList/MobileListSearch";
import WatchingStatusList from "../AnimeList/WatchingStatusList";
import FilterType from "../AnimeList/FilterType";
import TabletListSearch from "../AnimeList/TabletListSearch";
import Lists from "../AnimeList/Lists";
import Filters from "../AnimeList/Filters";
import Year from "../AnimeList/Year";
import Sort from "../AnimeList/Sort";
import ShuffleBtn from "../AnimeList/ShuffleBtn";

import { useEffect, useState } from "react";
import type { MovieListsType } from "../../services/tmdb/movieLists";

type MangaListProps = {
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};

function MangaList({ setCurrentMovieId }: MangaListProps ){
    const [watching, setWatching] = useState<MovieListsType[]>([]);
    const [completed, setCompleted] = useState<MovieListsType[]>([]);

    // GET all WATCHING movies
    useEffect(() => {
        async function getWatching(){
            const response = await fetch(`http://localhost:3000/list/status/watching`);
            const data: MovieListsType[] = await response.json();

            setWatching(data);
        };

        async function getCompleted(){
            const res = await fetch(`http://localhost:3000/list/status/completed`);
            const data: MovieListsType[] = await res.json();
    
            setCompleted(data);
        };
    
        getWatching();
        getCompleted();
    }, []);

    return(
        <>  
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            <div className="flex justify-center bg-gray-200">
                <div className="flex justify-between gap-10 p-5 pb-16 md:p-[32px] md:pb-16 xl:px-0 max-w-5xl 2xl:max-w-7xl w-full bg-gray-200">
                    <div className="hidden md:flex flex-1 flex-col items-start gap-6">
                        <TabletListSearch />
                        <Lists />
                        <Filters />
                        <Year />
                        <Sort />
                        <ShuffleBtn />
                    </div>

                    <div className="flex flex-col gap-6 max-w-[475px] lg:max-w-[725px] xl:max-w-[800px] 2xl:max-w-[1040px] w-full shrink-0">
                        <div className="md:hidden">
                            <MobileListSearch />
                        </div>

                        <div className="flex flex-col gap-10">
                            <div>
                                <div className="hidden md:flex justify-end">
                                    <FilterType />
                                </div>
                                <WatchingStatusList sectionName="Watching" watchData={watching} setCurrentMovieId={setCurrentMovieId} />
                            </div>

                            {completed.length !== 0 && <WatchingStatusList sectionName="Completed" watchData={completed} setCurrentMovieId={setCurrentMovieId} />}
                            {/* <WatchingStatusList sectionName="Paused" /> */}
                            {/* <WatchingStatusList sectionName="Dropped" /> */}
                            {/* <WatchingStatusList sectionName="Planning" /> */}
                        </div>
                    </div>
                </div>
            </div>

            <FloatingNav />
            <Footer />
        </>
    );
};

export default MangaList;