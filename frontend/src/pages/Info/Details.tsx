import type { MovieListsType } from "../../services/tmdb/movieLists";

type DetailsProps = {
    info: MovieListsType;
};

function Details({ info }: DetailsProps ){
    const movieDetails = [
        {category: "Title", detail: `${ info?.title ?? "TBA" }`},
        {category: "Format", detail: "Movie"},
        {category: "Movie Duration", detail: `${info?.runtime || 60} mins`},
        {category: "Status", detail: "Released"},
        {category: "Release Date", detail: `${ info?.release_date || "TBA"}`},
        {category: "Average Score", detail: `${ `${Math.floor(info?.vote_average * 10)}%` ?? "%"}`},
        {category: "Popularity", detail: `${ info?.popularity.toLocaleString("de-DE") ?? "250637"}`},
        {category: "Favorites", detail: "27075"},
        {category: "Studios", detail: `${ info?.production_companies?.[0].name}`},
        {category: "Genres", detail: [`${ info?.genres?.[0].name }`]},
    ];
    
    return(
        <>
            <section className="bg-white rounded shadow">
                <div className="flex md:flex-col gap-5 p-5 text-sm overflow-x-scroll">
                    {movieDetails.map((category, index) => {
                        return <div key={index} className="shrink-0">
                            <p className="text-gray-500">{category.category}</p>
                            <p className="text-gray-600">{category.detail}</p>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Details;