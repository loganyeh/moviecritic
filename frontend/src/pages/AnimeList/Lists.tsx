
type ListsProps = {
    title: string,
    categories: string[],
};

function Lists({ title, categories }: ListsProps ){

    return(
        <>
            <section className="flex flex-col gap-3 w-full text-gray-500">
                <p>{title}</p>

                <div className="flex flex-col gap-3 pl-2">
                    {categories.map((category, index) => {
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