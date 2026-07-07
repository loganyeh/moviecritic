

type DescriptionProps = {
    overview: string,
};


function Description({ overview }: DescriptionProps ){

    return(
        <>
            <section className="flex flex-col gap-3">
                <p className="text-sm font-medium text-gray-600">Description</p>

                <p className="p-5 text-sm bg-white text-gray-500 rounded shadow">
                    {overview}
                </p>
            </section>
        </>
    );
};

export default Description;