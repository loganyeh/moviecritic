import { useState } from "react";

import PosterSectionCard from "./PosterSectionCard";

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
    const headerText = [
        { text: "Home" },
        { text: "Profile" },
        { text: "Anime List" },
        { text: "Manga List" },
        { text: "Browse" },
        { text: "Forum" },
    ]

    const handleNavClick = () => {
        setIsNav(!isNav);
        // console.log(isNav);
    };
    
    return(
        <>
            <header className="hidden xl:flex justify-center p-2.5 bg-gray-900 text-gray-300">
                <div className="flex justify-between items-center max-w-5xl 2xl:max-w-6xl w-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/AniList_logo.svg/1280px-AniList_logo.svg.png" className="w-12 aspect-square bg-blue-300" />
                    {/* <div className="w-12 aspect-square bg-blue-300"></div> */}

                    <div className="flex gap-10 items-center">
                        {headerText.map((text, index) => {
                            return <div key={index}>
                                <p className="text-sm">{text.text}</p>
                            </div>
                        })}
                    </div>

                    <div className="flex items-center gap-2">
                        <i className='bx bx-search text-2xl' ></i>
                        {/* <div className="w-10 aspect-square bg-blue-300 rounded"></div> */}
                        <img src="https://i.pinimg.com/736x/0c/8a/1f/0c8a1f42df3622a03adeded0e08c08a6.jpg" className="w-10 aspect-square bg-blue-300 rounded" />
                        <div className="flex justify-center items-center h-5 w-5 text-sm bg-red-400 text-white rounded-full">2</div>
                    </div>
                </div>

            </header>

            {/* page container */}
            <div className="flex justify-center px-5 pt-10 py-14 bg-gray-200">
                
                <div className="flex flex-col xl:flex-row gap-5 xl:gap-10 max-w-5xl 2xl:max-w-7xl w-full">

                    <div className="flex flex-col gap-5 xl:max-w-md w-full">
                        {/* Pop Up - Section */}
                        <section className="flex gap-2 p-3.5 rounded bg-gray-900 text-white">
                            
                            <div className="h-16 w-14 aspect-square bg-blue-300 shrink-0"></div>

                            <div className="flex flex-col flex-1 justify-center h-16">
                                <p>Guess the Anime: Winter 2026</p>
                                <p className="text-sm text-gray-400">Kusogaki's Guess the Anime is now live!</p>
                            </div>

                            {/* <i className='bx bx-x text-4xl'></i> */}
                        </section>

                        {/* In-Progress - Section */}
                        <section className="">
                            <h1 className="px-4 py-2 text-sm">In Progress</h1>

                            <div className="flex gap-5 xl:p-5 xl:bg-white overflow-x-scroll">
                                {Array.from({ length: 4 }).map((_, index) => {
                                    return <div key={index} className="border border-gray-100 xl:border-0 flex max-w-68 w-full xl:w-fit bg-white xl:bg-none shadow rounded shrink-0">
                                        <div className="w-22 aspect-[3/4] bg-blue-300 rounded-l xl:rounded shrink-0"></div>

                                        <div className="xl:hidden flex flex-col justify-between p-3 min-w-0 w-full">
                                            <p className="text-sm font-light line-clamp-2">BOCCHI THE ROCK!</p>
                                            <p className="text-xs font-light">Progress: 9/12 +</p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </section>

                        {/* Forum Activity */}
                        <section className="hidden xl:flex flex-col">
                            <h1 className="px-4 py-2 text-sm">Forum Activity</h1>

                            <div className="flex flex-col gap-5">
                                {Array.from({ length: 3 }).map((_, index) => {
                                    return <div key={index} className="flex justify-between bg-white shadow rounded">
                                        <div className="flex flex-col gap-2 p-5 text-sm">
                                            <p className="">Guess The Anime: Winter 2026 </p>
                                            <div className="flex gap-2 items-center">
                                                <div className="w-8 aspect-square bg-blue-300"></div>
                                                <p>Rukia</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-between items-center p-3">
                                            <div className="flex gap-3.5 text-xs">
                                                <div className="flex items-center gap-1">
                                                    <i className='bx bxs-bar-chart-alt-2'></i>
                                                    <p>25046</p>
                                                </div>

                                                <div className="flex items-center gap-1">
                                                    <i className='bx bxs-bar-chart-alt-2'></i>
                                                    <p>25046</p>
                                                </div>
                                            </div>

                                            <div className="flex justify-center items-center py-0.5 px-2 w-fit text-[10px] bg-orange-400 text-white rounded-full">forum games</div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </section>

                        {/* Recent Reviews */}
                        <section className="hidden xl:flex flex-col">
                            <h1 className="px-4 py-2 text-sm">Recent Reveiws</h1>

                            <div className="grid grid-cols-2 gap-6">
                                {Array.from({length: 4}).map((_, index) => {
                                    return <div key={index} className="bg-white rounded shadow">
                                        <div className="h-[88px] w-full aspect-video bg-blue-300 rounded-t"></div>

                                        <div className="flex flex-col justify-center gap-2 p-3">
                                            <p className="text-sm">Reviews of Days with My Stepsister by Rukia</p>
                                            <p className="text-xs line-clamp-5"> a grounded, entirely different, and surprising tone. However, the show's determination to avoid clichés unfortunately fails to deliver the same success when it comes to processing the plot in an engaging and satisfying manner.</p>
                                            <div className="flex justify-end items-center gap-1 text-xs">
                                                <i className='bx bxs-like' ></i>
                                                <p>5</p>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </section>

                        {/* Trending Anime & Manga */}
                        <PosterSectionCard sectionHeader="Trending Anime & Manga" />
                        <PosterSectionCard sectionHeader="Newly Added Anime" />
                        <PosterSectionCard sectionHeader="Newly Added Manga" />

                    </div>

                    {/* Activity - Section */}
                    <section className="flex flex-col gap-4 w-full">
                        <div className="flex justify-between items-center">
                            <h1 className="px-4 py-2 text-sm">Activity</h1>

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
                                    <div className="w-20 aspect-[3/4] bg-blue-300 rounded-l"></div>

                                    <div className="flex justify-between gap-2 p-3.5 w-full bg-white rounded">
                                        <div className="flex flex-col gap-2 justify-between text-xs">
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

            </div>

            {/* floating home nav */}
            <section className="xl:hidden fixed bottom-5 right-5 flex justify-center items-center bg-white rounded shadow-2xl">
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

            <footer className="flex justify-center bg-gray-900">
                <div className="flex flex-col xl:flex-row xl:justify-between gap-6 p-8 md:p-10 xl:px-0 xl:py-12 max-w-5xl 2xl:max-w-7xl w-full text-base md:text-sm xl:text-base md:font-medium  text-white">
                    <div className="flex flex-col gap-3">
                        <p className="text-lg text-blue-400">Site Theme</p>   

                        <div className="flex gap-4">
                            {Array.from({ length: 4}).map((_, index) => {
                                return <div key={index} className="border w-6 aspect-square rounded">
                                    
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

export default Home;