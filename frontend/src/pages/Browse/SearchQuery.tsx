import { Link } from "react-router-dom";
import type { MovieListsType } from "../../services/tmdb/movieLists";

type SearchQueryProps = {
    search: MovieListsType[],
    query: string,
};

function SearchQuery({ search, query }: SearchQueryProps ){

    return(
        <>
            <section className="flex flex-col gap-[32px]">
                {/* Search Filters */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <i className='bx bxs-purchase-tag text-2xl' ></i>
                        <div className="p-1 px-2 bg-blue-400 text-white text-sm rounded-md">Search: {query}</div>
                    </div>

                    <div className="flex items-center gap-2 text-2xl">
                        <div className="hidden md:flex gap-2 items-center">
                            <div className="flex flex-col text-xs">
                                <i className='bx bxs-up-arrow' ></i>
                                <i className='bx bxs-down-arrow' ></i>
                            </div>
                            <p className="text-sm font-medium">Popularity</p>
                        </div>
                        <i className='bx bxs-grid' ></i>
                        <i className='bx bxs-grid-alt' ></i>
                        <div className="hidden md:flex">
                            <i className='bx bx-menu' ></i>
                        </div>
                    </div>
                </div>

                {/* Movie Posters Search Query */}
                <div className="grid gap-3.5 md:gap-5 xl:gap-6 2xl:gap-10 grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-5 2xl:grid-cols-6">
                    {search.map((movie, index) => {
                        return <div key={index}>
                            <div className="aspect-[3/4] rounded-md">
                                <Link to={'/info'}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="h-full w-full object-contain object-cover rounded-md"/>
                                </Link>
                            </div>
                            {/* <div className="aspect-[3/4] bg-blue-300 rounded-md"></div> */}
                            <p className="p-2 text-sm font-semibold">{movie.title}</p>
                        </div>
                    })}
                </div>

                {/* No Results Message */}
                {(query && search.length === 0) && <div className="flex justify-center items-start h-[660px] md:h-[1000px] lg:h-[700px] text-xl font-semibold text-gray-600 tracking-wide">
                    No Results
                </div>}
            </section>
        </>
    );
};

export default SearchQuery;