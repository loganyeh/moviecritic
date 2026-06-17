import type { MovieListsType } from "../../services/tmdb/movieLists";
import { useEffect, useState } from "react";

type WatchingStatusProps = {
    movieData: MovieListsType
};


function WatchingStatus({ movieData }: WatchingStatusProps ){
    const [checkMovies, setCheckMovies] = useState<MovieListsType[]>([]);

    useEffect(() => {
        async function getMovies(){
            const response = await fetch('http://localhost:3000/favorites/movies');
            const data: MovieListsType[] = await response.json();
            setCheckMovies(data);
        };

        getMovies();
    }, []);

    const isFavorite = checkMovies.some((movie) => movie.id === movieData.id);

    async function favoriteMovie(movieData: MovieListsType){
        await fetch('http://localhost:3000/favorites/movies', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieData)
        });
        console.log(`Added ${movieData.title} to your favorite movies`);
        setCheckMovies((prev) => [...prev, movieData]);
    };

    return(
        <>
            <section className="md:max-w-[275px] md:w-fit">
                <div className="relative flex justify-end md:items-end md:gap-5 md:h-52 lg:mb-5">
                    {/* <div className="md:absolute absolute -top-27 md:-top-32 left-0 h-36 md:h-auto w-25 md:w-52 md:aspect-[3/4] bg-red-300 rounded"></div> */}
                    <img src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`} alt="" className="md:absolute absolute -top-27 md:-top-32 left-0 h-36 md:h-auto w-25 md:w-52 md:aspect-[3/4] object-cover rounded"/>

                    <div className="flex gap-4 md:w-52">
                        <div className="flex justify-center items-center md:flex-1 px-12 md:px-0 bg-blue-400 text-white rounded">Watching</div>
                        {/* <div className="flex justify-center items-center bg-red-600 rounded"> */}
                        <div onClick={() => favoriteMovie(movieData)} className="flex justify-center items-center bg-red-600 rounded">
                            <i className={`bx bxs-heart p-2 aspect-square text-xl ${isFavorite ? "text-red-300" : "text-white"}`} ></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WatchingStatus;