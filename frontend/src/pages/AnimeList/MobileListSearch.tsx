

function MobileListSearch(){

    return(
        <>
            <section className="flex gap-5">
                <div className="flex flex-1 items-center gap-3 px-3 bg-white text-gray-500 rounded shadow">
                    <i className='bx bx-search text-lg'></i>
                    <input type="text" placeholder="Filter" className="w-full font-light outline-none" />
                </div>

                <div className="flex justify-center items-center p-2 bg-white rounded shadow">
                    <i className='bx bx-dots-horizontal-rounded text-2xl text-gray-600' ></i>
                </div>
            </section>
        </>
    );
};

export default MobileListSearch;