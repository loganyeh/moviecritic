
type DesktopSearchProps = {
    setQuery: React.Dispatch<React.SetStateAction<string>>,
};

function DesktopSearch({ setQuery }: DesktopSearchProps ){

    return(
        <>
            <section className="hidden xl:flex justify-between items-end">
                <div className="flex gap-6">
                    <div className="flex flex-col gap-3">
                        <p className="2xl:text-sm font-medium">Search</p>
                        <div className="px-3 bg-white rounded shadow-md">
                            <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Any" className="h-10 w-36 2xl:text-sm outline-none"/>
                        </div>
                    </div>

                    {Array.from({length: 4}).map((_, index) => {
                        return <div key={index} className="flex flex-col gap-3">
                            <p className="2xl:text-sm font-medium">Search</p>
                            <div className="px-3 bg-white rounded shadow-md">
                                <input type="text" placeholder="Any" className="h-10 w-36 2xl:text-sm outline-none"/>
                            </div>
                        </div>
                    })}
                </div>

                <div className="flex justify-center items-center h-10 w-10 bg-white rounded shadow-md shrink-0">
                    <i className='bx bx-slider text-2xl' ></i>
                </div>
            </section>
        </>
    );
};

export default DesktopSearch;