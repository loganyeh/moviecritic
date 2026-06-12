

type FavoritesCardProps = {
    title: string,
};


function FavoritesCard({ title }: FavoritesCardProps ){

    return(
        <>
            <section className="flex flex-col gap-2">
                <h1 className="px-4 text-sm font-medium">{title}</h1>

                <div className="grid grid-cols-4 2xl:grid-cols-5 p-4 gap-4 bg-white">
                    {Array.from({length: 8}).map((_, index) => {
                        return <div key={index} className="w-[76px] aspect-[3/4] bg-blue-300 rounded"></div>
                    })}
                </div>
                
            </section>
        </>
    );
};

export default FavoritesCard;