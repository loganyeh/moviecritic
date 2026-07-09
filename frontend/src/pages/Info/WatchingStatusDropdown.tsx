import type { MovieListsType } from "../../services/tmdb/movieLists";
import { useEffect, useState } from "react";
import StatusDropdown from "./StatusDropdown";

type WatchingStatusProps = {
    loading: boolean
    movieData: MovieListsType,
    isStatusDropdown: boolean,
    setIsStatusDropdown: React.Dispatch<React.SetStateAction<boolean>>,
    setIsStatusForm: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentStatus: React.Dispatch<React.SetStateAction<string>>,
    currentStatus: string,
};

function WatchingStatusDropdown({ loading, movieData, isStatusDropdown, setIsStatusDropdown, setIsStatusForm, setCurrentStatus, currentStatus }: WatchingStatusProps ){
    const [checkFavMovies, setCheckFavMovies] = useState<MovieListsType[]>([]);
    const [allMovies, setAllMovies] = useState<MovieListsType[]>([]);

    // useeffect for checking fav movies
    useEffect(() => {
        async function getFavMovies(){
            const response = await fetch('http://localhost:3000/movies/favorites');
            const data: MovieListsType[] = await response.json();
            setCheckFavMovies(data);
        };
        
        getFavMovies();
    }, []);
    // console.log(checkFavMovies);
    
    const currentFavMovie = checkFavMovies.find(
        (movie) => movie.id === movieData?.id,
    );

    const isFavorite = currentFavMovie?.isFavorite ?? false;

    // useEffect for checking all movies
    useEffect(() => {
        async function getMovies(){
            const res = await fetch(`http://localhost:3000/movies/`)
            const data: MovieListsType[] = await res.json();

            setAllMovies(data);
        }

        getMovies();
    }, []);

    const currentMovie = allMovies.find(
        (movie) => movie.id === movieData.id
    );

    useEffect(() => {
        setCurrentStatus(() => {
            if(!currentMovie) {
                return "Add to List";
            } else if(currentMovie) {
                return currentMovie.watchStatus;
            } else {
                return "Add to List";
            };
        });
    } ,[currentMovie, setCurrentStatus]);

    // PATCH REQUEST for isFavorite
    async function toggleFavorite(){
        const res = await fetch(`http://localhost:3000/movies/${movieData?.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...movieData,
                isFavorite: !isFavorite
            }),
        });

        const updatedMovie = await res.json();

        setCheckFavMovies((prev) => {
            const exists = prev.some(
                (movie) => movie.id === updatedMovie.data.id
            );
        
            if (exists) {
                return prev.map((movie) =>
                    movie.id === updatedMovie.data.id
                        ? updatedMovie.data
                        : movie
                );
            }
        
            return [...prev, updatedMovie.data];
        });
    };

    return(
        <>
            <section className="md:max-w-[275px] md:w-fit min-w-0">
                <div className="relative flex justify-end md:items-end md:gap-5 md:h-52 lg:mb-5">
                    {loading ? 
                        <div className="flex justify-center items-center md:absolute absolute -top-27 md:-top-32 left-0 h-36 md:h-auto w-25 md:w-52 md:aspect-[3/4] bg-gray-200 object-cover rounded">
                            <i className='bx bx-loader-circle text-3xl animate-spin'></i>
                        </div>
                        : 
                        <img src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`} alt="" className="md:absolute absolute -top-27 md:-top-32 left-0 h-36 md:h-auto w-25 md:w-52 md:aspect-[3/4] object-cover rounded"/>
                     }

                    <div className="flex gap-4 md:w-52">
                        <div className="relative flex justify-center items-center md:flex-1 px-4 md:px-0 bg-blue-400 text-white rounded hover:cursor-pointer">
                            <div onClick={() => setIsStatusForm((prev) => !prev)} className="flex h-full w-full">
                                <p className="flex flex-1 justify-center items-center px-[32px] md:p-0 h-full rounded-l">{currentStatus}</p>
                                <div onClick={() => setIsStatusDropdown(false)} className="hidden md:flex items-center h-full px-2 bg-blue-300 rounded-r">
                                    <i className='bx bx-chevron-down text-xl' ></i>
                                </div>
                            </div>

                            {isStatusDropdown && <StatusDropdown setCurrentStatus={setCurrentStatus} setIsStatusDropdown={setIsStatusDropdown} setIsStatusForm={setIsStatusForm} />}
                        </div>

                        <div onClick={() => toggleFavorite()} className="flex justify-center items-center bg-red-600 rounded">
                            <i className={`bx bxs-heart p-2 aspect-square text-xl ${isFavorite ? "text-red-300" : "text-white"} cursor-pointer hover:text-red-300 active:text-red-700`} ></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WatchingStatusDropdown;