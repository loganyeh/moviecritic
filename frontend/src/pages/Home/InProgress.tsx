import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import type { MovieListsType } from "../../services/tmdb/movieLists";

type InProgressProps = {
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};

function InProgress({ setCurrentMovieId }: InProgressProps ){
    const [inProgress, setInProgress] = useState<MovieListsType[]>([]);

    useEffect(() => {
        async function getList(){
            const response = await fetch(`http://localhost:3000/list/status/watching`);
            const data: MovieListsType[] = await response.json();

            setInProgress(data);
        };

        getList();
    }, []);

    return(
        <>
            <section className="">
                <h1 className="px-4 py-2 text-sm">In Progress</h1>

                <div className="flex gap-5 xl:p-5 xl:bg-white overflow-x-scroll">
                    {inProgress.slice(0, 6).map((movie, index) => {
                        return <Link to={'/info'} onClick={() => setCurrentMovieId(movie.id)} key={index} className="xl:border-0 flex max-w-68 w-full xl:w-fit bg-white xl:bg-none shadow rounded shrink-0">
                            <div className="w-22 aspect-[3/4] bg-blue-300 rounded-l xl:rounded shrink-0">
                                <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                            </div>

                            <div className="xl:hidden flex flex-col justify-between p-3 min-w-0 w-full">
                                <p className="text-sm font-light line-clamp-2">{movie.title}</p>
                                <p className="text-xs font-light">Progress: 9/12 +</p>
                            </div>
                        </Link>
                    })}
                </div>
            </section>
        </>
    );
};

export default InProgress;