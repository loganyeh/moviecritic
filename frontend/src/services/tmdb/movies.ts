import type { MovieListsType } from "./movieLists";

export async function fetchDetails(currentMovieId: number){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${currentMovieId}?language=en-US&api_key=e780da3000fb7047435f589c967c29d6`);
    const data: MovieListsType = await response.json();
    // console.log(data);

    return data;
};

export type CreditsType = {
    id: number, 
    known_for_department: string,
    name: string,
    profile_path: string,
    character: string,
};

export type CreditsApiType = {
    cast: CreditsType[],
    crew: CreditsType[],
};

export async function fetchCredits(currentMovieId: number){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${currentMovieId}/credits?language=en-US&api_key=e780da3000fb7047435f589c967c29d6`);
    const data: CreditsApiType = await response.json();
    // console.log(data.cast.slice(0, 6));

    return data;
};

export type RecommendationsType = {
    id: number,
    title: string,
    poster_path: string,
    media_type: string,
};

type RecommendationsApiType = {
    results: RecommendationsType[];
};

export async function fetchRecommendations(currentMovieId: number){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${currentMovieId}/recommendations?language=en-US&page=1&api_key=e780da3000fb7047435f589c967c29d6`)
    const data: RecommendationsApiType = await response.json();

    return data.results;
};

