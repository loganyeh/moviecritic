

function BrowseDropdown(){

    return(
        <>
            <section className="xl:hidden flex gap-5 text-4xl font-semibold text-gray-500">
                <h1 className="p-1">Browse</h1>
                <div className="flex items-center p-1 pl-3 bg-gray-300 rounded">
                    <h1>Anime</h1>
                    <i className='bx bx-chevron-down text-gray-400'></i>
                </div>
            </section>
        </>
    );
};

export default BrowseDropdown;