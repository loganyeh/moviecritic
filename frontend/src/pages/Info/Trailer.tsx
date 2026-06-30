
type TrailerProps = {
    title: string,
    backdrop_path: string,
};


function Trailer({ title, backdrop_path }: TrailerProps ){

    return(
        <>
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-gray-600">Trailer</h2>

                <div className="relative w-full aspect-[4/2] lg:aspect-[4/1] xl:aspect-[4/2] bg-gray-300 rounded overflow-hidden">
                    <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt={title} className="h-full w-full object-cover" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <i className='bx bx-play text-7xl text-gray-700'></i>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Trailer;