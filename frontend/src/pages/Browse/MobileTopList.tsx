

import type { MovieListsType } from "../../services/tmdb/movieLists";


type MobileTopListProps = {
    movieData: MovieListsType[];
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>;
};


function MobileTopList({ movieData, setCurrentMovieId }: MobileTopListProps ){

    return(
        <>
            <section className="xl:hidden flex flex-col gap-5">
                <div className="flex justify-between items-center tracking-wide">
                    <h2 className="text-lg font-medium">Top 100 Anime</h2>
                    <p className="text-xs font-medium">View All</p>
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 gap-y-5">
                    {movieData.slice(0, 10).map((movie, index) => {
                        return <div key={index} className="flex flex-col gap-2.5">
                            <div className="relative aspect-[3/4] rounded">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 flex justify-center items-center h-8 w-8 md:h-10 md:w-10 text-sm bg-red-400 text-white rounded-full">#{index + 1}</div>
                            </div>
                            <p className="text-xs md:text-sm line-clamp-2">{movie.title}</p>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default MobileTopList;