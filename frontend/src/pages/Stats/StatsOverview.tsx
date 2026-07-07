
function StatsOverview(){
    const userStats = [
        {
            icon: "bx bx-tv",
            value: "75",
            stat: "Total Anime",
        },
        {
            icon: "bx bx-play",
            value: "1736",
            stat: "Episodes Watched",
        },
        {
            icon: "bx bx-calendar-alt",
            value: "28.6",
            stat: "Days Watched",
        },
        {
            icon: "bx bx-hourglass",
            value: "40.3",
            stat: "Days Planned",
        },
        {
            icon: "bx bx-calculator",
            value: "78.21",
            stat: "Mean Score",
        },
        {
            icon: "bx bx-math",
            value: "14.2",
            stat: "Standard Deviation",
        },
    ];

    return(
        <>
            <section>
                <div className="grid gap-[28px] grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 px-4">
                    {userStats.map((cat, index) => {
                        return <div key={index} className="flex gap-4 justify-start items-center">
                            <div className="border border-gray-100 flex justify-center items-center p-2 bg-white rounded-full shadow">
                                <i className={`${cat.icon} text-2xl text-gray-500`} ></i>
                            </div>

                            <div className="flex gap-1.5 flex-col">
                                <p className="text-2xl font-semibold text-blue-400">{cat.value}</p>
                                <p className="text-sm font-medium text-gray-600">{cat.stat}</p>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default StatsOverview;