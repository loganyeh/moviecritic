import DesktopHeader from "../../components/DesktopHeader";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";
import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import FavoritesCard from "./FavoritesCard";

function Favorites(){

    return(
        <>
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            <div className="flex flex-col items-center gap-10 px-6 py-10 pb-16 bg-gray-200">
                <FavoritesCard sectionName="Anime" />
                <FavoritesCard sectionName="Characters" />
            </div>

            <FloatingNav />
            <Footer />
        </>
    );
};

export default Favorites