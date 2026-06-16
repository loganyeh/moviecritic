

export type NowPlayingType = {
    id: number,
    title: string,
    backdrop_path: string,
    poster_path: string,
};

type NowPlayingApi = {
    results: NowPlayingType[],
};

export async function fetchNowPlaying(){
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=e780da3000fb7047435f589c967c29d6');
    const data: NowPlayingApi = await response.json();
    // console.log(data.results.slice(0, 5));

    return data.results;
};

fetchNowPlaying();