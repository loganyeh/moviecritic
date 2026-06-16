import { Link } from "react-router-dom";

import type { MovieListsType } from "../../services/tmdb/movieLists";

type CurrentMoviesProp = {
    categoryName: string,
    movieData: MovieListsType[],
};


function CurrentMovies({ categoryName, movieData }: CurrentMoviesProp ){

    return(
        <>
            <section className="flex flex-col gap-5">
                <div className="flex justify-between items-center tracking-wide">
                    <h2 className="text-lg font-medium">{categoryName}</h2>
                    <p className="text-xs font-medium">View All</p>
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 2xl:grid-cols-6 gap-4 gap-y-5 xl:gap-10 2xl:gap-12">
                    {movieData.slice(0, 5).map((movie, _) => {
                        return <div key={movie.id} className="flex flex-col gap-2.5">
                            <Link to={'/info'} className="aspect-[3/4]">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded"/>
                            </Link>
                            <p className="text-xs md:text-sm line-clamp-2">{movie.title}</p>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default CurrentMovies;