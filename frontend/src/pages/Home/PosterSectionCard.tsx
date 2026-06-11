

type PosterSectionCardProps = {
    sectionHeader: string,
};

function PosterSectionCard({ sectionHeader }: PosterSectionCardProps ){

    return(
        <>
            <section className="hidden xl:flex flex-col">
                <h1 className="px-4 py-2 text-sm">{sectionHeader}</h1>
                
                <div className="flex justify-around py-4 px-3 bg-white shadow">
                    {Array.from({length: 4}).map((_, index) => {
                        return <div key={index} className="w-[84px] aspect-[3/4] bg-blue-300 rounded"></div>
                    })}
                </div>
            </section>
        </>
    );
};

export default PosterSectionCard;