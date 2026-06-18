import type { MovieListsType } from "../../services/tmdb/movieLists";
import { useEffect, useState } from "react";

type WatchingStatusProps = {
    movieData: MovieListsType
};

function WatchingStatusDropdown({ movieData }: WatchingStatusProps ){
    const [checkMovies, setCheckMovies] = useState<MovieListsType[]>([]);
    const [isStatusDropdown, setIsStatusDropdown] = useState(false);

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

    return(
        <>
            <section className="md:max-w-[275px] md:w-fit">
                <div className="relative flex justify-end md:items-end md:gap-5 md:h-52 lg:mb-5">
                    {/* <div className="md:absolute absolute -top-27 md:-top-32 left-0 h-36 md:h-auto w-25 md:w-52 md:aspect-[3/4] bg-red-300 rounded"></div> */}
                    <img src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`} alt="" className="md:absolute absolute -top-27 md:-top-32 left-0 h-36 md:h-auto w-25 md:w-52 md:aspect-[3/4] object-cover rounded"/>

                    <div className="flex gap-4 md:w-52">
                        <div onClick={() => setIsStatusDropdown((prev) => !prev)} className="relative flex justify-center items-center md:flex-1 md:px-0 bg-blue-400 text-white rounded">
                            <p className="flex flex-1 justify-center items-center px-[32px] md:p-0 h-full rounded-l">Watching</p>
                            <div className="flex items-center h-full px-2 bg-blue-300 rounded-r">
                                <i className='bx bx-chevron-down text-xl' ></i>
                            </div>

                            {/* Dropdown Status Options */}
                            {isStatusDropdown && <div className="border border-gray-300 absolute -bottom-30 right-0 flex gap-2 flex-col justify-start items-center p-2.5 w-5/6 md:w-full text-sm font-light bg-white text-gray-700 rounded shadow-2xl">
                                <p>Set as Watching</p>
                                <p>Set as Planning</p>
                                <p className="border-t border-gray-300 pt-2">Open List Editor</p>
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