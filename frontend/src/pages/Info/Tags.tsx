import type { MovieListsType } from "../../services/tmdb/movieLists";

type TagsProps = {
    info: MovieListsType;
};

function Tags({ info }: TagsProps ){
    const tags = [
        { tag: 'Pirates', percentage: '98' },
        { tag: 'Travel', percentage: '94' },
        { tag: 'Shounen', percentage: '93' },
        { tag: 'Ensemble Cast', percentage: '93' },
        { tag: 'Super Power', percentage: '90' },
    ];
    
    return(
        <>
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-gray-600">Tags</h2>

                <div className="flex flex-col gap-3">
                    {info?.genres.map((tag, index) => {
                        return <div key={index} className="py-2 px-3 bg-white rounded shadow">
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-600">{tag.name}</p>
                                <p className="text-xs font-light text-gray-500">90%</p>
                            </div>
                        </div>
                    })}
                </div>
                
                <p className="text-xs text-gray-500">Show 17 spoiler tags</p>
            </section>
        </>
    );
};

export default Tags;