

type MovieTitleProps = {
    title: string,
};


function MovieTitle({ title }: MovieTitleProps ){

    return(
        <>
            <section className="">
                <h1 className="text-lg font-semibold md:font-normal text-gray-600">{title}</h1>
                {/* <h1 className="text-lg font-semibold md:font-normal text-gray-600">ONE PIECE</h1> */}
            </section>
        </>
    );
};

export default MovieTitle;