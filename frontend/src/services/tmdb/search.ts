import type { MovieListsApi } from "./movieLists";

export async function fetchMovie(query: string){
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=e780da3000fb7047435f589c967c29d6`)
    const data: MovieListsApi = await response.json();

    return data.results;
}