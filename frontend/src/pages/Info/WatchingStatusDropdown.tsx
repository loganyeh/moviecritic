import type { MovieListsType } from "../../services/tmdb/movieLists";
import { useEffect, useState } from "react";
import StatusDropdown from "./Status/StatusDropdown";

type WatchingStatusProps = {
    movieData: MovieListsType,
    isStatusDropdown: boolean,
    setIsStatusDropdown: React.Dispatch<React.SetStateAction<boolean>>,
    isStatusForm: boolean,
    setIsStatusForm: React.Dispatch<React.SetStateAction<boolean>>,
};

function WatchingStatusDropdown({ movieData, isStatusDropdown, setIsStatusDropdown, isStatusForm, setIsStatusForm }: WatchingStatusProps ){
    const [checkMovies, setCheckMovies] = useState<MovieListsType[]>([]);
    // const [isStatusDropdown, setIsStatusDropdown] = useState(false);
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
        const res = await fetch(`http://localhost:3000/favorites/movies/${movieData?.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // ...movieData,
                    isFavorite: !movieData.isFavorite,
                }),
            });
            // console.log(`Added ${movieData.title} to your favorite movies`);

            const updatedMovie = await res.json();

            // setCheckMovies((prev) => [...prev, updatedMovie]);
            setCheckMovies((prev) => 
                prev.map((movie) => 
                    movie.id === updatedMovie.id ? updatedMovie : movie
                )
            )
        
        // if(isFavorite) {
        //     await fetch(`http://localhost:3000/favorites/movies/${movieData.id}`, {
        //         method: "DELETE", 
        //     });

        //     setCheckMovies((prev) => {
        //         return prev.filter((movie) => movie.id !== movieData.id);
        //     });
        // } else {
        //     const res = await fetch(`http://localhost:3000/favorites/movies/${movieData?.id}`, {
        //         method: "PATCH",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             ...movieData,
        //             isFavorite: !isFavorite,
        //         }),
        //     });
        //     // console.log(`Added ${movieData.title} to your favorite movies`);

        //     const updatedMovie = await res.json();

        //     setCheckMovies((prev) => [...prev, updatedMovie]);
        // };
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
                        <div className="relative flex justify-center items-center md:flex-1 px-4 md:px-0 bg-blue-400 text-white rounded">
                            <div className="flex h-full w-full">
                                <p onClick={() => setIsStatusForm((prev) => !prev)} className="flex flex-1 justify-center items-center px-[32px] md:p-0 h-full rounded-l">Watching</p>
                                <div onClick={() => setIsStatusDropdown((prev) => !prev)} className="hidden md:flex items-center h-full px-2 bg-blue-300 rounded-r">
                                    <i className='bx bx-chevron-down text-xl' ></i>
                                </div>
                            </div>

                            {isStatusDropdown && <StatusDropdown />}

                        </div>
                        <div onClick={() => {favoriteToggle(movieData), console.log("favorite toggled")}} className="flex justify-center items-center bg-red-600 rounded">
                            <i className={`bx bxs-heart p-2 aspect-square text-xl ${isFavorite ? "text-red-300" : "text-white"} cursor-pointer`} ></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WatchingStatusDropdown;