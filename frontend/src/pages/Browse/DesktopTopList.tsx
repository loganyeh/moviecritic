
import type { MovieListsType } from "../../services/tmdb/movieLists";


type DesktopTopListProps = {
    movieData: MovieListsType[];
};


function DesktopTopList({ movieData }: DesktopTopListProps ){

    return(
        <>
            <section className="hidden xl:flex flex-col">
                <div className="flex justify-between items-center tracking-wide">
                    <h2 className="text-lg font-medium">TOP 100 ANIME</h2>
                    <p className="text-xs font-medium">View All</p>
                </div>

                <div className="border-0 border-blue-600 flex gap-6 flex-col p-2">
                    {movieData.slice(0, 10).map((movie, index) => {
                        return <div key={movie.id} className="flex">
                            <div className="flex justify-center items-center px-6 text-2xl shrink-0">#{index + 1}</div>

                            <div className="p-2.5 bg-white w-full rounded shadow-xl">
                                <div className="flex h-16">
                                    {/* <div className="h-full w-13 aspect-[3-4] bg-blue-300 rounded"></div> */}
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="h-full w-13 aspect-[3-4] rounded"/>

                                    <div className="flex justify-between p-2 px-4 w-full">
                                        <div className="flex flex-col gap-1.5">
                                            <p>{movie.title}</p>
                                            <div className="text-[10px] text-white">
                                                <p className="px-2 w-fit bg-green-500 rounded-full">adventure</p>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="flex gap-12 pr-16 2xl:pr-24 font-medium">
                                                <div className="flex gap-2">
                                                    <div className="">
                                                        <i className='bx bx-smile text-xl text-green-500'></i>
                                                    </div>
                                                    <div className="flex gap-0.5 flex-col">
                                                        <p className="text-sm">91%</p>
                                                        <p className="text-xs">442594 Users</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-0.5 flex-col">
                                                    <p className="text-sm">TV Show</p>
                                                    <p className="text-xs">28 Episodes</p>
                                                </div>
                                                <div className="flex gap-0.5 flex-col">
                                                    <p className="text-sm">Fall 2023</p>
                                                    <p className="text-xs">Finished</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                                
                                
                            </div>

                        </div>
                    })}
                </div>
                
            </section>
        </>
    );
};

export default DesktopTopList;