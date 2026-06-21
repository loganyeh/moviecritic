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

type InfoProps = {
    currentMovieId: number, 
};

import type { MovieListsType } from "../../services/tmdb/movieLists";
import { fetchDetails } from "../../services/tmdb/movies";
import { useState, useEffect } from "react";

function Info({ currentMovieId }: InfoProps ){
    const [info, setInfo] = useState<MovieListsType>();
    const [isStatusDropdown, setIsStatusDropdown] = useState(false);
    const [isStatusForm, setIsStatusForm] = useState(false);
    const [watchingList, setWatchingList] = useState<MovieListsType[]>([]);

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
        // maybe move this function if has different dependency array 

        getDetails(currentMovieId);
    }, [currentMovieId]);
    
    useEffect(() => {
        async function getWatchListMovies(){
            const response = await fetch(`http://localhost:3000/list/status/`);
            const data: MovieListsType[] = await response.json();
            
            setWatchingList(data);
            console.log(data);
        };
        
        getWatchListMovies();
    }, []);

    // console.log(info);
    async function addToList(){
        if (!info) return "Info returned undefined";

        const res = await fetch(`http://localhost:3000/list/status/${info.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...info,
                isWatching: true,
            }),
            // body: JSON.stringify({
            //     id: info.id,
            //     title: info.title,
            //     poster_path: info.poster_path,
            //     backdrop_path: info.backdrop_path,
            //     status: "Watching",
            // }),
        });

        // favoriting and watch listing or vice verse works but unfav or unwatch listing 
        // removes the entire doc from collection
        // wip on clean up and refactor of the status dropdown and doc form
        //  refactor some routes and controller names

        const newMovie = await res.json();

        setWatchingList((prev) => [...prev, newMovie]);
    };

    async function deleteMovieFromList(id: Number){
        await fetch(`http://localhost:3000/favorites/movies/${id}`, {
            method: "DELETE",
        });

        setWatchingList(prev =>
            prev.filter(movie => movie.id !== id)
        );
    };

    return(
        <>
            <DesktopHeader />

            <div>
                <MovieBanner backdrop_path={info?.backdrop_path} />

                <div className="flex justify-center">
                    <div className="flex flex-col md:flex-row gap-[32px] p-5 md:p-[32px] md:pb-0 pb-0 xl:px-0 max-w-5xl 2xl:max-w-7xl w-full">
                        <WatchingStatusDropdown movieData={info} isStatusDropdown={isStatusDropdown} setIsStatusDropdown={setIsStatusDropdown} isStatusForm={isStatusForm} setIsStatusForm={setIsStatusForm} />

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

                {/* Mobile Status Dropdown Doc */}
                {isStatusForm && <div className="md:hidden fixed z-10 inset-0 w-full">
                    <div className="relative h-full overflow-y-scroll">
                        <div className="h-32 bg-black/50"></div>

                        {/* Exit Dropdown */}
                        <button onClick={() => setIsStatusForm(false)} className="absolute top-36 right-4">
                            <i className='bx bx-x text-2xl' ></i>
                        </button>

                        {/* Status Dropdown Header and Title */}
                        <div className="flex gap-6 justify-between items-end px-[32px] pb-4 aspect-[4/2] bg-red-300">
                            <div className="relative flex justify-center items-end w-26">
                                <div className="absolute bottom-0 left-0 h-28 w-full bg-gray-300 rounded">
                                    <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt={info.title} className="rounded" />
                                </div>
                                {/* <div className="w-24 aspect-[3/4] bg-blue-300"></div> */}
                            </div>
                            
                            <div className="flex flex-1 justify-between items-center">
                                <p>{info.title}</p>

                                <div className="flex gap-4">
                                    <div className="flex items-center">
                                        <i className='bx bxs-heart text-xl'></i>
                                    </div>
                                    <button className="px-4 py-2 text-xs bg-blue-400 text-white rounded">Save</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="aspect-video bg-cover bg-contain" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieData?.poster_path})`}}></div> */}

                        <div className="flex gap-6 flex-col px-[28px] py-[72px] bg-white text-black">
                            
                            {/* Status */}
                            <div className="flex gap-1 flex-col">
                                <h2 className="text-sm text-gray-500">Watching</h2>
                                
                                <button onClick={() => addToList()} className="flex justify-between px-3 py-2 bg-gray-200 rounded">
                                    <div className="flex font-light text-gray-600">Paused</div>
                                    <div className="flex items-center">
                                        <i className='bx bx-chevron-down text-xl text-gray-400' ></i>
                                    </div>
                                </button>
                            </div>

                            {/* Score */}
                            <div className="flex gap-1 flex-col">
                                <h2 className="text-sm text-gray-500">Score</h2>

                                <button className="relative flex justify-between px-3 py-2 bg-gray-200 rounded">
                                    <div className="flex font-light text-gray-600">0</div>
                                    <div className="absolute top-0 right-2.5 flex flex-col items-center">
                                        <i className='bx bx-chevron-up text-xl text-gray-400' ></i>
                                        <i className='bx bx-chevron-down text-xl text-gray-400' ></i>
                                    </div>
                                </button>
                            </div>

                            {/* Episode Progress */}
                            <div className="flex gap-1 flex-col">
                                <h2 className="text-sm text-gray-500">Episode Progress</h2>

                                <button className="relative flex justify-between px-3 py-2 bg-gray-200 rounded">
                                    <div className="flex font-light text-gray-600">162</div>
                                    <div className="absolute top-0 right-2.5 flex flex-col items-center">
                                        <i className='bx bx-chevron-up text-xl text-gray-400' ></i>
                                        <i className='bx bx-chevron-down text-xl text-gray-400' ></i>
                                    </div>
                                </button>
                            </div>

                            {/* Start Date */}
                            <div className="flex gap-1 flex-col max-w-9/12">
                                <h2 className="text-sm text-gray-500">Start Date</h2>

                                <button className="relative flex gap-3 px-3 py-2 bg-gray-200 rounded">
                                    <div className="flex items-center">
                                        <i className='bx bx-calendar text-gray-300'></i>
                                    </div>

                                    <div className="flex font-light text-gray-600">2025-07-01</div>
                                </button>
                            </div>

                            {/* Finish Date */}
                            <div className="flex gap-1 flex-col max-w-9/12">
                                <h2 className="text-sm text-gray-500">Finish Date</h2>

                                <button className="relative flex gap-3 px-3 py-2 h-10 bg-gray-200 rounded">
                                    <div className="flex items-center">
                                        <i className='bx bx-calendar text-gray-300'></i>
                                    </div>

                                    <div className="flex font-light text-gray-600"></div>
                                </button>
                            </div>

                            {/* Total Rewatches */}
                            <div className="flex gap-1 flex-col">
                                <h2 className="text-sm text-gray-500">Total Rewatches</h2>

                                <button className="relative flex justify-between px-3 py-2 bg-gray-200 rounded">
                                    <div className="flex font-light text-gray-600">0</div>
                                    <div className="absolute top-0 right-2.5 flex flex-col items-center">
                                        <i className='bx bx-chevron-up text-xl text-gray-400' ></i>
                                        <i className='bx bx-chevron-down text-xl text-gray-400' ></i>
                                    </div>
                                </button>
                            </div>

                            {/* Notes */}
                            <div className="flex gap-1 flex-col">
                                <h2 className="text-sm text-gray-500">Notes</h2>

                                <button className="relative flex justify-between  h-10 bg-gray-200 rounded">
                                    <input type="text" className="px-3 py-2 h-full w-full outline-none" />
                                </button>
                            </div>

                            {/* Custom Lists */}
                            <div className="flex gap-1 flex-col text-gray-500">
                                <h2 className="text-sm">Custom Lists</h2>

                                <div className="border-b border-gray-200 flex justify-center w-full">
                                    <p className="py-2 text-xs">No custom anime lists</p>
                                </div>
                            </div>

                            {/* Private Checkbox */}
                            <div className="flex gap-3 text-sm text-gray-600">
                                <input type="checkbox" />
                                <p>Private</p>
                            </div>

                            {/* Delete Button */}
                            {watchingList.some((movie) => movie.title === info?.title) && <div className="flex justify-end">
                                <button onClick={() => deleteMovieFromList(info.id)} className="px-4 py-1.5 text-sm bg-gray-200 text-gray-600 rounded">Delete</button>
                            </div>}

                        </div>
                    
                    <div className="h-14 bg-black/50"></div>

                    </div>
                </div>}

            </div>

            <FloatingNav />
            <Footer />
        </>
    );
};

export default Info;