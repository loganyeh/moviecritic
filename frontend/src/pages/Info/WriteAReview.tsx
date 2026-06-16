

function WriteAReview(){

    return(
        <>
            <section className="hidden md:flex flex-col gap-3">
                <button className="relative flex p-1.5 w-full bg-blue-400 text-white rounded">
                    <div className="flex justify-center items-center">
                        <i className='bx bxs-edit text-lg' ></i>
                    </div>
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-light">Write Review</p>
                </button>

                <button className="relative flex p-1.5 w-full bg-blue-400 text-white rounded">
                    <div className="flex justify-center items-center">
                        <i className='bx bxs-pencil text-lg' ></i>
                    </div>
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-light">Edit</p>
                </button>
            </section>
        </>
    );
};

export default WriteAReview;