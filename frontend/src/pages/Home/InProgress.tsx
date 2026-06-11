

function InProgress(){


    return(
        <>
            <section className="">
                <h1 className="px-4 py-2 text-sm">In Progress</h1>

                <div className="flex gap-5 xl:p-5 xl:bg-white overflow-x-scroll">
                    {Array.from({ length: 4 }).map((_, index) => {
                        return <div key={index} className="xl:border-0 flex max-w-68 w-full xl:w-fit bg-white xl:bg-none shadow rounded shrink-0">
                            <div className="w-22 aspect-[3/4] bg-blue-300 rounded-l xl:rounded shrink-0"></div>

                            <div className="xl:hidden flex flex-col justify-between p-3 min-w-0 w-full">
                                <p className="text-sm font-light line-clamp-2">BOCCHI THE ROCK!</p>
                                <p className="text-xs font-light">Progress: 9/12 +</p>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default InProgress;