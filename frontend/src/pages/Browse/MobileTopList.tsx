

function MobileTopList(){

    return(
        <>
            <section className="xl:hidden flex flex-col gap-5">
                <div className="flex justify-between items-center tracking-wide">
                    <h2 className="text-lg font-medium">Top 100 Anime</h2>
                    <p className="text-xs font-medium">View All</p>
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 gap-y-5">
                    {Array.from({length: 10}).map((_, index) => {
                        return <div key={index} className="flex flex-col gap-2.5">
                            <div className="relative aspect-[3/4] bg-blue-300 rounded">
                                <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 flex justify-center items-center h-8 w-8 md:h-10 md:w-10 text-sm bg-red-400 text-white rounded-full">#{index + 1}</div>
                            </div>
                            <p className="text-xs md:text-sm line-clamp-2">Re:ZERO - Starting Life in Another World</p>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default MobileTopList;