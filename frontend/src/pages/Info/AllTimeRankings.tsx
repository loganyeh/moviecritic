

function AllTimeRankings(){

    return(
        <>
            <div className="hidden md:flex flex-col gap-4">
                
                <section className="flex justify-around items-center px-2 py-1 bg-white rounded">
                    <div>
                        <i className='bx bxs-star text-yellow-300'></i>
                    </div>
                    <p className="text-xs font-medium text-gray-600">{`#${Math.floor(Math.random() * 10) + 1} Highest Rated All Time`}</p>
                </section>

                <section className="hidden md:flex justify-around items-center px-2 py-1 bg-white rounded">
                    <div>
                        <i className='bx bxs-heart text-red-600'></i>
                    </div>
                    <p className="text-xs font-medium text-gray-600">{`#${Math.floor(Math.random() * 10) + 1} Highest Rated All Time`}</p>
                </section>
                
            </div>
        </>
    );
};

export default AllTimeRankings;