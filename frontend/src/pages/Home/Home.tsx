// components
import PosterSectionCard from "./PosterSectionCard";
import RecentReviews from "./RecentReviews";
import ForumActivity from "./ForumActivity";
import InProgress from "./InProgress";
import CurrentPoll from "./CurrentPoll";
import Activity from "./Activity";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";
import DesktopHeader from "../../components/DesktopHeader";

function Home(){
    
    return(
        <>
            <DesktopHeader />

            {/* page container */}
            <div className="flex justify-center px-5 pt-10 py-14 bg-gray-200">
                <div className="flex flex-col xl:flex-row gap-5 xl:gap-10 max-w-5xl 2xl:max-w-7xl w-full">
                    <div className="hidden xl:flex xl:flex-1">
                        <Activity page="Home" />
                    </div>

                    <div className="flex flex-col gap-5 xl:max-w-md w-full">
                        <CurrentPoll />
                        <InProgress />
                        <ForumActivity />
                        <RecentReviews />
                        <PosterSectionCard sectionHeader="Trending Anime & Manga" />
                        <PosterSectionCard sectionHeader="Newly Added Anime" />
                        <PosterSectionCard sectionHeader="Newly Added Manga" />
                    </div>

                    <div className="xl:hidden">
                        <Activity page="Home" />
                    </div>
                </div>
            </div>

            <FloatingNav />

            <Footer />
        </>
    );
};

export default Home;