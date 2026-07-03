import { Link } from "react-router-dom";

function DesktopHeader(){
    const headerText = [
        { text: "Home", route: "/" },
        { text: "Profile", route: "/overview" },
        { text: "Anime List", route: "/animelist" },
        { text: "Manga List", route: "/animelist" },
        { text: "Browse", route: "/browse" },
        { text: "Forum", route: "/" },
    ];

    return(
        <>
            <header className="hidden xl:flex justify-center p-2.5 bg-gray-900 text-gray-300">
                <div className="flex justify-between items-center max-w-5xl 2xl:max-w-6xl w-full">
                    <Link to={'/'}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/AniList_logo.svg/1280px-AniList_logo.svg.png" className="w-12 aspect-square bg-blue-300" />
                    </Link>

                    <div className="flex gap-10 items-center">
                        {headerText.map((text, index) => {
                            return <Link key={index} to={text.route} className="hover:text-white">
                                <p className="text-sm">{text.text}</p>
                            </Link>
                        })}
                    </div>

                    <div className="flex items-center gap-2">
                        <Link to={'/browse'} className="flex justify-center items-center hover:text-white">
                            <i className='bx bx-search text-2xl' ></i>
                        </Link>

                        <Link to={'/overview'} className="flex justify-center items-center">
                            <img src="https://i.pinimg.com/736x/0c/8a/1f/0c8a1f42df3622a03adeded0e08c08a6.jpg" className="w-10 aspect-square bg-gray-300 rounded" />
                        </Link>
                        <div className="flex justify-center items-center h-5 w-5 text-sm bg-red-400 text-white rounded-full">2</div>
                    </div>
                </div>

            </header>
        </>
    );
};

export default DesktopHeader;