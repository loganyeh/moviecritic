

type CurrentMoviesProp = {
    categoryName: string,
};


function CurrentMovies({ categoryName }: CurrentMoviesProp ){

    return(
        <>
            <section className="flex flex-col gap-5">
                <div className="flex justify-between items-center tracking-wide">
                    <h2 className="text-lg font-medium">{categoryName}</h2>
                    <p className="text-xs font-medium">View All</p>
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 2xl:grid-cols-6 gap-4 gap-y-5 xl:gap-10 2xl:gap-12">
                    {Array.from({length: 5}).map((_, index) => {
                        return <div key={index} className="flex flex-col gap-2.5">
                            <div className="aspect-[3/4] bg-blue-300 rounded"></div>
                            <p className="text-xs md:text-sm line-clamp-2">Re:ZERO - Starting Life in Another World</p>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default CurrentMovies;