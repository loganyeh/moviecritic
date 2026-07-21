import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";
import type { MovieListsType } from "../../services/tmdb/movieLists";
import { fetchAllMovies } from "../../services/backend/movies";

type ActivityProps = {
    page: "Home" | "Overview",
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};

function Activity({ page, setCurrentMovieId }: ActivityProps ){
    const [loading, setLoading] = useState(true);
    const [activity, setActivity] = useState<MovieListsType[]>([]);

    useEffect(() => {
        async function getIsWatching(){
            try {
                const data = await fetchAllMovies();
                setActivity(data);
            } finally {
                setLoading(false);
            };
        };

        getIsWatching();
    }, []);

    return(
        <>
            <section className="flex flex-col gap-5 w-full">
                {/* Activity Title */}
                <div className="flex justify-between items-center">
                    <h1 className={`${page === "Overview" ? "font-medium" : ""} px-4 text-sm`}>Activity</h1>

                    {page === "Home" && <div className="flex gap-2 items-center">
                        <i className='bx bxs-filter-alt text-base'></i>

                        <div className="flex text-xs font-light bg-white rounded">
                            <p className="px-3 py-1.5 font-medium">Following</p>
                            <p className="px-3 py-1.5">Global</p>
                        </div>
                    </div>}

                    {page === "Overview" && <div className="flex items-center">
                        <p className="text-xs">Filter</p>
                        <i className='bx bx-chevron-down text-xl' ></i>
                    </div>}
                </div>
                
                {/* Status Input */}
                <div className="px-4 py-2 text-sm bg-white text-gray-400 rounded">
                    Write a status...
                </div>

                <div className={`${page === "Overview" ? "2xl:grid 2xl:grid-cols-2" : ""} flex flex-col gap-5`}>
                    {loading ?
                        (Array.from({ length: 3}).map((_, index) => {
                            return <div key={index} className="flex rounded shadow">
                                <div className={`${page === "Overview" ? "w-14" : "w-24 md:w-[88px] 2xl:w-20"} aspect-[3/4] bg-gray-300 rounded-l animate-pulse`}></div>

                                <div className="flex justify-between gap-6 p-3.5 w-full bg-white rounded">
                                    <div className="flex flex-col gap-2 2xl:gap-1 justify-between text-xs">
                                        <p className={`${page === "Overview" ? "hidden" : ""} bg-black h-4 w-14 animate-pulse`}></p>
                                        <p className={`${page === "Overview" ? "flex items-center h-full text-sm" : "text-xs"} bg-black h-8 md:h-4 w-32 md:w-60 animate-pulse`}></p>
                                        <div className={`${page === "Overview" ? "hidden" : ""} w-10 aspect-square bg-gray-300 rounded`}></div>
                                    </div>
                                </div>
                            </div>
                        }))
                        :
                        (activity.map((movie, index) => {
                            return <div key={index} className="flex rounded shadow">
                                <Link to={"/info"} onClick={() => setCurrentMovieId(movie.id)} className={`${page === "Overview" ? "w-14" : "w-24 md:w-[88px] 2xl:w-20"} aspect-[3/4] bg-blue-300 rounded-l`}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="h-full w-full object-cover rounded-l" />
                                </Link>

                                <div className="flex justify-between gap-6 p-3.5 w-full bg-white rounded">
                                    <div className="flex flex-col gap-2 2xl:gap-1 justify-between text-xs">
                                        <p className={`${page === "Overview" ? "hidden" : ""} text-blue-300`}>Hanni</p>
                                        <p className={`${page === "Overview" ? "flex items-center h-full text-sm" : "text-xs"}`}>Plans to watch {movie.title}</p>
                                        <div className={`${page === "Overview" ? "hidden" : ""} w-10 aspect-square bg-blue-300 rounded`}>
                                            <img src="https://i.pinimg.com/736x/0c/8a/1f/0c8a1f42df3622a03adeded0e08c08a6.jpg" alt="" className="rounded" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between items-end text-[11px] shrink-0">
                                        {movie.updatedAt && <time className="font-semibold">{formatDistanceToNow(new Date(movie.updatedAt), { addSuffix: true })}</time>}

                                        <div className="flex gap-2 text-sm">
                                            <i className='bx bxs-chat' ></i>
                                            <i className='bx bxs-heart' ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }))
                        }
                </div>

                {activity.length !== 0 && <button className="p-3.5 text-sm font-semibold bg-white rounded shadow">Load More</button>}
            </section>
        </>
    );
};

export default Activity;