

function Reviews(){
    const reviews = [
        {
            review: 'One Piece is a great adventure series, with a lovable cast of characters.',
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
                            <div className="w-12 aspect-square bg-blue-300 rounded shrink-0"></div>

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