

type MovieBannerProps = {
    loading: boolean,
    title: string,
    backdrop_path: string;
};


function MovieBanner({ loading, title, backdrop_path }: MovieBannerProps ){

    return(
        <> 
            <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-gray-300 bg-contain blur-xs" style={{ backgroundImage: loading ? "" : `url("https://image.tmdb.org/t/p/w500${backdrop_path}")` }}></div>

                <section className="relative aspect-video md:aspect-[16/7] lg:aspect-[16/5] xl:aspect-[16/4] 2xl:aspect-[16/3] max-w-5xl 2xl:max-w-7xl w-full">
                    {loading ? 
                        <div className="flex justify-center items-center h-full w-full bg-gray-300">
                            <i className='bx bx-loader-circle text-5xl animate-spin'></i>
                        </div>
                        :
                        <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt={title} className="h-full w-full object-cover" />
                    }
                </section>
            </div>
        </>
    );
};

export default MovieBanner;