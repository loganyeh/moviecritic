

function Characters(){
    const characters = [
        {character: 'Luffy D. Monkey', voicedBy: 'Mayumi Tanaka', lead: 'Main', nativeLanguage: 'Japanese'},
        {character: 'Robin Nico', voicedBy: 'Yuriko Yamaguchi', lead: 'Main', nativeLanguage: 'Japanese'},
        {character: 'Zoro Roronoa', voicedBy: 'Kazuya Nakai', lead: 'Main', nativeLanguage: 'Japanese'},
        {character: 'Franky', voicedBy: 'Kazuki Yao', lead: 'Main', nativeLanguage: 'Japanese'},
        {character: 'Sanji', voicedBy: 'Hiroaki Hirata', lead: 'Main', nativeLanguage: 'Japanese'},
        {character: 'Chopper Tony Tony', voicedBy: 'Ikue Ootani', lead: 'Main', nativeLanguage: 'Japanese'},
    ];

    return(
        <>
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-gray-600">Characters</h2>

                <div className="flex flex-col xl:grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-x-[32px]">
                    {characters.map((character, index) => {
                        return <div key={index} className="flex justify-between shadow">
                            <div className="h-20 w-16 apsect-[3/4] bg-blue-300 rounded-l"></div>

                            <div className="flex flex-col justify-between flex-1 p-2.5 font-light bg-white">
                                <div className="flex justify-between text-xs">
                                    <p className="text-gray-600">{character.character}</p>
                                    <p className="text-gray-600">{character.voicedBy}</p>
                                </div>

                                <div className="flex justify-between text-[11px]">
                                    <p className="text-gray-500">{character.lead}</p>
                                    <p className="text-gray-500">{character.nativeLanguage}</p>
                                </div>
                                
                            </div>

                            <div className="h-20 w-16 apsect-[3/4] bg-red-300 rounded-r"></div>
                        </div>
                    })}
                </div>
            </section>
        
        </>
    );
};

export default Characters;