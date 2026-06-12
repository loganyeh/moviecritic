import DesktopHeader from "../../components/DesktopHeader";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";

import BrowseDropdown from "./BrowseDropdown";
import DesktopSearch from "./DesktopSearch";
import DesktopTopList from "./DesktopTopList";
import MobileSearch from "./MobileSearch";
import MobileTopList from "./MobileTopList";
import CurrentMovies from "./CurrentMovies";

function Browse(){


    return(
        <>
            <DesktopHeader />

            {/* Page Container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col gap-[28px] 2xl:gap-10 p-3 pt-4 pb-10 lg:px-5 xl:p-0 xl:py-12 max-w-5xl 2xl:max-w-7xl w-full">
                    <BrowseDropdown />
                    <MobileSearch />

                    <DesktopSearch />

                    <div className="flex flex-col gap-12">
                        <CurrentMovies categoryName="TRENDING NOW" />
                        <CurrentMovies categoryName="POPULAR THIS SEASON" />
                        <CurrentMovies categoryName="UPCOMING NEXT SEASON" />
                        <CurrentMovies categoryName="ALL TIME POPULAR" />
                    </div>

                    <MobileTopList />
                    <DesktopTopList />
                </div>
            </div>

            <FloatingNav />
            <Footer />
        </>
    )
};

export default Browse;