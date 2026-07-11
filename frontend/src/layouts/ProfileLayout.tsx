import { Outlet } from "react-router-dom";
import DesktopHeader from "../components/DesktopHeader";
import ProfileBanner from "../pages/Overview/ProfileBanner";
import ProfileNav from "../components/ProfileNav";
import Footer from "../components/Footer";
import FloatingNav from "../components/FloatingNav";

function ProfileLayout(){

    return(
        <>
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            {/*  */}
            <Outlet />

            <Footer />
            <FloatingNav />
        </>
    );
};

export default ProfileLayout;