import { Link } from "react-router-dom";
import type { MovieListsType } from "../../services/tmdb/movieLists";

type FavoritesCardProps = {
    title: string,
    favData: MovieListsType[];
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
    loading: boolean,
};

function FavoritesCard({ title, favData, setCurrentMovieId, loading }: FavoritesCardProps ){

    return(
        <>
            <section className="flex flex-col gap-2">
                <h1 className="px-4 text-sm font-medium">{title}</h1>

                <div className="grid grid-cols-4 2xl:grid-cols-5 p-4 gap-4 bg-white">
                    {loading ? 
                        (Array.from({ length: 4 }).map((_, index) => {
                            return <div key={index} className="h-full w-[76px] aspect-[3/4] bg-gray-300 rounded animate-pulse"></div>
                        }))
                        :
                        (favData.map((fav, index) => {
                            return <Link to={'/info'} onClick={() => setCurrentMovieId(fav.id)} key={index} className="w-[76px] aspect-[3/4] rounded">
                                <img src={`https://image.tmdb.org/t/p/w500${fav.poster_path}`} alt="" className="rounded object-cover" />
                            </Link>
                        }))
                    }

                </div>
                
            </section>
        </>
    );
};

export default FavoritesCard;