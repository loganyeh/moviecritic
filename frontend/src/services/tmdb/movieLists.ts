 // SHARED TYPES
export type MovieListsType = {
    _id?: string,
    id: number,
    title: string,
    backdrop_path: string,
    poster_path: string,
    createdAt?: string,
    updatedAt?: string,
};

export type MovieListsApi = {
    results: MovieListsType[],
};

// NOW PLAYING
export async function fetchNowPlaying(){
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=e780da3000fb7047435f589c967c29d6');
    const data: MovieListsApi = await response.json();
    // console.log(data.results);

    return data.results;
};

// TOP RATED
export async function fetchTopRated(){
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=e780da3000fb7047435f589c967c29d6');
    const data: MovieListsApi = await response.json();

    return data.results;
};

fetchTopRated();