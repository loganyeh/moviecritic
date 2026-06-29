import type { RecommendationsType } from "../../services/tmdb/movies";

type RecommendationsProps = {
    recommendations: RecommendationsType[];
}


function Recommendations({ recommendations }: RecommendationsProps ){
    // const recommendations = [
    //     {title: "Hunter x Hunter (2011)"},
    //     {title: "Naruto"},
    //     {title: "Naruto Shippuden"},
    //     {title: "Naruto Shippuden"},
    //     {title: "Naruto Shippuden"},
    // ];

    return(
        <>
            <section className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-gray-600">
                    <h2 className="text-sm font-medium">Recommendations</h2>
                    <div className="flex justify-center items-center md:gap-6">
                        <div className="flex justify-center items-center">
                            <i className='bx bx-plus text-xl'></i>
                            <p className="hidden md:block text-sm font-medium">Add</p>
                        </div>
                        <p className="hidden md:block text-sm font-medium">View All Recommendations</p>
                    </div>
                </div>

                <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-6 overflow-x-scroll md:overflow-x-hidden">
                    {recommendations.slice(0, 4).map((recommendations, index) => {
                        return <div key={index} className="flex flex-col gap-2">
                            <div className="w-32 aspect-[3/4] bg-red-300 shrink-0 rounded overflow-hidden">
                                <img src={`https://image.tmdb.org/t/p/w500${recommendations.poster_path}`} alt={recommendations.title} className="h-full w-full object-cover rounded" />    
                            </div>  
                            <p className="text-sm font-medium text-gray-600">{recommendations.title}</p>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Recommendations;