

function Relations(){

    return(
        <>
            <section className="flex flex-col gap-3">
                <p className="text-sm font-medium text-gray-600">Relations</p>

                <div className="flex md:flex-col xl:grid xl:grid-cols-7 2xl:grid-cols-10 gap-6 xl:gap-0 xl:gap-y-4 overflow-x-scroll md:overflow-x-hidden">
                    {Array.from({length: 20}).map((_, index) => {
                        return <div key={index} className="flex max-w-72 md:max-w-none xl:w-fit shrink-0">
                            <div className="xl:relative w-20 xl:w-24 2xl:w-20 aspect-[3/4] bg-red-300 shrink-0 rounded-l xl:rounded">
                                <div className="hidden absolute bottom-0 left-0 xl:flex justify-center items-center h-4/12 w-full text-xs font-light bg-black/50 text-white rounded-b">Summary</div>
                            </div>
                            <div className="xl:hidden flex flex-col justify-between p-3 min-w-44 md:w-full text-xs bg-white shadow rounded-r">
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