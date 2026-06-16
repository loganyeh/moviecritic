import type { MovieListsApi, MovieListsType } from "./movieLists";

export async function fetchDetails(currentMovieId: number){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${currentMovieId}?language=en-US&api_key=e780da3000fb7047435f589c967c29d6`);
    const data = await response.json();
    // console.log(data)

    return data;
};