

type MovieTitleProps = {
    loading: boolean
    title: string,
};


function MovieTitle({ loading, title }: MovieTitleProps ){

    return(
        <>
            <section>
                {loading ?
                    <div className="h-5 w-1/2 bg-black"></div>
                    :
                    <h1 className="text-lg font-semibold md:font-normal text-gray-600">{title}</h1>
                }
            </section>
        </>
    );
};

export default MovieTitle;