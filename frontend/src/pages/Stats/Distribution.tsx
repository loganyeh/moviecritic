
type DistributionProps = {
    title: string,
    data: {
        distribution: string,
        percentage: string,
        color: string,
    }[],
}

function Distribution({ title, data }: DistributionProps ){

    return(
        <>
            <section className="flex gap-3 flex-col p-6 bg-white rounded-xl">
                <p className="font-semibold text-gray-600">{title} Distribution</p>

                <div className="flex gap-3 md:gap-6 xl:gap-[32px] flex-col md:flex-row xl:flex-col 2xl:flex-row">
                    <div className="flex justify-center items-center">
                        <i className='bx bx-pie-chart-alt-2 text-7xl md:text-8xl' ></i>
                    </div>

                    <div className="flex gap-2 flex-col md:w-full">
                        {data.map((format, index) => {
                            return <div key={index} className={`flex justify-between items-center pl-2.5 ${format.color} text-white rounded-md`}>
                                <p className="text-sm">{format.distribution}</p>
                                <p className="flex justify-center py-1 h-full w-12 text-sm bg-white/50 rounded-md">{format.percentage}%</p>
                            </div>
                        })}
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default Distribution;