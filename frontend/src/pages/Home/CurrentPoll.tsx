

function CurrentPoll(){


    return(
        <>
            <section className="flex gap-2 p-3.5 rounded bg-gray-900 text-white">            
                <div className="h-16 w-14 aspect-square bg-blue-300 shrink-0"></div>

                <div className="flex flex-col flex-1 justify-center h-16">
                    <p>Guess the Anime: Winter 2026</p>
                    <p className="text-sm text-gray-400">Kusogaki's Guess the Anime is now live!</p>
                </div>

                {/* <i className='bx bx-x text-4xl'></i> */}
            </section>
        </>
    );
};

export default CurrentPoll;