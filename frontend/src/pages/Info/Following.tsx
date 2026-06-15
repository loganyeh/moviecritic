

function Following(){

    return(
        <>
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-gray-600">Following</h2>

                <div className="flex items-center px-2.5 py-2 text-sm bg-white text-gray-600 rounded shadow">
                    <div className="flex items-center gap-3.5">
                        <div className="w-[32px] aspect-square bg-red-300 rounded"></div>
                        <p className="font-medium">jujune</p>
                    </div>
                    <p className="flex justify-center flex-1 font-light">Paused</p>
                </div>
            </section>
        </>
    );
};

export default Following;