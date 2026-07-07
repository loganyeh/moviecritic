

function ForumActivity(){
    const forumThread = [
        {
            header: "Guess the Anime: Winter 2026",
            avi: "https://i.pinimg.com/736x/18/89/16/1889166e5dc0ae0ab1ae29d11764efb6.jpg",
            username: "Rukia",
            views: "12444",
            comments: "1449",
        },
        {
            header: "[Spoilers] Episode 1 Discussion",
            avi: "https://i.pinimg.com/1200x/d2/b4/df/d2b4dfd6f794a29ead35cea23ad80aee.jpg",
            username: "Megumi",
            views: "5011",
            comments: "110",
        },
    ];

    return(
        <>
            <section className="hidden xl:flex flex-col">
                <h1 className="px-4 py-2 text-sm">Forum Activity</h1>

                <div className="flex flex-col gap-5">
                    {forumThread.map((thread, index) => {
                        return <div key={index} className="flex justify-between bg-white shadow rounded">
                            <div className="flex flex-col gap-2 p-4">
                                <p className="text-sm">{thread.header}</p>
                                <div className="flex gap-2 items-center text-xs">
                                    <div className="w-8 aspect-square bg-gray-300">
                                        <img src={thread.avi} alt={thread.username} className="rounded" />
                                    </div>
                                    <p>{thread.username}</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-center p-3">
                                <div className="flex gap-3.5 text-xs">
                                    <div className="flex items-center gap-1">
                                        <i className='bx bxs-bar-chart-alt-2'></i>
                                        <p>{thread.views}</p>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <i className='bx bxs-chat'></i>
                                        <p>{thread.comments}</p>
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