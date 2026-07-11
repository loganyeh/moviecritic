import type { MovieListsType } from "../tmdb/movieLists";

export async function fetchAllMovies(){
    const res = await fetch(`http://localhost:3000/movies/`);
    const data: MovieListsType[] = await res.json();

    return data;
};

export async function fetchFavMovies(){
    const res = await fetch(`http://localhost:3000/movies/favorites/`);
    const data: MovieListsType[] = await res.json();

    return data;
};

export async function fetchWatchingMovies(){
    const res = await fetch(`http://localhost:3000/movies/watching`);
    const data: MovieListsType[] = await res.json();

    return data;
};

export async function fetchCompletedMovies(){
    const res = await fetch(`http://localhost:3000/movies/completed`);
    const data = await res.json();

    return data;
};