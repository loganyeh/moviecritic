import type { MovieListsType } from "../tmdb/movieLists";
const API_URL = import.meta.env.VITE_API_URL;

export async function fetchAllMovies(){
    const res = await fetch(`${API_URL}/movies/`);
    const data: MovieListsType[] = await res.json();

    return data;
};

export async function fetchFavMovies(){
    const res = await fetch(`${API_URL}/movies/favorites/`);
    const data: MovieListsType[] = await res.json();

    return data;
};

export async function fetchWatchingMovies(){
    const res = await fetch(`${API_URL}/movies/watching`);
    const data: MovieListsType[] = await res.json();

    return data;
};

export async function fetchCompletedMovies(){
    const res = await fetch(`${API_URL}/movies/completed`);
    const data = await res.json();

    return data;
};