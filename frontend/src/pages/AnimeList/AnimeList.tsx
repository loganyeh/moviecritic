import DesktopHeader from "../../components/DesktopHeader";
import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";
import MobileListSearch from "./MobileListSearch";
import WatchingStatus from "./WatchingStatus";
import FilterType from "./FilterType";
import TabletListSearch from "./TabletListSearch";
import Lists from "./Lists";
import Filters from "./Filters";
import Year from "./Year";
import Sort from "./Sort";
import ShuffleBtn from "./ShuffleBtn";


function AnimeList(){

    return(
        <>  
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            <div className="flex justify-center bg-gray-200">
                <div className="flex justify-between gap-10 p-5 pb-16 md:p-[32px] md:pb-16 xl:px-0 max-w-5xl 2xl:max-w-7xl w-full bg-gray-200">
                    <div className="hidden md:flex flex-1 flex-col items-start gap-6">
                        <TabletListSearch />
                        <Lists />
                        <Filters />
                        <Year />
                        <Sort />
                        <ShuffleBtn />
                    </div>

                    <div className="flex flex-col gap-6 max-w-[475px] lg:max-w-[725px] xl:max-w-[800px] 2xl:max-w-[1040px] w-full shrink-0">
                        <div className="md:hidden">
                            <MobileListSearch />
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