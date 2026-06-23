import { useState, useEffect } from "react";
import type { MovieListsType } from "../../../services/tmdb/movieLists";

type StatusProps = {
    currentStatus: string
    setCurrentStatus: React.Dispatch<React.SetStateAction<string>>,
    info: MovieListsType
};


function Status({ currentStatus, setCurrentStatus, info }: StatusProps ){
    const [checkMovies, setCheckMovies] = useState<MovieListsType[]>([]);
    const [statusBtn, setStatusBtn] = useState(false);
    const statusOptions =  [
        "Watching", "Plan to watch", "Completed", 
        "Rewatching", "Paused", "Dropped"
    ];
    
    // GET all WATCHING movies
    useEffect(() => {
        async function getIsWatching(){
            const res = await fetch(`http://localhost:3000/movies/watching`);
            const data: MovieListsType[] = await res.json();

            setCheckMovies(data);
        };

        getIsWatching();
    }, []);

    const currentMovie = checkMovies.find((movie) => movie.id === info?.id);
    const isWatching = currentMovie?.isWatching ?? false;

    // toggle watching 
    async function toggleWatching(id: number){
        const res = await fetch(`http://localhost:3000/movies/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...info,
                isWatching: !currentMovie?.isWatching,
            })
        });

        const updatedMovie = await res.json();

        setCheckMovies((prev) => {
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

    // toggle button
    function toggleStatus(status: string){ 
        // console.log(status);
        if (status === "Watching") {
            toggleWatching(info?.id);
        }
        else {
            console.log("working");
        }
    };

    return(
        <>
            <div className="relative flex gap-1 flex-col">
                <h2 className="text-sm text-gray-500">Status</h2>
                
                <button onClick={() => setStatusBtn(prev => !prev)}  className="flex justify-between px-3 py-2 bg-gray-200 rounded">
                    <div className="flex font-light text-gray-600">{currentStatus}</div>
                    <div className="flex items-center">
                        <i className={`bx bx-chevron-${statusBtn ? 'down' : 'up'} text-xl text-gray-400`} ></i>
                    </div>
                </button>

                {statusBtn && <div className="border border-gray-300 absolute top-full left-0 flex gap-3 flex-col mt-3 px-5 py-4 h-auto w-11/12 text-sm font-light bg-white text-gray-600 rounded shadow-xl z-20">
                    {statusOptions.map((option, index) => {
                        return <button onClick={() => {toggleStatus(option), setCurrentStatus(option); setStatusBtn(false)}} key={index} className="w-fit">
                            {option}
                        </button>
                    })}
                </div>}
            </div>
        </>
    );
};

export default Status;