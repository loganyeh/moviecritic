
type BarGraphProps = {
    title: string
    data: {
        value: string,
        barHeight: string,
    }[];
};

function BarGraph({ title, data }: BarGraphProps ){

    return(
        <>
            <section className="flex gap-3 flex-col">
                <div className="xl:flex justify-between">
                    <p className="text-xl font-semibold text-gray-700">{title}</p>

                    <div className="hidden xl:flex gap-2 p-1.5 w-fit bg-white rounded-full shadow">
                        <p className="px-2 py-0.5 text-xs font-medium bg-blue-400 text-white rounded-full">Titles Watched</p>
                        <p className="px-2 py-0.5 text-xs font-medium text-gray-600 rounded-full">Hours Watched</p>
                    </div>
                </div>

                <div className="xl:hidden flex gap-2 p-1.5 w-fit bg-white rounded-full shadow">
                    <p className="px-2 py-0.5 text-xs font-medium bg-blue-400 text-white rounded-full">Titles Watched</p>
                    <p className="px-2 py-0.5 text-xs font-medium text-gray-600 rounded-full">Hours Watched</p>
                </div>

                <div className="bg-white rounded-xl shadow">
                    <div className="grid grid-cols-7 text-center">
                        {data.map((col, index) => {
                            return <div key={index} className={`flex gap-1 flex-col justify-end items-center h-44`}>
                                <p className="text-xs font-medium text-gray-700">{col.value}</p>
                                <div className={`${col.barHeight} w-[28px] bg-blue-400 rounded-t`}></div>
                            </div>
                        })}
                    </div>
                    <div className="grid grid-cols-7 py-3.5 bg-gray-300 rounded-b-xl">
                        {Array.from({ length: 7 }).map((_, index) => {
                            return <div key={index} className="flex justify-center items-center text-xs text-gray-700">
                                {index + 4}
                            </div>
                        })}
                    </div>
                </div>

            </section>
        </>
    );
};

export default BarGraph;