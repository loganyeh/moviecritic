

function Streaming(){
    const streamingLinks = [
        { logo: 'bx bx-link', bgColor: 'bg-blue-500', site: 'Official Site', region: 'JP' },
        { logo: 'bx bxl-instagram', bgColor: 'bg-purple-500', site: 'Instagram', region: 'JP' },
        { logo: 'bx bxl-twitter', bgColor: 'bg-black', site: 'Twitter', region: 'JP' },
        { logo: 'bx bx-tv', bgColor: 'bg-blue-300', site: 'Bilibili TV', region: '' },
        { logo: 'bx bx-tennis-ball', bgColor: 'bg-orange-500', site: 'Crunchyroll', region: '' },
        { logo: 'bx bxl-unity', bgColor: 'bg-blue-500', site: 'Hoopla', region: '' },
        { logo: 'bx bxl-facebook-circle', bgColor: 'bg-green-500', site: 'Hulu', region: '' },
        { logo: 'bx bxl-medium', bgColor: 'bg-red-600', site: 'Netflix', region: '' },
        { logo: 'bx bxl-play-store', bgColor: 'bg-blue-500', site: 'WeTV', region: '' },
        { logo: 'bx bxl-youtube', bgColor: 'bg-red-600', site: 'Youtube', region: '(JP)' },
        { logo: 'bx bxl-youtube', bgColor: 'bg-red-600', site: 'Youtube', region: '(EN)' },
        { logo: 'bx bxl-audible', bgColor: 'bg-green-500', site: 'iQ', region: '' },
    ];

    return(
        <>
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-gray-600">External & Streaming Links</h2>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {streamingLinks.map((link, index) => {
                        return <div key={index} className="flex items-center gap-2.5 bg-white rounded shadow">
                            <div className={`flex justify-center items-center p-0.5 w-fit ${link.bgColor} rounded`}>
                                <i className={`${link.logo} text-2xl text-white`} ></i>
                            </div>

                            <div className="flex items-end gap-1">
                                <p className="text-xs font-semibold text-gray-600">{link.site}</p>
                                <p className="text-[10px] font-medium text-gray-500">{link.region}</p>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Streaming;