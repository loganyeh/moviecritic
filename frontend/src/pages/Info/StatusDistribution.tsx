

function StatusDistribution(){
    const statusDistribution = [
        { status: 'Current', numOfUsers: '454890', bgColor: 'bg-green-500', textColor: 'text-green-500'},
        { status: 'Planning', numOfUsers: '89092', bgColor: 'bg-blue-500', textColor: 'text-blue-500'},
        { status: 'Paused', numOfUsers: '85536', bgColor: 'bg-purple-500', textColor: 'text-purple-500'},
        { status: 'Dropped', numOfUsers: '45686', bgColor: 'bg-pink-400', textColor: 'text-pink-400'},
    ];

    return(
        <>
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-gray-600">Status Distribution</h2>

                <div className="shadow">
                    <div className="flex justify-between md:justify-around px-3 py-4 bg-white rounded-t">
                        {statusDistribution.map((status, index) => {
                            return <div key={index} className="flex flex-col gap-2">
                                <p className={`px-3 py-1.5 text-sm ${status.bgColor} text-white rounded`}>{status.status}</p>
                                <div className="flex flex-col justify-center items-center">
                                    <p className={`text-sm ${status.textColor}`}>{status.numOfUsers}</p>
                                    <p className={`text-xs text-gray-500`}>Users</p>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="flex h-3">
                        <div className="h-full w-6/12 bg-green-500 rounded-bl"></div>
                        <div className="h-full w-2/12 bg-blue-500"></div>
                        <div className="h-full w-2/12 bg-purple-500"></div>
                        <div className="h-full w-1/12 bg-pink-400"></div>
                        <div className="h-full w-1/12 bg-red-400 rounded-br"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StatusDistribution;