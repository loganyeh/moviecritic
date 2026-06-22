

function Score(){

    return(
        <>
            <div className="flex gap-1 flex-col">
                <h2 className="text-sm text-gray-500">Score</h2>

                <button className="relative flex justify-between px-3 py-2 bg-gray-200 rounded">
                    <div className="flex font-light text-gray-600">0</div>
                    <div className="absolute top-0 right-2.5 flex flex-col items-center">
                        <i className='bx bx-chevron-up text-xl text-gray-400' ></i>
                        <i className='bx bx-chevron-down text-xl text-gray-400' ></i>
                    </div>
                </button>
            </div>
        </>
    );
};

export default Score;