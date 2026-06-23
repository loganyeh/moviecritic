import DesktopHeader from "../../components/DesktopHeader";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";
import MovieBanner from "./MovieBanner";
import Details from "./Details";
import Description from "./Description";
import Relations from "./Relations";
import Characters from "./Characters";
import Staff from "./Staff";
import StatusDistribution from "./StatusDistribution";
import ScoreDistribution from "./ScoreDistribution";
import Following from "./Following";
import Recommendations from "./Recommendations";
import Threads from "./Threads";
import Streaming from "./Streaming";
import Watch from "./Watch";
import Tags from "./Tags";
import Reviews from "./Reviews";
import Trailer from "./Trailer";
import MovieTitle from "./MovieTitle";
import InfoNav from "./InfoNav";
import WatchingStatusDropdown from "./WatchingStatusDropdown";
import AllTimeRankings from "./AllTimeRankings";
import WriteAReview from "./WriteAReview";

import type { MovieListsType } from "../../services/tmdb/movieLists";
import { fetchDetails } from "../../services/tmdb/movies";
import { useState, useEffect } from "react";
import StatusForm from "./Status/StatusForm";

type InfoProps = {
    currentMovieId: number, 
};

function Info({ currentMovieId }: InfoProps ){
    const [info, setInfo] = useState<MovieListsType>();
    const [isStatusDropdown, setIsStatusDropdown] = useState(false);
    const [isStatusForm, setIsStatusForm] = useState(false);
    const [currentStatus, setCurrentStatus] = useState("Add to list");

    useEffect(() => {
        if (isStatusDropdown) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        };

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isStatusDropdown]);

    useEffect(() => {
        async function getDetails(currentMovieId: number){
            const data = await fetchDetails(currentMovieId);
            setInfo(data);
        };

        getDetails(currentMovieId);
    }, [currentMovieId]);

    return(
        <>
            <DesktopHeader />

            <div>
                <MovieBanner backdrop_path={info?.backdrop_path} />

                <div className="flex justify-center">
                    <div className="flex flex-col md:flex-row gap-[32px] p-5 md:p-[32px] md:pb-0 pb-0 xl:px-0 max-w-5xl 2xl:max-w-7xl w-full">
                        <WatchingStatusDropdown movieData={info} isStatusDropdown={isStatusDropdown} setIsStatusDropdown={setIsStatusDropdown} setIsStatusForm={setIsStatusForm} setCurrentStatus={setCurrentStatus} currentStatus={currentStatus} />

                        <div className="md:flex md:flex-col md:justify-between flex-1 md:gap-5 min-w-0">
                            <div className="md:flex md:flex-col md:gap-3">
                                <MovieTitle title={info?.title || ""} />
                                {/* Description */}
                                <p className="hidden md:block text-sm bg-white text-gray-500 break-words">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Pariatur nisi dicta modi, nihil nemo optio id, praesentium ex tempora animi 
                                </p>
                            </div>
                            <InfoNav />
                        </div>
                    </div>
                </div>

                {/* page container */}
                <div className="flex justify-center bg-gray-200">
                    <div className="flex flex-col md:flex-row gap-10 p-5 md:px-[32px] xl:px-0 py-10 pb-24 max-w-5xl 2xl:max-w-7xl w-full">
                        <div className="flex flex-col gap-10 md:gap-5 shrink-0">
                            <AllTimeRankings />
                            <Details />
                            <div className="hidden md:flex flex-col gap-10 md:gap-5">
                                <Tags />
                                <WriteAReview />
                                <Streaming />
                            </div>
                        </div>

                        <div className="flex flex-col gap-10 md:gap-[32px] lg:flex-1">

                            <div className="md:hidden">
                                <Description />
                            </div>

                            <Relations />
                            <Characters />
                            <Staff />

                            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 md:gap-[32px]">
                                <StatusDistribution />
                                <ScoreDistribution />
                            </div>

                            <div className="xl:hidden">
                                <Trailer />
                            </div>

                            <div className="hidden xl:grid grid-cols-2 gap-10 md:gap-[32px]">
                                <Trailer />
                                <Following />
                            </div>

                            <Watch />

                            <div className="border xl:hidden flex flex-col gap-10 md:gap-[32px]">
                                <Following />
                            </div>

                            <Recommendations />

                            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 md:gap-[32px]">
                                <Threads />
                                <Reviews />
                            </div>

                            <div className="md:hidden flex flex-col gap-10">
                                <Streaming />
                                <Tags />
                            </div>
                        </div>

                    </div>
                </div>

                {isStatusForm && <StatusForm info={info} setIsStatusForm={setIsStatusForm} currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} />}
            </div>

            <FloatingNav />
            <Footer />
        </>
    );
};

export default Info;