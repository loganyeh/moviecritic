// Comp Imports
import DesktopHeader from "../../components/DesktopHeader";
import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";

function Reviews(){

    return(
        <>
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            {/* page container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col md:flex-row gap-[32px] md:px-[32px] xl:px-0 pt-8 md:pt-10 md:pb-28 w-full max-w-5xl 2xl:max-w-7xl">
                    <div className="flex flex-1 justify-center items-center">
                        <p className="pb-96 text-xl text-gray-500">No reviews yet ｡ﾟヽ(ﾟ´Д｀)ﾉﾟ｡</p>
                    </div>
                </div>
            </div>

            <FloatingNav />
            <Footer />
        
        </>
    );
};

export default Reviews;