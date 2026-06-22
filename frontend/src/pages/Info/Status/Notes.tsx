

function Notes(){

    return(
        <>
            <div className="flex gap-1 flex-col">
                <h2 className="text-sm text-gray-500">Notes</h2>

                <button className="relative flex justify-between  h-10 bg-gray-200 rounded">
                    <input type="text" className="px-3 py-2 h-full w-full outline-none" />
                </button>
            </div>
        </>
    );
};

export default Notes;