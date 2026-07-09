import type { MovieListsType } from "../tmdb/movieLists";

export async function fetchMovies(){
    const res = await fetch(`http://localhost:3000/movies/`);
    const data: MovieListsType[] = await res.json();

    return data;
};

export async function fetchFavMovies(){
    const res = await fetch(`http://localhost:3000/movies/favorites/`);
    const data: MovieListsType[] = await res.json();

    return data;
};

