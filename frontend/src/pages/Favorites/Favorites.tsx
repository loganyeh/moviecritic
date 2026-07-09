import FavoritesCard from "./FavoritesCard";

import { useState, useEffect } from "react";
import type { MovieListsType } from "../../services/tmdb/movieLists";
import { fetchFavMovies } from "../../services/backend/movies";

type FavoritesProps = {
    setCurrentMovieId: React.Dispatch<React.SetStateAction<number>>,
};

function Favorites({ setCurrentMovieId }: FavoritesProps ){
    const [movies, setMovies] = useState<MovieListsType[]>([]);

    useEffect(() => {
        async function getMovies(){
            const data = await fetchFavMovies();
            setMovies(data);
        };

        getMovies();
    }, []);

    return(
        <>
            <div className="flex flex-col items-center gap-10 px-6 py-10 pb-16 bg-gray-200">
                <FavoritesCard sectionName="Movies" favoriteData={movies} setCurrentMovieId={setCurrentMovieId} />
            </div>
        </>
    );
};

export default Favorites