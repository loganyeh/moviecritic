

function Details(){
    const movieDetails = [
        {category: "Format", detail: "TV"},
        {category: "Episodes", detail: "12"},
        {category: "Episode Duration", detail: "24 mins"},
        {category: "Status", detail: "Finished"},
        {category: "Start Date", detail: "Oct 9, 2022"},
        {category: "End Date", detail: "Dec 25, 2022"},
        {category: "Season", detail: "Fall 2022"},
        {category: "Average Score", detail: "87%"},
        {category: "Mean Score", detail: "87%"},
        {category: "Popularity", detail: "250637"},
        {category: "Favorites", detail: "27075"},
        {category: "Studios", detail: "CloverWorks"},
        {category: "Producers", detail: ["Aniplex", "Houhunsha"]},
        {category: "Source", detail: "Manga"},
        {category: "Hashtag", detail: "#ぽっち*ぎ*ろっく"},
        {category: "Genres", detail: ["Comedy", "Music", "Slice of Life"]},
        {category: "Romaji", detail: "Bocchi the Rock!"},
        {category: "English", detail: "BOCCHI THE ROCK!"},
        {category: "Native", detail: "ぽっち*ぎ*ろっく!"},
        {category: "Synonyms", detail: ["POK-", "BTR"]},
    ];
    
    return(
        <>
            <section className="bg-white rounded shadow">
                <div className="flex md:flex-col gap-5 p-5 text-sm overflow-x-scroll">
                    {movieDetails.map((category, index) => {
                        return <div key={index} className="shrink-0">
                            <p className="text-gray-500">{category.category}</p>
                            <p className="text-gray-600">{category.detail}</p>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Details;