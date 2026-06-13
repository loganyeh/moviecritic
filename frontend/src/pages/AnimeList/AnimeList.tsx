import DesktopHeader from "../../components/DesktopHeader";
import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";
import ListSearch from "./ListSearch";
import WatchingStatus from "./WatchingStatus";
import FilterType from "./FilterType";


function AnimeList(){
    const listCategories = ["All", "Watching", "Completed", "Paused", "Dropped", "Planning"];
    const filterCategories = ["Format", "Status", "Genres", "Country"];

    return(
        <>  
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            <div className="flex justify-center bg-gray-200">
                <div className="flex justify-between gap-10 p-5 pb-16 md:p-[32px] md:pb-16 xl:px-0 max-w-5xl 2xl:max-w-7xl w-full bg-gray-200">
                    
                    <div className="hidden md:flex flex-1 flex-col items-start gap-6">

                        {/* Filter */}
                        <section className="flex items-center w-full bg-white text-gray-500 rounded shadow">
                            <div className="flex justify-center items-center p-3">
                                <i className='bx bx-search text-lg'></i>
                            </div>
                            <div className="w-full">Filter</div>
                        </section>

                        {/* Lists */}
                        <section className="flex flex-col gap-3 w-full text-gray-500">
                            <p className="">Lists</p>

                            <div className="flex flex-col gap-3 pl-2">
                                {listCategories.map((category, index) => {
                                    return <div key={index} className={`${index === 0 ? "w-full bg-white rounded shadow" : ""} pl-3`}>
                                        {category}
                                    </div>
                                })}
                            </div>
                        </section>

                        {/* Filters */}
                        <section className="flex flex-col gap-3 w-full text-gray-600">
                            <p className="">Filters</p>

                            <div className="flex flex-col gap-3 pl-2">
                                {filterCategories.map((category, index) => {
                                    return <div key={index} className={`flex justify-between items-center px-3 py-2 bg-white text-gray-500 rounded shadow`}>
                                        <p className="text-sm">{category}</p>
                                        <i className='bx bx-chevron-down text-xl' ></i>
                                    </div>
                                })}
                            </div>
                        </section>

                        {/* Year */}
                        <section className="flex flex-col gap-3 w-full text-gray-600">
                            <p className="">Year</p>

                            <div className="flex items-center">
                                <div className="border-2 border-blue-400 w-5 aspect-square bg-white rounded-full"></div>
                                <div className="flex w-full h-2 bg-white rounded"></div>
                            </div>
                        </section>

                        {/* Sort */}
                        <section className="flex flex-col gap-3 w-full text-gray-600">
                            <p className="">Sort</p>

                            <div className={`flex justify-between items-center px-3 py-2 bg-white text-gray-500 rounded shadow`}>
                                <p className="text-sm">Score</p>
                                <i className='bx bx-chevron-down text-xl' ></i>
                            </div>
                        </section>

                        {/* Shuffle Button */}
                        <button className="flex justify-center items-center p-1.5 bg-blue-400 rounded">
                            <i className='bx bx-shuffle text-white text-xl' ></i>
                        </button>
                        
                    </div>

                    <div className="flex flex-col gap-6 max-w-[475px] lg:max-w-[725px] xl:max-w-[800px] 2xl:max-w-5xl w-full shrink-0">
                        <div className="md:hidden">
                            <ListSearch />
                        </div>

                        <div className="flex flex-col gap-10">
                            <div>
                                <div className="hidden md:flex justify-end">
                                    <FilterType />
                                </div>
                                <WatchingStatus sectionName="Watching" />
                            </div>

                            <WatchingStatus sectionName="Completed" />
                            <WatchingStatus sectionName="Paused" />
                            <WatchingStatus sectionName="Dropped" />
                            <WatchingStatus sectionName="Planning" />
                        </div>

                    </div>
                </div>
            </div>

            <FloatingNav />
            <Footer />
        
        </>
    );
};

export default AnimeList;