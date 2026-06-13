

function Lists(){
    const listCategories = ["All", "Watching", "Completed", "Paused", "Dropped", "Planning"];

    return(
        <>
            <section className="flex flex-col gap-3 w-full text-gray-500">
                <p className="">Lists</p>

                <div className="flex flex-col gap-3 pl-2">
                    {listCategories.map((category, index) => {
                        return <div key={index} className={`${index === 0 ? "w-full bg-white rounded shadow" : ""} pl-3`}>
                            {category}
                        </div>
                    })}
                </div>
            </section>
        
        </>
    );
};

export default Lists;