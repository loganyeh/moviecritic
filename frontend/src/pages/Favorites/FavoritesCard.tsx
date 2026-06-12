

type FavoritesCardProps = {
    sectionName: string,
};


function FavoritesCard({ sectionName }: FavoritesCardProps ){
 
    return(
        <>
            <section className="flex flex-col gap-2 max-w-5xl 2xl:max-w-7xl w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm font-medium">{sectionName}</h1>
                    <div className="p-2 text-xs font-medium bg-blue-400 text-white rounded">Reorder</div>
                </div>

                <div className="bg-white rounded-md shadow">
                    <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-11 gap-5 xl:gap-6 p-6">
                        {Array.from({length: 8}).map((_, index) => {
                            return <div key={index} className="mx-auto md:mx-0 w-24 md:w-[88px] aspect-[3/4] bg-blue-300 rounded">

                            </div>
                        })}
                    </div>

                </div>
            </section>
        </>
    );
};

export default FavoritesCard;