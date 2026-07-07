

type PosterProps = {
    poster_path: string,
    title: string,
};


function Poster({ poster_path, title }: PosterProps ){

    return(
        <>
            <div className="relative flex justify-center items-end w-26">
                <div className="absolute bottom-0 left-0 h-28 w-full bg-gray-300 rounded">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="rounded" />
                </div>
                {/* <div className="w-24 aspect-[3/4] bg-blue-300"></div> */}
            </div>
        </>
    );
};

export default Poster;