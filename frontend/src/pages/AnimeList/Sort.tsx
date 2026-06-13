

function Sort(){

    return(
        <>
            <section className="flex flex-col gap-3 w-full text-gray-600">
                <p className="">Sort</p>

                <div className={`flex justify-between items-center px-3 py-2 bg-white text-gray-500 rounded shadow`}>
                    <p className="text-sm">Score</p>
                    <i className='bx bx-chevron-down text-xl' ></i>
                </div>
            </section>
        </>
    );
};

export default Sort;