import DesktopHeader from "../../components/DesktopHeader";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";

function Browse(){


    return(
        <>
            <DesktopHeader />

            {/* Page Container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col gap-[28px] p-3 pt-4 pb-10 lg:px-5 xl:p-0 xl:py-12 max-w-5xl 2xl:max-w-7xl w-full">

                    {/* Browse Header */}
                    <section className="xl:hidden flex gap-5 text-4xl font-semibold text-gray-500">
                        <h1 className="p-1">Browse</h1>
                        <div className="flex items-center p-1 pl-3 bg-gray-300 rounded">
                            <h1>Anime</h1>
                            <i className='bx bx-chevron-down text-gray-400' ></i>
                        </div>
                    </section>

                    {/* Search Input */}
                    <section className="xl:hidden flex gap-4 items-center justify-between px-2">
                        <div className="flex gap-3 justify-start items-center px-3 w-full bg-white rounded-md shadow-md">
                            <i className='bx bx-search' ></i>
                            <input type="text" placeholder="Search" className="h-10 w-full text-sm font-light outline-none" />
                        </div>

                        <div className="flex justify-center items-center h-10 w-12 bg-white rounded-md shadow-md">
                            <i className='bx bx-slider text-2xl text-gray-400' ></i>
                        </div>
                    </section>

                    {/* Desktop Search Input */}
                    <section className="hidden xl:flex justify-between items-end">
                        <div className="flex gap-6">
                            {Array.from({length: 6}).map((_, index) => {
                                return <div key={index} className="flex flex-col gap-3">
                                    <p className="2xl:text-sm font-medium">Search</p>
                                    <div className="px-3 bg-white rounded shadow-md">
                                        <input type="text" placeholder="Any" className="h-10 w-36 2xl:text-sm outline-none"/>
                                    </div>
                                </div>
                            })}
                        </div>

                        <div className="flex justify-center items-center h-10 w-10 bg-white rounded shadow-md shrink-0">
                            <i className='bx bx-slider text-2xl' ></i>
                        </div>
                    </section>

                    {/* Trending Now */}
                    <section className="flex flex-col gap-5">
                        <div className="flex justify-between items-center tracking-wide">
                            <h2 className="text-lg font-medium">TRENDING NOW</h2>
                            <p className="text-xs font-medium">View All</p>
                        </div>
                        
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 2xl:grid-cols-6 gap-4 gap-y-5 xl:gap-10 2xl:gap-12">
                            {Array.from({length: 6}).map((_, index) => {
                                return <div key={index} className="flex flex-col gap-2.5">
                                    <div className="aspect-[3/4] bg-blue-300 rounded"></div>
                                    <p className="text-xs md:text-sm line-clamp-2">Re:ZERO - Starting Life in Another World</p>
                                </div>
                            })}
                        </div>
                    </section>

                    {/* Top 100 Anime */}
                    <section className="xl:hidden flex flex-col gap-5">
                        <div className="flex justify-between items-center tracking-wide">
                            <h2 className="text-lg font-medium">TRENDING NOW</h2>
                            <p className="text-xs font-medium">View All</p>
                        </div>
                        
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 gap-y-5">
                            {Array.from({length: 10}).map((_, index) => {
                                return <div key={index} className="flex flex-col gap-2.5">
                                    <div className="relative aspect-[3/4] bg-blue-300 rounded">
                                        <div className="absolute -top-1 -left-1 flex justify-center items-center h-6 w-6 text-sm bg-red-400 text-white rounded-full">#{index + 1}</div>
                                    </div>
                                    <p className="text-xs md:text-sm line-clamp-2">Re:ZERO - Starting Life in Another World</p>
                                </div>
                            })}
                        </div>
                    </section>

                    {/* Desktop Top 100 Anime */}
                    <section className="hidden xl:flex flex-col">
                        <div className="flex justify-between items-center tracking-wide">
                            <h2 className="text-lg font-medium">TOP 100 ANIME</h2>
                            <p className="text-xs font-medium">View All</p>
                        </div>

                        <div className="border-0 border-blue-600 flex gap-6 flex-col p-2">
                            {Array.from({length: 10}).map((_, index) => {
                                return <div key={index} className="flex">
                                    <div className="flex justify-center items-center px-6 text-2xl shrink-0">#{index + 1}</div>

                                    <div className="p-2.5 bg-white w-full rounded shadow-xl">
                                        <div className="flex h-16">
                                            <div className="h-full w-13 aspect-[3-4] bg-blue-300 rounded"></div>

                                            <div className="flex justify-between p-2 px-4 w-full">
                                                <div className="flex flex-col gap-1">
                                                    <p>Frieren: Beyond Journey's End</p>
                                                    <div className="text-[10px] text-white">
                                                        <p className="px-2 w-fit bg-green-500 rounded-full">adventure</p>
                                                    </div>
                                                </div>

                                                <div className="">
                                                    <div className="flex gap-12 pr-16 font-medium">
                                                        <div className="flex">
                                                            <div className="">
                                                                <i className='bx bx-smile'></i>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm">91%</p>
                                                                <p className="text-xs">442594 Users</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm">TV Show</p>
                                                            <p className="text-xs">28 Episodes</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm">Fall 2023</p>
                                                            <p className="text-xs">Finished</p>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        
                                        
                                    </div>

                                </div>
                            })}
                        </div>
                        
                    </section>
                    
                </div>
            </div>

            <FloatingNav />
            <Footer />
        </>
    )
};

export default Browse;