import FilterType from "./FilterType";
import type { MovieListsType } from "../../services/tmdb/movieLists";
import { Link } from "react-router-dom";

type WatchingStatusProps = {
    sectionName: string,
    watchData: MovieListsType[],
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};


function WatchingStatusList({ sectionName, watchData, setCurrentMovieId }: WatchingStatusProps ){

    return(
        <>
            <section className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <h1 className="px-4 text-xl font-normal text-gray-600">{sectionName}</h1>
                    <div className={`${sectionName === "Watching" ? "md:hidden" : "hidden"}`}>
                        <FilterType />
                    </div>
                </div>

                <div className="flex flex-col gap-8 p-5 bg-white rounded shadow">
                    <div className="flex justify-between font-medium text-gray-600">
                        <p className="md:px-6">Title</p>
                        <p className="md:hidden">Score</p>
                        <p className="md:hidden">Progress</p>
                        <p className="md:hidden">Type</p>
                        <div className="hidden md:flex md:justify-between md:gap-12 lg:gap-16 2xl:gap-24">
                            <p>Score</p>
                            <p>Progress</p>
                            <p>Type</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {watchData.map((movie, index) => {
                            return <div key={index} className="flex items-start md:justify-between md:items-center gap-4">
                                <Link to={'/info'} onClick={() => setCurrentMovieId(movie.id)} className="flex items-center gap-4 max-w-[190px] md:w-full">
                                    <div className="w-12 aspect-square shrink-0 bg-gray-300 rounded">
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="h-full w-full text-xs object-cover rounded" />
                                    </div>
                                    <p className="hidden flex-1 md:block break-words min-w-0 font-medium text-gray-600">{movie.title}</p>
                                </Link>

                                <div className="md:hidden flex flex-col gap-3 w-full text-gray-500">
                                    <p className="font-medium text-gray-600">Blue Box</p>
                                    <div className="flex justify-between text-sm font-light">
                                        <p>Score: 10</p>
                                        <p>Progress: 25</p>
                                    </div>
                                </div>

                                <div className="hidden md:flex gap-16 lg:gap-24 2xl:gap-32 text-sm text-gray-500">
                                    <p>10</p>
                                    <p>25</p>
                                    <p>ONA</p>
                                </div>

                            </div>
                        })}
                    </div>

                </div>

            </section>
        </>
    );
};

export default WatchingStatusList;