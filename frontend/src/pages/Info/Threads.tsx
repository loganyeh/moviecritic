

function Threads(){

    return(
        <>
            <section className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-gray-600">
                    <h2 className="text-sm font-medium">Threads</h2>
                    <p className="text-xs">Create New Thread</p>
                </div>

                <div className="flex flex-col gap-5">
                    {Array.from({length: 2}).map((_, index) => {
                        return <div key={index} className="flex flex-col gap-3 p-4 bg-white rounded shadow">
                            <div className="flex gap-5">
                                <p className="min-w-0 text-sm text-gray-600 line-clamp-3">[Spoilers] One Piece - Episode 1165 Discussion</p>

                                <div className="flex gap-3 text-gray-500 shrink-0">
                                    <div className="flex gap-0.5">
                                        <i className='bx bx-bar-chart text-sm' ></i>
                                        <p className="text-xs">268</p>
                                    </div>

                                    <div className="flex gap-0.5">
                                        <i className='bx bxs-chat text-sm'></i>
                                        <p className="text-xs">13</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5 text-gray-600">
                                <div className="w-6 aspect-square bg-blue-300 rounded"></div>
                                <p className="text-xs">Hanni replied 22 hours ago</p>
                            </div>

                            <div className="px-2 py-0.5 w-fit text-xs bg-blue-400 text-white rounded-full">anime</div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Threads;