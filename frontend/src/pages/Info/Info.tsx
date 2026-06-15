import DesktopHeader from "../../components/DesktopHeader";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";
import ProfileNav from "../../components/ProfileNav";
import MovieBanner from "./MovieBanner";
import Details from "./Details";
import Description from "./Description";
import Relations from "./Relations";
import Characters from "./Characters";
import StatusDistribution from "./StatusDistribution";
import ScoreDistribution from "./ScoreDistribution";
import Following from "./Following";
import Recommendations from "./Recommendations";
import Threads from "./Threads";
import Streaming from "./Streaming";
import Watch from "./Watch";
import Tags from "./Tags";

function Info(){
    const infoNav = [
        { text: 'Overview', route: '/overview'},
        { text: 'Watch', route: '/animelist'},
        { text: 'Characters', route: '/animelist'},
        { text: 'Staff', route: '/favorites'},
        { text: 'Reviews', route: '/overview'},
        { text: 'Stats', route: '/overview'},
        { text: 'Social', route: '/overview'},
    ];

    return(
        <>
            <DesktopHeader />
            <MovieBanner />

            <div className="flex flex-col md:flex-row gap-5 p-5 pb-0">
                <div className="md:max-w-[275px] md:w-full">
                    {/* Movie Watch Status */}
                    <section className="relative flex justify-end">
                        <div className="md:hidden absolute -top-27 left-0 h-36 w-25 bg-red-300 rounded"></div>

                        <div className="flex gap-4">
                            <div className="flex justify-center items-center px-12 bg-blue-400 text-white rounded">Watching</div>
                            <div className="flex justify-center items-center bg-red-600 rounded">
                                <i className='bx bxs-heart p-2 aspect-square text-lg text-white' ></i>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex-1">
                    {/* Movie Title */}
                    <section className="">
                        <h1 className="text-lg font-semibold md:font-normal text-gray-600">ONE PIECE</h1>
                    </section>

                    {/* Description */}
                    <p className="hidden md:block text-sm bg-white text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur nisi dicta modi, nihil nemo optio id, praesentium ex tempora animi 
                        laboriosam sunt totam ea nesciunt alias blanditiis vel fugit nam!
                        laboriosam sunt totam ea nesciunt alias blanditiis vel fugit nam!
                        laboriosam sunt totam ea nesciunt alias blanditiis vel fugit nam!
                        laboriosam sunt totam ea nesciunt alias blanditiis vel fugit nam!
                        laboriosam sunt totam ea nesciunt alias blanditiis vel fugit nam!
                        laboriosam sunt totam ea nesciunt alias blanditiis vel fugit nam!
                        laboriosam sunt totam ea nesciunt alias blanditiis vel fugit nam!
                    </p>

                    {/* Info Nav Texts */}
                    <section>
                        <div className="flex overflow-x-scroll">
                            {infoNav.map((nav, index) => {
                                return <div key={index} className="px-3 py-3 text-sm font-light text-gray-600">
                                    {nav.text}
                                </div>
                            })}
                        </div>
                    </section>
                </div>
            </div>

            {/* page container */}
            <div className="flex flex-col gap-10 p-5 py-10 pb-24 bg-gray-200">
                <Details />
                <Description />
                <Relations />
                <Characters />
                <StatusDistribution />
                <ScoreDistribution />
                <Watch />
                <Following />
                <Recommendations />
                <Threads />
                <Streaming />
                <Tags />
            </div>

            <FloatingNav />
            <Footer />
        </>
    );
};

export default Info;