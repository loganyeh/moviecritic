import type { MovieListsType } from "../tmdb/movieLists";

export async function fetchAllMovies(){
    const res = await fetch(`https://moviecritic-mi3f.onrender.com/movies/`);
    const data: MovieListsType[] = await res.json();

    return data;
};

export async function fetchFavMovies(){
    const res = await fetch(`https://moviecritic-mi3f.onrender.com/movies/favorites/`);
    const data: MovieListsType[] = await res.json();

    return data;
};

export async function fetchWatchingMovies(){
    const res = await fetch(`https://moviecritic-mi3f.onrender.com/movies/watching`);
    const data: MovieListsType[] = await res.json();

    return data;
};

export async function fetchCompletedMovies(){
    const res = await fetch(`https://moviecritic-mi3f.onrender.com/movies/completed`);
    const data = await res.json();

    return data;
};