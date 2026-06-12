import DesktopHeader from "../../../components/DesktopHeader";
import FloatingNav from "../../../components/FloatingNav";
import Footer from "../../../components/Footer";

function Overview(){
    const profileNav = [
        { text: 'Overview', route: '/'},
        { text: 'Anime List', route: '/'},
        { text: 'Manga List', route: '/'},
        { text: 'Favorites', route: '/'},
        { text: 'Stats', route: '/'},
        { text: 'Social', route: '/'},
        { text: 'Reviews', route: '/'},
        { text: 'Submissions', route: '/'},
    ];

    return(
        <>
            {/* Profile Banner */}
            <section className="flex gap-4 items-end px-5 aspect-video bg-blue-300">
                <img src="https://i.pinimg.com/736x/0c/8a/1f/0c8a1f42df3622a03adeded0e08c08a6.jpg" className="w-28 aspect-square bg-blue-300 rounded-t" />
                <p className="py-3 text-lg font-bold">Hanni</p>
            </section>

            {/* Profile Nav */}
            <section className="bg-white">
                <div className="flex gap-10 px-12 py-4 overflow-x-scroll">
                    {profileNav.map((nav, index) => {
                        return <div key={index} className={`${index === 0 ? "text-blue-400" : "text-gray-500"} text-sm font-semibold shrink-0`}>
                            {nav.text}
                        </div>
                    })}
                </div>
            </section>

            {/* page container */}
            <div className="bg-gray-200 px-5 py-10 h-screen">

                {/* Watch Stat Tracker */}
                <section className="bg-white rounded shadow">
                    <div className="flex justify-around">
                        <div className="flex flex-col items-center">
                            <p>75</p>
                            <p>Total Anime</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>75</p>
                            <p>Total Anime</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>75</p>
                            <p>Total Anime</p>
                        </div>
                    </div>


                    <div></div>

                    <div></div>
                </section>
                
            </div>
        

            <FloatingNav />
        </>
    );
};

export default Overview;