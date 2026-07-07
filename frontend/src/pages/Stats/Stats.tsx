// Comp Imports
import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";
import Lists from "../AnimeList/Lists";
import StatsOverview from "./StatsOverview";
import BarGraph from "./BarGraph";
import Distribution from "./Distribution";
import UserListToggle from "./UserListToggle";


function Stats(){
    const animeStatsLists = ["Overview", "Genres", "Tags", "Voice Actors", "Studios", "Staff"];
    const mangaStatsLists = ["Overview", "Genres", "Tags", "Staff"];
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
            distribution: "TV",
            percentage: "68",
            color: "bg-blue-400",
        },
        {
            distribution: "Movie",
            percentage: "11",
            color: "bg-zinc-800",
        },
        {
            distribution: "OVA",
            percentage: "10",
            color: "bg-red-600",
        },
    ];
    const status = [
        {
            distribution: "Planning",
            percentage: "68",
            color: "bg-blue-400",
        },
        {
            distribution: "Completed",
            percentage: "24",
            color: "bg-zinc-800",
        },
        {
            distribution: "Paused",
            percentage: "5",
            color: "bg-red-600",
        },
    ];
    const country = [
        {
            distribution: "Japan",
            percentage: "96",
            color: "bg-blue-400",
        },
        {
            distribution: "China",
            percentage: "3",
            color: "bg-zinc-800",
        },
        {
            distribution: "South Korea",
            percentage: "1",
            color: "bg-red-600",
        },
    ];

    return(
        <>
            <ProfileBanner />
            <ProfileNav />

            {/* page body */}
            <div className="flex justify-center bg-gray-200">
                <div className="flex gap-[32px] md:px-[32px] xl:px-0 md:pt-10 md:pb-28 w-full max-w-5xl 2xl:max-w-7xl">
                    {/* List Cats */}
                    <section className="hidden md:flex gap-6 flex-col w-full max-w-[175px]">
                        <Lists title="Anime Stats" categories={animeStatsLists} />
                        <Lists title="Manga Stats" categories={mangaStatsLists} />
                    </section>

                    {/* Right Side */}
                    <div className="flex gap-[32px] md:gap-14 flex-1 flex-col px-5 md:px-0 pt-6 py-14">
                        <UserListToggle />
                        <StatsOverview />
                        <BarGraph title="Score" data={score} />
                        <BarGraph title="Episode Count" data={score} />

                        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-[32px] xl:gap-[32px]">
                            <Distribution title="Format" data={format} />
                            <Distribution title="Status" data={status} />
                            <Distribution title="Country" data={country} />
                        </div>

                        <BarGraph title="Release Year" data={score} />
                        <BarGraph title="Watch Year" data={score} />
                    </div>
                </div>
            </div>

            <FloatingNav />
            <Footer />        
        </>
    );
};

export default Stats;