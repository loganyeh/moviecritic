

function ForumActivity(){

    
    return(
        <>
            <section className="hidden xl:flex flex-col">
                <h1 className="px-4 py-2 text-sm">Forum Activity</h1>

                <div className="flex flex-col gap-5">
                    {Array.from({ length: 3 }).map((_, index) => {
                        return <div key={index} className="flex justify-between bg-white shadow rounded">
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-sm">Guess The Anime: Winter 2026 </p>
                                <div className="flex gap-2 items-center text-xs">
                                    <div className="w-8 aspect-square bg-blue-300"></div>
                                    <p>Rukia</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-center p-3">
                                <div className="flex gap-3.5 text-xs">
                                    <div className="flex items-center gap-1">
                                        <i className='bx bxs-bar-chart-alt-2'></i>
                                        <p>25046</p>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <i className='bx bxs-bar-chart-alt-2'></i>
                                        <p>25046</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center py-0.5 px-2 w-fit text-[10px] bg-orange-400 text-white rounded-full">forum games</div>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default ForumActivity;