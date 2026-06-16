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

            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row gap-[32px] p-5 md:p-[32px] md:pb-0 pb-0 xl:px-0 max-w-5xl 2xl:max-w-7xl w-full">
                    <div className="md:max-w-[275px] md:w-fit">
                        {/* Movie Watch Status */}
                        <section className="relative flex justify-end md:items-end md:gap-5 md:h-52 lg:mb-5">
                            <div className="md:absolute absolute -top-27 md:-top-32 left-0 h-36 md:h-auto w-25 md:w-52 md:aspect-[3/4] bg-red-300 rounded"></div>

                            <div className="flex gap-4 md:w-52">
                                <div className="flex justify-center items-center md:flex-1 px-12 md:px-0 bg-blue-400 text-white rounded">Watching</div>
                                <div className="flex justify-center items-center bg-red-600 rounded">
                                    <i className='bx bxs-heart p-2 aspect-square text-xl text-white' ></i>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="md:flex md:flex-col md:justify-between flex-1 md:gap-5 min-w-0">
                        <div className="md:flex md:flex-col md:gap-3">
                            {/* Movie Title */}
                            <section className="">
                                <h1 className="text-lg font-semibold md:font-normal text-gray-600">ONE PIECE</h1>
                            </section>

                            {/* Description */}
                            <div className="">
                                <p className="hidden md:block text-sm bg-white text-gray-500 break-words">
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

                            </div>
                        </div>

                        {/* Info Nav Texts */}
                        <section className="2xl:flex 2xl:justify-center">
                            <div className="flex lg:justify-around 2xl:justify-between max-w-3xl w-full overflow-x-scroll lg:overflow-x-hidden">
                                {infoNav.map((nav, index) => {
                                    return <div key={index} className="px-3 py-3 text-sm font-light text-gray-600">
                                        {nav.text}
                                    </div>
                                })}
                            </div>
                        </section>
                    </div>
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