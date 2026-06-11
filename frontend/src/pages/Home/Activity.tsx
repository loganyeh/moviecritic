

function Activity(){


    return(
        <>
            <section className="flex flex-col gap-4 w-full">
                <div className="flex justify-between items-center">
                    <h1 className="px-4 py-2 text-sm">Activity</h1>

                    <div className="flex gap-2 items-center">
                        <i className='bx bxs-filter-alt text-base'></i>

                        <div className="flex text-xs font-light bg-white rounded">
                            <p className="px-3 py-1.5 font-medium">Following</p>
                            <p className="px-3 py-1.5">Global</p>
                        </div>
                    </div>
                </div>

                <input type="text" className="px-4 py-2 text-sm bg-white rounded" placeholder="Write a status..." />

                <div className="flex flex-col gap-5">
                {/* <div className="border border-red-600 flex flex-col gap-5"> */}

                    {Array.from({ length: 2 }).map((_, index) => {
                        return <div key={index} className="flex rounded shadow">
                            <div className="w-20 aspect-[3/4] bg-blue-300 rounded-l"></div>

                            <div className="flex justify-between gap-2 p-3.5 w-full bg-white rounded">
                                <div className="flex flex-col gap-2 justify-between text-xs">
                                    <p className="text-blue-300">jujune</p>
                                    <p>Plans to watch Frieren: Beyond Journey's End Season 2</p>
                                    <div className="w-10 aspect-square bg-blue-300 rounded"></div>
                                </div>

                                <div className="flex flex-col justify-between items-end text-[11px] shrink-0">
                                    <time className="font-semibold">1 week ago</time>

                                    <div className="flex gap-2 text-sm">
                                        <i className='bx bxs-chat' ></i>
                                        <i className='bx bxs-heart' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <button className="p-3.5 text-sm font-semibold bg-white rounded shadow">Load More</button>

            </section>
        </>
    );
};

export default Activity;