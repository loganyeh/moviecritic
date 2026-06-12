import DesktopHeader from "../../../components/DesktopHeader";
import FloatingNav from "../../../components/FloatingNav";
import Footer from "../../../components/Footer";

import Activity from "../../Home/Activity";

function Overview(){
    const profileNav = [
        { text: 'Overview', route: '/'},
        { text: 'Anime List', route: '/'},
        { text: 'Manga List', route: '/'},
        { text: 'Favorites', route: '/'},
        { text: 'Stats', route: '/'},
        { text: 'Social', route: '/'},
        { text: 'Reviews', route: '/'},
        { text: 'Submissions', route: '/'},
    ];

    return(
        <>
            <DesktopHeader />

            {/* Profile Banner */}
            <div className="flex justify-center bg-blue-300">
                <section className="flex gap-4 lg:gap-5 items-end px-6 xl:px-0 aspect-video md:aspect-[16/7] lg:aspect-[16/5] xl:aspect-[16/4] 2xl:aspect-[16/3] max-w-5xl 2xl:max-w-7xl w-full">
                    <img src="https://i.pinimg.com/736x/0c/8a/1f/0c8a1f42df3622a03adeded0e08c08a6.jpg" className="w-28 md:w-36 aspect-square bg-blue-300 rounded-t" />
                    <p className="py-3 text-lg font-bold">Hanni</p>
                </section>
            </div>

            {/* Profile Nav */}
            <section className="bg-white">
                <div className="flex md:justify-center gap-x-10 md:gap-x-12 md:gap-y-5 px-12 py-4 lg:py-3 overflow-x-scroll md:flex-wrap">
                    {profileNav.map((nav, index) => {
                        return <div key={index} className={`${index === 0 ? "text-blue-400" : "text-gray-500"} text-sm font-semibold shrink-0`}>
                            {nav.text}
                        </div>
                    })}
                </div>
            </section>

            {/* page container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 px-5 md:px-[32px] py-[32px] pb-16 xl:px-0 max-w-5xl 2xl:max-w-7xl w-full">

                    <div className="hidden xl:flex flex-col gap-5 max-w-sm 2xl:max-w-lg w-full">
                        {/* Activity History */}
                        <section className="flex flex-col gap-2 w-full">
                            <h1 className="px-4 text-sm font-medium">Activity History</h1>

                            <div className="grid grid-cols-24 gap-2 p-5 bg-white rounded shadow">
                                {Array.from({length: 168}).map((_, index) => {
                                    return <div key={index} className="w-2.5 aspect-square bg-red-300 rounded-sm">

                                    </div>
                                })}
                            </div>
                        </section>

                        {/* Genre Overview */}
                        <section className="flex flex-col gap-2">
                            <h1 className="px-4 text-sm font-medium">Genre Overview</h1>
                            
                            <div>
                                <div className="flex justify-between p-6 bg-white rounded-t shadow">
                                    
                                    <div className="flex flex-col gap-1.5 items-center w-fit">
                                        <p className="flex justify-center items-center px-2 py-0.5 text-sm bg-green-500 text-white rounded">Comedy</p>
                                        <p className="text-xs">51 Entries</p>
                                    </div>
                                    <div className="flex flex-col gap-1.5 items-center w-fit">
                                        <p className="flex justify-center items-center px-2 py-0.5 text-sm bg-blue-500 text-white rounded">Action</p>
                                        <p className="text-xs">46 Entries</p>
                                    </div>
                                    <div className="flex flex-col gap-1.5 items-center w-fit">
                                        <p className="flex justify-center items-center px-2 py-0.5 text-sm bg-purple-500 text-white rounded">Supernatural</p>
                                        <p className="text-xs">38 Entries</p>
                                    </div>
                                    <div className="flex flex-col gap-1.5 items-center w-fit">
                                        <p className="flex justify-center items-center px-2 py-0.5 text-sm bg-pink-400 text-white rounded">Drama</p>
                                        <p className="text-xs">33 Entries</p>
                                    </div>

                                </div>        

                                <div className="flex h-3">
                                    <div className="h-full w-3/12 bg-green-500 rounded-bl"></div>
                                    <div className="h-full w-2/12 bg-blue-500"></div>
                                    <div className="h-full w-2/12 bg-purple-500"></div>
                                    <div className="h-full w-3/12 bg-pink-400"></div>
                                    <div className="h-full w-1/12 bg-red-500"></div>
                                    <div className="h-full w-1/12 bg-orange-500 rounded-br"></div>
                                </div>
                            </div>

                        </section>

                        {/* Favorite Block */}
                        {Array.from({length: 2}).map((_, index) => {
                            return <section key={index} className="flex flex-col gap-2">
                                <h1 className="px-4 text-sm font-medium">Anime</h1>

                                <div className="grid grid-cols-4 2xl:grid-cols-5 p-4 gap-4 bg-white">
                                    {Array.from({length: 8}).map((_, index) => {
                                        return <div key={index} className="w-[76px] aspect-[3/4] bg-blue-300 rounded"></div>
                                    })}
                                </div>
                                
                            </section>
                        })}

                    </div>

                    <div className="flex flex-col xl:flex-1 gap-6">
                        {/* Watch Stat Tracker */}
                        <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 gap-6">
                            {Array.from({length: 2}).map((_, index) => {
                                return <section key={index} className="bg-white rounded shadow">
                                    <div className="flex justify-around py-6 2xl:py-3">
                                        <div className="flex gap-2 flex-col items-center">
                                            <p className="text-sm font-semibold text-blue-400">75</p>
                                            <p className="text-xs font-medium">Total Anime</p>
                                        </div>
                                        <div className="flex gap-2 flex-col items-center">
                                            <p className="text-sm font-semibold text-blue-400">28.6</p>
                                            <p className="text-xs font-medium">Days Watched</p>
                                        </div>
                                        <div className="flex gap-2 flex-col items-center">
                                            <p className="text-sm font-semibold text-blue-400">78.2</p>
                                            <p className="text-xs font-medium">Mean Score</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-around py-2 text-xs bg-gray-200">
                                        <p>10</p>
                                        <p>30</p>
                                        <p>50</p>
                                    </div>

                                    <div className="bg-gray-300">
                                        <div className="h-2.5 w-1/2 bg-blue-400 rounded-r"></div>
                                    </div>
                                </section>
                            })}
                        </div>

                        <Activity page="Overview" />
                    </div>
                </div>
            </div>
        
            <FloatingNav />
            <Footer />
        </>
    );
};

export default Overview;