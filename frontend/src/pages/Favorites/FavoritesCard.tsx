import type React from "react";
import type { MovieListsType } from "../../services/tmdb/movieLists";
import { Link } from "react-router-dom";

type FavoritesCardProps = {
    sectionName: string,
    favoriteData: MovieListsType[];
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
    loading: boolean,
};

function FavoritesCard({ sectionName, favoriteData, setCurrentMovieId, loading }: FavoritesCardProps ){
    
    return(
        <>
            <section className="flex flex-col gap-2 max-w-5xl 2xl:max-w-7xl w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-medium">{sectionName}</h1>
                    {favoriteData.length !== 0 && 
                        <div className="p-2 text-xs font-medium bg-blue-400 text-white rounded">Reorder</div>
                    }
                </div>

                <div className="flex justify-center items-center bg-white rounded-md shadow">
                    {favoriteData.length !== 0 && <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-11 gap-5 xl:gap-6 p-6">
                        {loading ?
                            (Array.from({ length: 4 }).map((_, index) => {
                                return <div key={index} className="mx-auto md:mx-0 w-24 md:w-[88px] aspect-[3/4] bg-gray-300 rounded animate-pulse"></div>
                            }))
                            :
                            (favoriteData.map((movie, _) => {
                                return <Link to={'/info'} onClick={() => setCurrentMovieId(movie.id)} key={movie.id} className="mx-auto md:mx-0 w-24 md:w-[88px] aspect-[3/4]">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="h-full w-full object-cover rounded"/>
                                </Link>
                            }))
                        }
                    </div>}

                    {favoriteData.length === 0 && <div className="p-6 font-medium text-gray-700">
                        Add your favorite movies here
                    </div>}
                </div>
            </section>
        </>
    );
};

export default FavoritesCard;