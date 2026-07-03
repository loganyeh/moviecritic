

function ActivityHistory(){
    const activityColors = ["bg-gray-300", "bg-blue-300", "bg-blue-400"];
    
    return(
        <>
            <section className="flex flex-col gap-2 w-full">
                <h1 className="px-4 text-sm font-medium">Activity History</h1>

                <div className="grid grid-cols-24 gap-2 p-5 bg-white rounded shadow">
                    {Array.from({length: 168}).map((_, index) => {
                        return <div key={index} className={`w-2.5 aspect-square ${activityColors[Math.floor(Math.random() * 3)]} rounded-sm`}></div>
                    })}
                </div>
            </section>
        </>
    );
};

export default ActivityHistory;