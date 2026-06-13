import DesktopHeader from "../../components/DesktopHeader";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";
import ProfileNav from "../../components/ProfileNav";

function Info(){
    const movieDetails = [
        {category: "Format", detail: "TV"},
        {category: "Episodes", detail: "12"},
        {category: "Episode Duration", detail: "24 mins"},
        {category: "Status", detail: "Finished"},
        {category: "Start Date", detail: "Oct 9, 2022"},
        {category: "End Date", detail: "Dec 25, 2022"},
        {category: "Season", detail: "Fall 2022"},
        {category: "Average Score", detail: "87%"},
        {category: "Mean Score", detail: "87%"},
        {category: "Popularity", detail: "250637"},
        {category: "Favorites", detail: "27075"},
        {category: "Studios", detail: "CloverWorks"},
        {category: "Producers", detail: ["Aniplex", "Houhunsha"]},
        {category: "Source", detail: "Manga"},
        {category: "Hashtag", detail: "#ぽっち*ぎ*ろっく"},
        {category: "Genres", detail: ["Comedy", "Music", "Slice of Life"]},
        {category: "Romaji", detail: "Bocchi the Rock!"},
        {category: "English", detail: "BOCCHI THE ROCK!"},
        {category: "Native", detail: "ぽっち*ぎ*ろっく!"},
        {category: "Synonyms", detail: ["POK-", "BTR"]},
    ]

    return(
        <>
            <DesktopHeader />

            <div className="flex justify-center bg-blue-300">
                <section className="flex gap-4 lg:gap-5 items-end px-6 xl:px-0 aspect-video md:aspect-[16/7] lg:aspect-[16/5] xl:aspect-[16/4] 2xl:aspect-[16/3] max-w-5xl 2xl:max-w-7xl w-full">
                    {/* <img src="https://i.pinimg.com/736x/0c/8a/1f/0c8a1f42df3622a03adeded0e08c08a6.jpg" className="w-28 md:w-36 aspect-square bg-blue-300 rounded-t" /> */}
                    {/* <p className="py-3 text-lg font-bold">Hanni</p> */}
                </section>
            </div>

            {/* Movie Watch Status */}
            <section className="relative flex justify-end gap-3 p-3">
                <div className="absolute -top-20 left-5 w-24 aspect-[3/4] bg-red-300 rounded"></div>

                <div className="flex justify-center items-center px-14 bg-blue-400 text-white rounded">Watching</div>
                <div className="flex justify-center items-center bg-red-600 rounded">
                    <i className='bx bxs-heart p-2 aspect-square text-lg text-white' ></i>
                </div>
            </section>

            {/* Movie Title */}
            <section className="px-4 py-1">
                <h1 className="text-lg font-semibold">BOCCHI THE ROCK!</h1>
            </section>

            <ProfileNav />

            {/* page container */}
            <div className="flex flex-col gap-12 p-5 py-10 h-screen bg-gray-200">

                {/* Movie Details */}
                <section className="bg-white rounded shadow">
                    <div className="flex gap-5 p-5 text-sm overflow-x-scroll">
                        {movieDetails.map((category, index) => {
                            return <div key={index} className="shrink-0">
                                <p className="text-gray-500">{category.category}</p>
                                <p className="text-gray-600">{category.detail}</p>
                            </div>
                        })}
                    </div>
                </section>

                {/* Description */}
                <section className="flex flex-col gap-4">
                    <p className="text-sm font-semibold text-gray-600">Description</p>

                    <p className="p-5 text-sm bg-white text-gray-500 rounded shadow">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur nisi dicta modi, nihil nemo optio id, praesentium ex tempora animi 
                        laboriosam sunt totam ea nesciunt alias blanditiis vel fugit nam!
                    </p>
                </section>

                {/* Relations */}
                <section className="flex flex-col gap-4">
                    <p className="text-sm font-semibold text-gray-600">Relations</p>

                    <div className="flex gap-6 overflow-x-scroll">
                        {Array.from({length: 3}).map((_, index) => {
                            return <div key={index} className="flex bg-white max-w-[250px] w-full shrink-0">
                                <div className="w-20 aspect-[3/4] bg-red-300 shrink-0"></div>
                                <div className="border flex flex-col justify-between p-3 w-full text-xs">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-blue-400 font-medium">Source</p>
                                        <p className="text-sm line-clamp-2">Bocchi the Rock!</p>
                                        {/* <p className="text-sm line-clamp-2">Bocchi the Rock! asdlfk;jlkewa;kljskldj;flajsfsdf</p> */}
                                    </div>

                                    <p>Manga * Hiatus</p>
                                </div>
                            </div>
                        })}
                    </div>
                </section>

            </div>

            <FloatingNav />
            <Footer />
        </>
    );
};

export default Info;