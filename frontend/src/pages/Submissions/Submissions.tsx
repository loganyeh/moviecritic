// Comp Imports
import DesktopHeader from "../../components/DesktopHeader";
import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";
import Lists from "../AnimeList/Lists";

function Submissions(){
    const submissionsList = ["Anime", "Manga", "Characters", "Staff"];

    return(
        <>
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            {/* page container */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col md:flex-row gap-[32px] md:px-[32px] xl:px-0 md:pt-10 md:pb-28 w-full max-w-5xl 2xl:max-w-7xl">
                    {/* Left Side */}
                    <div className="flex gap-6 flex-col p-6 md:p-0 w-full md:max-w-[175px]">
                        <Lists title="Submissions" categories={submissionsList} />
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-1 justify-center items-center">
                        <p className="pt-12 pb-96 text-xl text-gray-500">No anime submissions yet (◕︿◕✿)
</p>
                    </div>
                </div>
            </div>

            <FloatingNav />
            <Footer />
        
        </>
    );
};

export default Submissions;