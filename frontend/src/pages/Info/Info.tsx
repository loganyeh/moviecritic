import DesktopHeader from "../../components/DesktopHeader";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";
import MovieBanner from "./MovieBanner";
import Details from "./Details";
import Description from "./Description";
import Relations from "./Relations";
import Characters from "./Characters";
import Staff from "./Staff";
import StatusDistribution from "./StatusDistribution";
import ScoreDistribution from "./ScoreDistribution";
import Following from "./Following";
import Recommendations from "./Recommendations";
import Threads from "./Threads";
import Streaming from "./Streaming";
import Watch from "./Watch";
import Tags from "./Tags";
import Reviews from "./Reviews";
import Trailer from "./Trailer";

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
            <div className="flex justify-center bg-gray-200">
                <div className="flex flex-col md:flex-row gap-10 p-5 md:px-[32px] xl:px-0 py-10 pb-24 max-w-5xl 2xl:max-w-7xl w-full">
                    <div className="flex flex-col gap-10 md:gap-5 shrink-0">
                        {/* AllTime */}
                        <div className="hidden md:flex flex-col gap-4">
                            <section className="flex justify-around items-center px-2 py-1 bg-white rounded">
                                <div>
                                    <i className='bx bxs-star text-yellow-300'></i>
                                </div>
                                <p className="text-xs font-medium text-gray-600">#36 Highest Rated All Time</p>
                            </section>
                            <section className="hidden md:flex justify-around items-center px-2 py-1 bg-white rounded">
                                <div>
                                    <i className='bx bxs-heart text-red-600'></i>
                                </div>
                                <p className="text-xs font-medium text-gray-600">#36 Highest Rated All Time</p>
                            </section>
                        </div>
                        <Details />
                        <div className="hidden md:flex flex-col gap-10 md:gap-5">
                            <Tags />
                            {/* Write a Review */}
                            <section className="hidden md:flex flex-col gap-3">
                                <button className="relative flex p-1.5 w-full bg-blue-400 text-white rounded">
                                    <div className="flex justify-center items-center">
                                        <i className='bx bxs-edit text-lg' ></i>
                                    </div>
                                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-light">Write Review</p>
                                </button>

                                <button className="relative flex p-1.5 w-full bg-blue-400 text-white rounded">
                                    <div className="flex justify-center items-center">
                                        <i className='bx bxs-pencil text-lg' ></i>
                                    </div>
                                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-light">Edit</p>
                                </button>
                            </section>
                            <Streaming />
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 md:gap-[32px] lg:flex-1">

                        <div className="md:hidden">
                            <Description />
                        </div>

                        <Relations />
                        <Characters />
                        <Staff />

                        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 md:gap-[32px]">
                            <StatusDistribution />
                            <ScoreDistribution />
                        </div>

                        <div className="xl:hidden">
                            <Trailer />
                        </div>

                        <div className="hidden xl:grid grid-cols-2 gap-10 md:gap-[32px]">
                            <Trailer />
                            <Following />
                        </div>

                        <Watch />

                        <div className="xl:hidden flex flex-col xl:grid xl:grid-cols-2 gap-10 md:gap-[32px]">
                            <Following />
                        </div>

                        <Recommendations />

                        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 md:gap-[32px]">
                            <Threads />
                            <Reviews />
                        </div>

                        <div className="md:hidden flex flex-col gap-10">
                            <Streaming />
                            <Tags />
                        </div>
                    </div>

                </div>
            </div>

            <FloatingNav />
            <Footer />
        </>
    );
};

export default Info;