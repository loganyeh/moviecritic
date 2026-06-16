

function WatchingStatus(){

    return(
        <>
            <section className="md:max-w-[275px] md:w-fit">
                <div className="relative flex justify-end md:items-end md:gap-5 md:h-52 lg:mb-5">
                    <div className="md:absolute absolute -top-27 md:-top-32 left-0 h-36 md:h-auto w-25 md:w-52 md:aspect-[3/4] bg-red-300 rounded"></div>

                    <div className="flex gap-4 md:w-52">
                        <div className="flex justify-center items-center md:flex-1 px-12 md:px-0 bg-blue-400 text-white rounded">Watching</div>
                        <div className="flex justify-center items-center bg-red-600 rounded">
                            <i className='bx bxs-heart p-2 aspect-square text-xl text-white' ></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WatchingStatus;