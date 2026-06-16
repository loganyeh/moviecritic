

function ScoreDistribution(){
    const scoreDistribution = [
        {height: 'h-4/12', color: 'bg-red-500'},
        {height: 'h-3/12', color: 'bg-orange-600'},
        {height: 'h-3/12', color: 'bg-orange-500'},
        {height: 'h-3/12', color: 'bg-orange-400'},
        {height: 'h-4/12', color: 'bg-yellow-400'},
        {height: 'h-3/12', color: 'bg-yellow-500'},
        {height: 'h-4/12', color: 'bg-green-300'},
        {height: 'h-5/12', color: 'bg-green-400'},
        {height: 'h-8/12', color: 'bg-green-500'},
        {height: 'h-12/12', color: 'bg-green-600'},
    ];

    return(
        <>
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-gray-600">Score Distribution</h2>

                <div className="flex justify-between items-end p-5 h-28 bg-white rounded shadow">
                    {scoreDistribution.map((score, index) => {
                        return <div key={index} className={`${score.height} w-4 ${score.color} rounded-t-full rounded-b-full shrink-0`}>
                            
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default ScoreDistribution;