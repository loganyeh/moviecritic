import DesktopHeader from "../../components/DesktopHeader";
import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import Footer from "../../components/Footer";
import FloatingNav from "../../components/FloatingNav";

function AnimeList(){

    return(
        <>  
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            <div className="flex flex-col gap-6 p-5 h-screen bg-gray-200">
                
                {/* List Search */}
                <section className="flex gap-5">
                    <div className="flex flex-1 items-center gap-3 px-3 bg-white text-gray-500 rounded shadow">
                        <i className='bx bx-search text-lg'></i>
                        <input type="text" placeholder="Filter" className="w-full font-light outline-none" />
                    </div>

                    <div className="flex justify-center items-center p-2 bg-white rounded shadow">
                        <i className='bx bx-dots-horizontal-rounded text-2xl text-gray-600' ></i>
                    </div>
                </section>

                {/* Status Sections */}
                <section className="flex flex-col gap-5">
                    <div className="flex justify-between items-center text-gray-500">
                        <h1 className="px-4 text-xl font-normal">Watching</h1>
                        <div className="flex gap-2 p-1.5 text-2xl bg-white rounded-shadow">
                            <i className='bx bx-menu text-blue-500' ></i>
                            <i className='bx bx-list-ul' ></i>
                            <i className='bx bxs-grid-alt' ></i>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 p-5 bg-white rounded shadow">
                        <div className="flex justify-between font-medium text-gray-500">
                            <p>Title</p>
                            <p>Score</p>
                            <p>Progress</p>
                            <p>Type</p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {Array.from({length: 5}).map((_, index) => {
                                return <div key={index} className="flex items-start gap-4">
                                    <div className="w-12 aspect-square shrink-0 bg-blue-300 rounded"></div>

                                    <div className="flex flex-col gap-3 w-full text-gray-500">
                                        <p className="font-medium text-gray-600">Blue Box</p>
                                        <div className="flex justify-between text-sm font-light">
                                            <p>Score: 10</p>
                                            <p>Progress: 25</p>
                                        </div>

                                    </div>
                                </div>
                            })}
                        </div>

                    </div>


                </section>

            </div>

            <FloatingNav />
            <Footer />
        
        </>
    );
};

export default AnimeList;