
type MobileSearchProps = {
    setQuery: React.Dispatch<React.SetStateAction<string>>,
};


function MobileSearch({ setQuery }: MobileSearchProps ){

    return(
        <>
            <section className="xl:hidden flex gap-4 items-center justify-between px-2">
                <div className="flex gap-3 justify-start items-center px-3 w-full bg-white rounded-md shadow-md">
                    <i className='bx bx-search' ></i>
                    <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search" className="h-10 w-full text-sm font-light outline-none" />
                </div>

                <div className="flex justify-center items-center h-10 w-12 bg-white rounded-md shadow-md">
                    <i className='bx bx-slider text-2xl text-gray-400' ></i>
                </div>
            </section>
        </>
    );
};

export default MobileSearch;