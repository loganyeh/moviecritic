

function Footer(){
    const footerText = [
        ["Logout", "Donate", "AniList.co", "AniChart.net"],
        ["Apps", "Site Stats", "Recommendations", "API"],
        ["Discord", "Twitter", "Bluesky", "Facebook", "GitHub"],
        ["Add Data", "Moderators", "Contact", "Terms & Privacy", "Site Map"],
    ];

    return(
        <>
            <footer className="flex justify-center bg-gray-900">
                <div className="flex flex-col xl:flex-row xl:justify-between gap-6 p-8 md:p-10 xl:px-0 xl:py-12 max-w-5xl 2xl:max-w-7xl w-full text-base md:text-sm xl:text-base md:font-medium  text-white">
                    <div className="flex flex-col gap-3">
                        <p className="text-lg text-blue-400">Site Theme</p>   

                        <div className="flex gap-4">
                            {Array.from({ length: 4}).map((_, index) => {
                                return <div key={index} className="border flex justify-center items-center w-6 text-xl aspect-square rounded">
                                    <i className={index % 2 ? 'bx bxs-moon' : 'bx bx-moon'} ></i>
                                </div>
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-6 xl:gap-28">
                        {footerText.map((section, index) => {
                            return <div key={index} className="flex flex-col gap-2 xl:gap-4">

                                {section.map((text, index) => {
                                    return <div key={index}>
                                        <p className="text-gray-300">{text}</p>
                                    </div>
                                })}

                            </div>
                        })}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;