import { useState, useEffect } from "react";
import type { MovieListsType } from "../../services/tmdb/movieLists";
import { fetchTopRated } from "../../services/tmdb/movieLists";

function RecentReviews(){
    const [reviews, setReviews] = useState<MovieListsType[]>([]);

    useEffect(() => {
        async function getReviews(){
            const response = await fetchTopRated();
            setReviews(response);
        };

        getReviews();
    }, []);

    return (
        <>
            <section className="hidden xl:flex flex-col">
                <h1 className="px-4 py-2 text-sm">Recent Reveiws</h1>

                <div className="grid grid-cols-2 gap-6">
                    {reviews.slice(0, 4).map((movie, index) => {
                        return <div key={index} className="bg-white rounded shadow">
                            <div className="h-[88px] w-full aspect-video bg-blue-300 rounded-t">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" className="h-full w-full object-cover rounded-t" />
                            </div>

                            <div className="flex flex-col justify-center gap-2 p-3">
                                <p className="text-sm">Reviews of {movie.title}</p>
                                <p className="text-xs line-clamp-5">{movie.overview}</p>
                                <div className="flex justify-end items-center gap-1 h-full text-xs">
                                    <i className='bx bxs-like' ></i>
                                    <p>{Math.floor(Math.random() * 1000) + 250}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default RecentReviews;