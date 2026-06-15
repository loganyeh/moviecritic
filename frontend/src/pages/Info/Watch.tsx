

function Watch(){
    const watch = [
        {thumbnail: '', episodeName: 'Episode 130 - Scent of'},
        {thumbnail: '', episodeName: 'Episode 129 - It All Started'},
    ];

    return(
        <>
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-gray-600">Watch</h2>

                <div className="flex gap-[32px] overflow-x-scroll">
                    {watch.map((watch, index) => {
                        return <div key={index} className="relative flex justify-between items-end p-5 w-44 aspect-video shrink-0 bg-red-300 rounded shadow">
                            <div className="absolute left-0 bottom-0 flex items-center px-4 h-[36px] w-full bg-black/50">
                                <p className="text-xs text-white truncate">{watch.episodeName} asfd;lajsdfj;laskjf</p>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Watch;