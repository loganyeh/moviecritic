import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";

function Stats(){
    const userStats = [
        {
            icon: "bx bx-tv",
            value: "75",
            stat: "Total Anime",
        },
        {
            icon: "bx bx-play",
            value: "1736",
            stat: "Episodes Watched",
        },
        {
            icon: "bx bx-calendar-alt",
            value: "28.6",
            stat: "Days Watched",
        },
        {
            icon: "bx bx-hourglass",
            value: "40.3",
            stat: "Days Planned",
        },
        {
            icon: "bx bx-calculator",
            value: "78.21",
            stat: "Mean Score",
        },
        {
            icon: "bx bx-math",
            value: "14.2",
            stat: "Standard Deviation",
        },
    ];
    const score = [
        {
            value: "1",
            barHeight: "h-1/12",
        },
        {
            value: "2",
            barHeight: "h-2/12",
        },
        {
            value: "8",
            barHeight: "h-4/12",
        },
        {
            value: "10",
            barHeight: "h-6/12",
        },
        {
            value: "12",
            barHeight: "h-8/12",
        },
        {
            value: "16",
            barHeight: "h-10/12",
        },
        {
            value: "5",
            barHeight: "h-3/12",
        },
    ];
    const format = [
        {
            format: "TV",
            percentage: "68",
            color: "bg-blue-400",
        },
        {
            format: "Movie",
            percentage: "11",
            color: "bg-zinc-800",
        },
        {
            format: "OVA",
            percentage: "10",
            color: "bg-red-600",
        },
    ];
    const status = [
        {
            status: "Planning",
            percentage: "68",
            color: "bg-blue-400",
        },
        {
            status: "Completed",
            percentage: "24",
            color: "bg-zinc-800",
        },
        {
            status: "Paused",
            percentage: "5",
            color: "bg-red-600",
        },
    ];
    const country = [
        {
            country: "Japan",
            percentage: "96",
            color: "bg-blue-400",
        },
        {
            country: "China",
            percentage: "3",
            color: "bg-zinc-800",
        },
        {
            country: "South Korea",
            percentage: "1",
            color: "bg-red-600",
        },
    ];

    return(
        <>
            <ProfileBanner />
            <ProfileNav />

            {/* page body */}
            <div className="flex gap-[32px] flex-col px-5 pt-6 py-0 bg-gray-200">

                {/* User Stats Header */}
                <section className="flex justify-between items-center">
                    <p className="text-xl font-semibold text-gray-700">Hanni's Stats</p>
                    <div className="flex justify-center items-center p-2 bg-white rounded shadow">
                        <i className='bx bx-dots-horizontal-rounded text-2xl text-gray-600'></i>
                    </div>
                </section>

                {/* Stats */}
                <section>
                    <div className="grid gap-[28px] grid-cols-2 px-4">
                        {userStats.map((cat, index) => {
                            return <div key={index} className="flex gap-4 justify-start items-center">
                                <div className="border border-gray-100 flex justify-center items-center p-2 bg-white rounded-full shadow">
                                    <i className={`${cat.icon} text-2xl text-gray-500`} ></i>
                                </div>

                                <div className="flex gap-1.5 flex-col">
                                    <p className="text-2xl font-semibold text-blue-400">{cat.value}</p>
                                    <p className="text-sm font-medium text-gray-600">{cat.stat}</p>
                                </div>
                            </div>
                        })}
                    </div>

                </section>

                {/* Score */}
                <section className="flex gap-3 flex-col">
                    <p className="text-xl font-semibold text-gray-700">Score</p>

                    <div className="flex gap-2 p-1.5 w-fit bg-white rounded-full shadow">
                        <p className="px-2 py-0.5 text-xs font-medium bg-blue-400 text-white rounded-full">Titles Watched</p>
                        <p className="px-2 py-0.5 text-xs font-medium text-gray-600 rounded-full">Hours Watched</p>
                    </div>

                    <div className="bg-white rounded-xl shadow">
                        <div className="grid grid-cols-7 text-center">
                            {score.map((col, index) => {
                                return <div key={index} className={`flex gap-1 flex-col justify-end items-center h-44`}>
                                    <p className="text-xs font-medium text-gray-700">{col.value}</p>
                                    <div className={`${col.barHeight} w-[28px] bg-blue-400 rounded-t`}></div>
                                </div>
                            })}
                        </div>
                        <div className="grid grid-cols-7 py-3.5 bg-gray-300 rounded-b-xl">
                            {Array.from({ length: 7 }).map((_, index) => {
                                return <div key={index} className="flex justify-center items-center text-xs text-gray-700">
                                    {index + 4}
                                </div>
                            })}
                        </div>
                    </div>


                </section>

                {/* Episode Count */}

                {/* Format Distribution */}
                <section className="flex gap-3 flex-col p-5 bg-white rounded-xl">
                    <p className="font-semibold text-gray-600">Format Distribution</p>

                    <div className="flex justify-center items-center">
                        <i className='bx bx-pie-chart-alt-2 text-7xl' ></i>
                    </div>

                    <div className="flex gap-2 flex-col">
                        {format.map((format, index) => {
                            return <div key={index} className={`flex justify-between items-center pl-2.5 ${format.color} text-white rounded-md`}>
                                <p className="text-sm">{format.format}</p>
                                <p className="flex justify-center py-1 h-full w-12 text-sm bg-white/50 rounded-md">{format.percentage}%</p>
                            </div>
                        })}
                    </div>
                    
                </section>

                {/* Status Distribution */}
                {/* Country Distribution */}

                {/* Release Year */}

                {/* Watch Year */}

            </div>

            <FloatingNav />
            <Footer />        
        </>
    );
};

export default Stats;