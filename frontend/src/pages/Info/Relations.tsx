

function Relations(){

    return(
        <>
            <section className="flex flex-col gap-3">
                <p className="text-sm font-medium text-gray-600">Relations</p>

                <div className="flex gap-6 overflow-x-scroll">
                    {Array.from({length: 3}).map((_, index) => {
                        return <div key={index} className="flex max-w-72 shrink-0 shadow">
                            <div className="w-20 aspect-[3/4] bg-red-300 shrink-0 rounded-l"></div>
                            <div className="flex flex-col justify-between p-3 min-w-44 text-xs bg-white rounded-r">
                                <div className="flex flex-col gap-1">
                                    <p className="text-blue-400 font-medium">Source</p>
                                    <p className="text-sm line-clamp-2">Bocchi the Rock!</p>
                                </div>

                                <p>Manga * Hiatus</p>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Relations;