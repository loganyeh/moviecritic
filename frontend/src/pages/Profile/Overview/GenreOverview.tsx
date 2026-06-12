

function GenreOverview(){

    return(
        <>
            <section className="flex flex-col gap-2">
                <h1 className="px-4 text-sm font-medium">Genre Overview</h1>
                
                <div>
                    <div className="flex justify-between p-6 bg-white rounded-t shadow">
                        
                        <div className="flex flex-col gap-1.5 items-center w-fit">
                            <p className="flex justify-center items-center px-2 py-0.5 text-sm bg-green-500 text-white rounded">Comedy</p>
                            <p className="text-xs">51 Entries</p>
                        </div>
                        <div className="flex flex-col gap-1.5 items-center w-fit">
                            <p className="flex justify-center items-center px-2 py-0.5 text-sm bg-blue-500 text-white rounded">Action</p>
                            <p className="text-xs">46 Entries</p>
                        </div>
                        <div className="flex flex-col gap-1.5 items-center w-fit">
                            <p className="flex justify-center items-center px-2 py-0.5 text-sm bg-purple-500 text-white rounded">Supernatural</p>
                            <p className="text-xs">38 Entries</p>
                        </div>
                        <div className="flex flex-col gap-1.5 items-center w-fit">
                            <p className="flex justify-center items-center px-2 py-0.5 text-sm bg-pink-400 text-white rounded">Drama</p>
                            <p className="text-xs">33 Entries</p>
                        </div>

                    </div>        

                    <div className="flex h-3">
                        <div className="h-full w-3/12 bg-green-500 rounded-bl"></div>
                        <div className="h-full w-2/12 bg-blue-500"></div>
                        <div className="h-full w-2/12 bg-purple-500"></div>
                        <div className="h-full w-3/12 bg-pink-400"></div>
                        <div className="h-full w-1/12 bg-red-500"></div>
                        <div className="h-full w-1/12 bg-orange-500 rounded-br"></div>
                    </div>
                </div>

            </section>
        
        </>
    );
};

export default GenreOverview;