

function RecentReviews(){

    return (
        <>
            <section className="hidden xl:flex flex-col">
                <h1 className="px-4 py-2 text-sm">Recent Reveiws</h1>

                <div className="grid grid-cols-2 gap-6">
                    {Array.from({length: 4}).map((_, index) => {
                        return <div key={index} className="bg-white rounded shadow">
                            <div className="h-[88px] w-full aspect-video bg-blue-300 rounded-t"></div>

                            <div className="flex flex-col justify-center gap-2 p-3">
                                <p className="text-sm">Reviews of Days with My Stepsister by Rukia</p>
                                <p className="text-xs line-clamp-5"> a grounded, entirely different, and surprising tone. However, the show's determination to avoid clichés unfortunately fails to deliver the same success when it comes to processing the plot in an engaging and satisfying manner.</p>
                                <div className="flex justify-end items-center gap-1 text-xs">
                                    <i className='bx bxs-like' ></i>
                                    <p>5</p>
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