

function StartDate(){

    return(
        <>
            <div className="flex gap-1 flex-col max-w-9/12 md:w-7/12">
                <h2 className="text-sm text-gray-500">Start Date</h2>

                <button className="relative flex gap-3 px-3 py-2 bg-gray-200 rounded">
                    <div className="flex items-center">
                        <i className='bx bx-calendar text-gray-300'></i>
                    </div>

                    <div className="flex font-light text-gray-600">2025-07-01</div>
                </button>
            </div>
        </>
    );
};

export default StartDate;