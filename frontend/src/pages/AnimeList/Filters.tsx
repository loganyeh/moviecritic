

function Filters(){
    const filterCategories = ["Format", "Status", "Genres", "Country"];

    return(
        <>
            <section className="flex flex-col gap-3 w-full text-gray-600">
                <p className="">Filters</p>

                <div className="flex flex-col gap-3 pl-2">
                    {filterCategories.map((category, index) => {
                        return <div key={index} className={`flex justify-between items-center px-3 py-2 bg-white text-gray-500 rounded shadow`}>
                            <p className="text-sm">{category}</p>
                            <i className='bx bx-chevron-down text-xl' ></i>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Filters;