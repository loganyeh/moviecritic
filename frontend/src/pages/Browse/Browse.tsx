import DesktopHeader from "../../components/DesktopHeader";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";

function Browse(){


    return(
        <>
            <DesktopHeader />

            {/* Page Container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col gap-[28px] p-3 pt-4 pb-10 lg:px-5 xl:p-0 xl:py-10 max-w-5xl w-full">

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
                            {Array.from({length: 5}).map((_, index) => {
                                return <div key={index} className="flex flex-col gap-3">
                                    <p className="font-medium">Search</p>
                                    <div className="px-3 bg-white rounded shadow-md">
                                        <input type="text" placeholder="Any" className="h-10 w-36 outline-none"/>
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
                        
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 gap-4 gap-y-5 xl:gap-10">
                            {Array.from({length: 5}).map((_, index) => {
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
                                        <div className="absolute -top-1 -left-1 flex justify-center items-center h-6 w-6 text-sm bg-red-400 text-white rounded-full">#1</div>
                                    </div>
                                    <p className="text-xs md:text-sm line-clamp-2">Re:ZERO - Starting Life in Another World</p>
                                </div>
                            })}
                        </div>
                    </section>

                    {/* Desktop Top 100 Anime */}
                    <section className="">
                        <div className="flex justify-between items-center tracking-wide">
                            <h2 className="text-lg font-medium">TOP 100 ANIME</h2>
                            <p className="text-xs font-medium">View All</p>
                        </div>

                        <div className="border">
                            {Array.from({length: 1}).map((_, index) => {
                                return <div key={index}>
                                    <div className="border w-fit p-6 text-xl font-semibold">#1</div>

                                    <div>
                                        
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