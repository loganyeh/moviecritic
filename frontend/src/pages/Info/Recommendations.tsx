

function Recommendations(){
    const recommendations = [
        {title: "Hunter x Hunter (2011)"},
        {title: "Naruto"},
        {title: "Naruto Shippuden"},
    ];

    return(
        <>
            <section className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-gray-600">
                    <h2 className="text-sm font-medium">Recommendations</h2>
                    <i className='bx bx-plus text-xl'></i>
                </div>

                <div className="flex gap-6 overflow-x-scroll">
                    {recommendations.map((recommendations, index) => {
                        return <div key={index} className="flex flex-col gap-2">
                            <div className="w-32 aspect-[3/4] bg-red-300 shrink-0 rounded"></div>  
                            <p className="text-sm font-medium text-gray-600">{recommendations.title}</p>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Recommendations;