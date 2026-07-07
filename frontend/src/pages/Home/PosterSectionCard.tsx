import { Link } from "react-router-dom";
import type { MovieListsType } from "../../services/tmdb/movieLists";

type PosterSectionCardProps = {
    sectionHeader: string,
    data: MovieListsType[],
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};

function PosterSectionCard({ sectionHeader, data, setCurrentMovieId }: PosterSectionCardProps ){

    return(
        <>
            <section className="hidden xl:flex flex-col">
                <h1 className="px-4 py-2 text-sm">{sectionHeader}</h1>
                
                <div className="flex justify-around py-4 px-3 bg-white shadow">
                    {data.slice(0, 4).map((movie, index) => {
                        return <Link to={"/info"} onClick={() => setCurrentMovieId(movie.id)} key={index} className="w-[84px] aspect-[3/4] bg-blue-300 rounded">
                            <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie.title} className="h-full w-full object-cover rounded" />
                        </Link>
                    })}
                </div>
            </section>
        </>
    );
};

export default PosterSectionCard;