import type { MovieListsType } from "../../services/tmdb/movieLists";

type ReviewsProps = {
    info: MovieListsType,
};

function Reviews({ info }: ReviewsProps ){
    const reviews = [
        {
            review: `${info?.title} is a great adventure series, with a lovable cast of characters.`,
            likes: '563',
        },
        {
            review: 'A really fun adventure comprised of a wacky crew...',
            likes: '209',
        },
    ];

    return(
        <>
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-gray-600">Reviews</h2>

                <div className="flex flex-col gap-4">
                    {reviews.map((review, index) => {
                        return <div key={index} className="flex items-start gap-6">
                            <div className="w-12 aspect-square bg-gray-300 rounded shrink-0">
                                <img src={`https://i.pinimg.com/736x/ec/7a/da/ec7adabcdea9e66ce6dcade3be1853c1.jpg`} className="rounded"/>
                            </div>

                            <div className="relative p-4 md:w-full bg-white rounded shadow">
                                <p className="text-sm text-center text-gray-600">{review.review}</p>

                                <div className="absolute bottom-1 right-2 flex justify-end items-center gap-1 text-xs text-gray-500">
                                    <i className='bx bxs-like' ></i>
                                    <p>{review.likes}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Reviews;