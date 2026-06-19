import type { MovieListsType } from "../../services/tmdb/movieLists";
import { useEffect, useState } from "react";

type WatchingStatusProps = {
    movieData: MovieListsType
};

function WatchingStatusDropdown({ movieData }: WatchingStatusProps ){
    const [checkMovies, setCheckMovies] = useState<MovieListsType[]>([]);
    const [isStatusDropdown, setIsStatusDropdown] = useState(false);
    // const [isMobileStatusDrodown, setIsMobileStatusDropdown] = useState(false);

    useEffect(() => {
        async function getMovies(){
            const response = await fetch('http://localhost:3000/favorites/movies');
            const data: MovieListsType[] = await response.json();
            setCheckMovies(data);
        };

        getMovies();
    }, []);

    const isFavorite = checkMovies.some((movie) => movie?.id === movieData?.id);
    
    async function favoriteToggle(movieData: MovieListsType){
        if(isFavorite) {
            await fetch(`http://localhost:3000/favorites/movies/${movieData.id}`, {
                method: "DELETE", 
            });

            setCheckMovies((prev) => {
                return prev.filter((movie) => movie.id !== movieData.id);
            });
        } else {
            await fetch('http://localhost:3000/favorites/movies', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(movieData)
            });
            // console.log(`Added ${movieData.title} to your favorite movies`);
            setCheckMovies((prev) => [...prev, movieData]);
        };
    };

    async function addMovieToList(status: string){
        await fetch('http://localhost:3000/list/status', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...movieData,
                status: status,
            }),
        });
    };

    return(
        <>
            <section className="md:max-w-[275px] md:w-fit">
                <div className="relative flex justify-end md:items-end md:gap-5 md:h-52 lg:mb-5">
                    {/* <div className="md:absolute absolute -top-27 md:-top-32 left-0 h-36 md:h-auto w-25 md:w-52 md:aspect-[3/4] bg-red-300 rounded"></div> */}
                    <img src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`} alt="" className="md:absolute absolute -top-27 md:-top-32 left-0 h-36 md:h-auto w-25 md:w-52 md:aspect-[3/4] object-cover rounded"/>

                    <div className="flex gap-4 md:w-52">
                        <div className="relative flex justify-center items-center md:flex-1 md:px-0 bg-blue-400 text-white rounded">
                            <div onClick={() => setIsStatusDropdown((prev) => !prev)} className="flex h-full w-full">
                                <p className="flex flex-1 justify-center items-center px-[32px] md:p-0 h-full rounded-l">Watching</p>
                                <div className="flex items-center h-full px-2 bg-blue-300 rounded-r">
                                    <i className='bx bx-chevron-down text-xl' ></i>
                                </div>
                            </div>

                            {/* Dropdown Status Options */}
                            {isStatusDropdown && <div className="hidden border border-gray-300 absolute -bottom-30 right-0 md:flex gap-2 flex-col justify-start items-center p-2.5 w-5/6 md:w-full text-sm font-light bg-white text-gray-700 rounded shadow-2xl">
                                <p onClick={() => addMovieToList("Watching")}>Set as Watching</p>
                                <p>Set as Planning</p>
                                <p className="border-t border-gray-300 pt-2">Open List Editor</p>
                            </div>}

                            {/* Mobile Status Dropdown Doc */}
                            {isStatusDropdown && <div className="md:hidden fixed bottom-0 right-0 w-full">
                                {/* Exit Dropdown */}
                                <button onClick={() => setIsStatusDropdown(false)} className="absolute top-4 right-4">
                                    <i className='bx bx-x text-2xl' ></i>
                                </button>

                                {/* Status Dropdown Header and Title */}
                                <div className="flex gap-6 justify-between items-end px-[32px] pb-4 aspect-[4/2] bg-red-300">
                                    <div className="relative flex justify-center items-end w-26">
                                        <div className="absolute bottom-0 left-0 h-28 w-full bg-gray-300 rounded">
                                            <img src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`} alt={movieData.title} className="rounded" />
                                        </div>
                                        {/* <div className="w-24 aspect-[3/4] bg-blue-300"></div> */}
                                    </div>
                                    
                                    <div className="flex flex-1 justify-between items-center">
                                        <p>{movieData.title}</p>

                                        <div className="flex gap-4">
                                            <div className="flex items-center">
                                                <i className='bx bxs-heart text-xl'></i>
                                            </div>
                                            <button className="px-4 py-2 text-xs bg-blue-400 text-white rounded">Save</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="aspect-video bg-cover bg-contain" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieData?.poster_path})`}}></div> */}

                                <div className="h-137 flex gap-6 flex-col px-[32px] py-[72px] bg-white text-black">
                                    
                                    {/* Status */}
                                    <div className="flex gap-1 flex-col">
                                        <h2 className="text-sm text-gray-500">Status</h2>
                                        
                                        <button className="flex justify-between px-3 py-2 bg-gray-200 rounded">
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

                                        <button className="relative flex gap-3 px-3 py-2 bg-gray-200 rounded">
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

                                </div>




                            </div>}
                        </div>
                        {/* <div className="flex justify-center items-center md:flex-1 px-12 md:px-0 bg-blue-400 text-white rounded">Watching</div> */}
                        {/* <div className="flex justify-center items-center bg-red-600 rounded"> */}
                        <div onClick={() => favoriteToggle(movieData)} className="flex justify-center items-center bg-red-600 rounded">
                            <i className={`bx bxs-heart p-2 aspect-square text-xl ${isFavorite ? "text-red-300" : "text-white"}`} ></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WatchingStatusDropdown;