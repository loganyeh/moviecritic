import { useState } from "react";

function Home(){
    const [isNav, setIsNav] = useState(false);
    const footerText = [
        ["Logout", "Donate", "AniList.co", "AniChart.net"],
        ["Apps", "Site Stats", "Recommendations", "API"],
        ["Discord", "Twitter", "Bluesky", "Facebook", "GitHub"],
        ["Add Data", "Moderators", "Contact", "Terms & Privacy", "Site Map"],
    ];
    const navIcons = [
        { icon: 'bx bxs-home', text: 'home' },
        { icon: 'bx bx-play', text: 'anime list' },
        { icon: 'bx bxs-book-alt', text: 'manga list' },
        { icon: 'bx bxs-chat', text: 'forum' },
        { icon: 'bx bxs-user', text: 'profile' },
        { icon: 'bx bxs-envelope', text: 'notifications' },
        { icon: 'bx bxs-cog', text: 'settings' },
        { icon: 'bx bx-search', text: 'search' },
        { icon: 'bx bx-x', text: '' },
    ];

    const handleNavClick = () => {
        setIsNav(!isNav);
        // console.log(isNav);
    };
    
    return(
        <>
            {/* page container */}
            <div className="flex flex-col gap-5 px-5 pt-10 py-14 bg-gray-100">

                {/* Pop Up - Section */}
                <section className="flex gap-2 p-3.5 rounded bg-zinc-800 text-white">
                    
                    <div className="h-16 w-14 aspect-square bg-blue-300 shrink-0"></div>

                    <div className="flex flex-col flex-1 justify-center h-16">
                        <p>Guess the Anime: Winter 2026</p>
                        <p className="text-sm text-gray-400">Kusogaki's Guess the Anime is now live!</p>
                    </div>

                    {/* <i className='bx bx-x text-4xl'></i> */}
                </section>

                {/* In-Progress - Section */}
                <section className="">
                    <h1 className="px-4 py-1 text-sm">In Progress</h1>

                    <div className="flex gap-6 overflow-x-scroll">
                        {Array.from({ length: 2 }).map((_, index) => {
                            return <div key={index} className="border border-gray-100 flex max-w-68 w-full bg-white shadow rounded shrink-0">
                                <div className="w-22 aspect-[3/4] bg-blue-300 rounded-l shrink-0"></div>

                                <div className="flex flex-col justify-between p-3 min-w-0 w-full">
                                    <p className="text-sm font-light line-clamp-2">BOCCHI THE ROCK!</p>
                                    <p className="text-xs font-light">Progress: 9/12 +</p>
                                </div>
                            </div>
                        })}
                    </div>
                </section>

                {/* Activity - Section */}
                <section className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h1 className="px-4 py-1 text-sm">Activity</h1>

                        <div className="flex gap-2 items-center">
                            <i className='bx bxs-filter-alt text-base'></i>

                            <div className="flex text-xs font-light bg-white rounded">
                                <p className="px-3 py-1.5 font-medium">Following</p>
                                <p className="px-3 py-1.5">Global</p>
                            </div>
                        </div>
                    </div>

                    <input type="text" className="px-4 py-2 text-sm bg-white rounded" placeholder="Write a status..." />

                    <div className="flex flex-col gap-5">
                    {/* <div className="border border-red-600 flex flex-col gap-5"> */}

                        {Array.from({ length: 2 }).map((_, index) => {
                            return <div key={index} className="flex rounded shadow">
                                <div className="w-28 aspect-[3/4] bg-blue-300 rounded-l"></div>

                                <div className="flex justify-between gap-2 p-3.5 w-full bg-white rounded">
                                    <div className="flex flex-col gap-2 justify-between text-sm">
                                        <p className="text-blue-300">jujune</p>
                                        <p>Plans to watch Frieren: Beyond Journey's End Season 2</p>
                                        <div className="w-10 aspect-square bg-blue-300 rounded"></div>
                                    </div>

                                    <div className="flex flex-col justify-between items-end text-[11px] shrink-0">
                                        <time className="font-semibold">1 week ago</time>

                                        <div className="flex gap-2 text-sm">
                                            <i className='bx bxs-chat' ></i>
                                            <i className='bx bxs-heart' ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>

                    <button className="p-3.5 text-sm font-semibold bg-white rounded shadow">Load More</button>

                </section>

            </div>

            {/* floating home nav */}
            <section className="fixed bottom-5 right-5 flex justify-center items-center bg-white rounded shadow-2xl">
                {!isNav && <i onClick={() => handleNavClick()} className='bx bx-menu p-0.5 text-blue-400 text-5xl' ></i>}

                {isNav && <div className="border border-gray-100 grid grid-cols-3 gap-3 px-2 py-4 rounded shadow">
                    {navIcons.map((nav, index) => {
                        return <div key={index} className="flex gap-1 flex-col justify-center items-center">
                            <i onClick={index === 8 ? handleNavClick : undefined} className={`${nav.icon} text-3xl`} ></i>
                            <p className="text-[10px] font-medium">{nav.text}</p>
                        </div>
                    })}
                </div>}
            </section>

            <footer className="flex flex-col gap-6 p-8 md:p-10 text-base md:text-sm md:font-medium bg-zinc-800 text-white">
                <div className="flex flex-col gap-3">
                    <p className="text-lg text-blue-400">Site Theme</p>   

                    <div className="flex gap-4">
                        {Array.from({ length: 4}).map((_, index) => {
                            return <div key={index} className="border w-6 aspect-square rounded">
                                
                            </div>
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {footerText.map((section, index) => {
                        return <div key={index} className="flex flex-col gap-2">

                            {section.map((text, index) => {
                                return <div key={index}>
                                    <p className="text-gray-300">{text}</p>
                                </div>
                            })}

                        </div>
                    })}
                </div>

            </footer>
        </>
    );
};

export default Home;