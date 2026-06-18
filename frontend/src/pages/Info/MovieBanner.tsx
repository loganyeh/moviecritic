

type MovieBannerProps = {
    backdrop_path: string;
};


function MovieBanner({ backdrop_path }: MovieBannerProps ){

    return(
        <>
            <div className="flex justify-center bg-blue-300">
                <section className="aspect-video md:aspect-[16/7] lg:aspect-[16/5] xl:aspect-[16/4] 2xl:aspect-[16/3] max-w-5xl 2xl:max-w-7xl w-full">
                    <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt="" className="h-full w-full object-cover" />
                    {/* <img src="https://i.pinimg.com/736x/0c/8a/1f/0c8a1f42df3622a03adeded0e08c08a6.jpg" className="w-28 md:w-36 aspect-square bg-blue-300 rounded-t" /> */}
                    {/* <p className="py-3 text-lg font-bold">Hanni</p> */}
                </section>
            </div>
        </>
    );
};

export default MovieBanner;