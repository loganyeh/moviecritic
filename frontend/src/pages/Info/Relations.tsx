import type { RecommendationsType } from "../../services/tmdb/movies";

type RelationsProps = {
    recommendations: RecommendationsType[];
    status: string,
};



function Relations({ recommendations, status }: RelationsProps ){
    function capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    return(
        <>
            <section className="flex flex-col gap-3">
                <p className="text-sm font-medium text-gray-600">Relations</p>

                <div className="flex md:flex-col xl:grid xl:grid-cols-7 2xl:grid-cols-10 gap-6 xl:gap-0 xl:gap-y-4 overflow-x-scroll md:overflow-x-hidden">
                    {recommendations.slice(0, 6).map((movie, index) => {
                        return <div key={index} className="flex max-w-72 md:max-w-none xl:w-fit shrink-0">
                            <div className="xl:relative w-20 xl:w-24 2xl:w-20 aspect-[3/4] bg-red-300 shrink-0 rounded-l xl:rounded">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="h-full w-full object-cover rounded-l" />    
                                <div className="hidden absolute bottom-0 left-0 xl:flex justify-center items-center h-4/12 w-full text-xs font-light bg-black/50 text-white rounded-b">Summary</div>
                            </div>
                            <div className="xl:hidden flex flex-col justify-between p-3 min-w-44 md:w-full text-xs bg-white shadow rounded-r">
                                <div className="flex flex-col gap-1">
                                    <p className="text-blue-400 font-medium">Source</p>
                                    <p className="text-sm line-clamp-2">{movie.title}</p>
                                </div>

                                <p>{capitalize(movie.media_type)} * {status}</p>
                            </div>

                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Relations;