import DesktopHeader from "../../components/DesktopHeader";
import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";

function AnimeList(){

    return(
        <>  
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            <div className="border-2 border-red-600 h-screen bg-gray-200">this is the anime list page</div>
            {/* in desktop header add links to search and profile icon */}

            <FloatingNav />
            <Footer />
        
        </>
    );
};

export default AnimeList;