

function WatchedStats(){

    return(
        <>
            <section className="bg-white rounded shadow">
                <div className="flex justify-around py-6 2xl:py-3">
                    <div className="flex gap-2 flex-col items-center">
                        <p className="text-sm font-semibold text-blue-400">75</p>
                        <p className="text-xs font-medium">Total Anime</p>
                    </div>
                    <div className="flex gap-2 flex-col items-center">
                        <p className="text-sm font-semibold text-blue-400">28.6</p>
                        <p className="text-xs font-medium">Days Watched</p>
                    </div>
                    <div className="flex gap-2 flex-col items-center">
                        <p className="text-sm font-semibold text-blue-400">78.2</p>
                        <p className="text-xs font-medium">Mean Score</p>
                    </div>
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