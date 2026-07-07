
type WatchedStatsProps = {
    title: string,
    total: string,
    days: string,
    mean: string,
};

function WatchedStats({ title, total, days, mean }: WatchedStatsProps ){
    const categories = [`${title}`, "Days Watched", "Mean Score"];
    const data = [`${total}`, `${days}`, `${mean}`];

    return(
        <>
            <section className="bg-white rounded shadow">
                <div className="flex justify-around py-6 2xl:py-3">
                    {categories.map((cat, index) => {
                        return <div key={index} className="flex gap-2 flex-col items-center">
                            <p className="text-sm font-semibold text-blue-400">{data[index]}</p>
                            <p className="text-xs font-medium">{cat}</p>
                        </div>
                    })}
                </div>

                <div className="flex justify-around py-2 text-xs bg-gray-200">
                    <p>10</p>
                    <p>30</p>
                    <p>50</p>
                </div>

                <div className="bg-gray-300">
                    <div className="h-2.5 w-1/2 bg-blue-400 rounded-r"></div>
                </div>
            </section>
        </>
    );
};

export default WatchedStats;