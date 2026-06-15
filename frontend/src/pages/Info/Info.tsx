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
    ];
    const characters = [
        {character: 'Luffy D. Monkey', voicedBy: 'Mayumi Tanaka', lead: 'Main', nativeLanguage: 'Japanese'},
        {character: 'Robin Nico', voicedBy: 'Yuriko Yamaguchi', lead: 'Main', nativeLanguage: 'Japanese'},
        {character: 'Zoro Roronoa', voicedBy: 'Kazuya Nakai', lead: 'Main', nativeLanguage: 'Japanese'},
        {character: 'Franky', voicedBy: 'Kazuki Yao', lead: 'Main', nativeLanguage: 'Japanese'},
        {character: 'Sanji', voicedBy: 'Hiroaki Hirata', lead: 'Main', nativeLanguage: 'Japanese'},
        {character: 'Chopper Tony Tony', voicedBy: 'Ikue Ootani', lead: 'Main', nativeLanguage: 'Japanese'},
    ];
    const staff = [
        {name: 'Eiichirou Oda', role: 'Original Creator'},
        {name: 'Kounosuke Uda', role: 'Director (eps 1-278)'},
        {name: 'Kazuya Hisada', role: 'Character Design (eps 385-891)'},
        {name: 'Noboru Koizumi', role: 'Character Design (eps: 1-425)'},
    ];
    const statusDistribution = [
        { status: 'Current', numOfUsers: '454890', bgColor: 'bg-green-500', textColor: 'text-green-500'},
        { status: 'Planning', numOfUsers: '89092', bgColor: 'bg-blue-500', textColor: 'text-blue-500'},
        { status: 'Paused', numOfUsers: '85536', bgColor: 'bg-purple-500', textColor: 'text-purple-500'},
        { status: 'Dropped', numOfUsers: '45686', bgColor: 'bg-pink-400', textColor: 'text-pink-400'},
    ];
    const scoreDistribution = [
        {height: 'h-4/12', color: 'bg-red-500'},
        {height: 'h-3/12', color: 'bg-orange-600'},
        {height: 'h-3/12', color: 'bg-orange-500'},
        {height: 'h-3/12', color: 'bg-orange-400'},
        {height: 'h-4/12', color: 'bg-yellow-400'},
        {height: 'h-3/12', color: 'bg-yellow-500'},
        {height: 'h-4/12', color: 'bg-green-300'},
        {height: 'h-5/12', color: 'bg-green-400'},
        {height: 'h-8/12', color: 'bg-green-500'},
        {height: 'h-12/12', color: 'bg-green-600'},
    ];
    const watch = [
        {thumbnail: '', episodeName: 'Episode 130 - Scent of'},
        {thumbnail: '', episodeName: 'Episode 129 - It All Started'},
    ];
    const recommendations = [
        {title: "Hunter x Hunter (2011)"},
        {title: "Naruto"},
        {title: "Naruto Shippuden"},
    ];
    const reviews = [
        {
            review: 'One Piece is a great adventure series, with a lovable cast of characters.',
            likes: '563',
        },
        {
            review: 'A really fun adventure comprised of a wacky crew...',
            likes: '209',
        },
    ];
    const streamingLinks = [
        { logo: 'bx bx-link', bgColor: 'bg-blue-500', site: 'Official Site', region: 'JP' },
        { logo: 'bx bxl-instagram', bgColor: 'bg-purple-500', site: 'Instagram', region: 'JP' },
        { logo: 'bx bxl-twitter', bgColor: 'bg-black', site: 'Twitter', region: 'JP' },
        { logo: 'bx bx-tv', bgColor: 'bg-blue-300', site: 'Bilibili TV', region: '' },
        { logo: 'bx bx-tennis-ball', bgColor: 'bg-orange-500', site: 'Crunchyroll', region: '' },
        { logo: 'bx bxl-unity', bgColor: 'bg-blue-500', site: 'Hoopla', region: '' },
        { logo: 'bx bxl-facebook-circle', bgColor: 'bg-green-500', site: 'Hulu', region: '' },
        { logo: 'bx bxl-medium', bgColor: 'bg-red-600', site: 'Netflix', region: '' },
        { logo: 'bx bxl-play-store', bgColor: 'bg-blue-500', site: 'WeTV', region: '' },
        { logo: 'bx bxl-youtube', bgColor: 'bg-red-600', site: 'Youtube', region: '(JP)' },
        { logo: 'bx bxl-youtube', bgColor: 'bg-red-600', site: 'Youtube', region: '(EN)' },
        { logo: 'bx bxl-audible', bgColor: 'bg-green-500', site: 'iQ', region: '' },
    ];
    const tags = [
        { tag: 'Pirates', percentage: '98' },
        { tag: 'Travel', percentage: '94' },
        { tag: 'Shounen', percentage: '93' },
        { tag: 'Ensemble Cast', percentage: '93' },
        { tag: 'Super Power', percentage: '90' },
    ];

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
                <div className="absolute -top-24 left-5 h-36 w-25 bg-red-300 rounded"></div>

                <div className="flex justify-center items-center px-14 bg-blue-400 text-white rounded">Watching</div>
                <div className="flex justify-center items-center bg-red-600 rounded">
                    <i className='bx bxs-heart p-2 aspect-square text-lg text-white' ></i>
                </div>
            </section>

            {/* Movie Title */}
            <section className="px-4 py-1">
                <h1 className="text-lg font-semibold text-gray-600">ONE PIECE</h1>
            </section>

            <ProfileNav />

            {/* page container */}
            <div className="flex flex-col gap-10 p-5 py-10 pb-24 bg-gray-200">

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
                <section className="flex flex-col gap-3">
                    <p className="text-sm font-medium text-gray-600">Description</p>

                    <p className="p-5 text-sm bg-white text-gray-500 rounded shadow">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur nisi dicta modi, nihil nemo optio id, praesentium ex tempora animi 
                        laboriosam sunt totam ea nesciunt alias blanditiis vel fugit nam!
                    </p>
                </section>

                {/* Relations */}
                <section className="flex flex-col gap-3">
                    <p className="text-sm font-medium text-gray-600">Relations</p>

                    <div className="flex gap-6 overflow-x-scroll">
                        {Array.from({length: 3}).map((_, index) => {
                            return <div key={index} className="flex max-w-72 shrink-0 shadow">
                                <div className="w-20 aspect-[3/4] bg-red-300 shrink-0 rounded-l"></div>
                                <div className="flex flex-col justify-between p-3 min-w-44 text-xs bg-white rounded-r">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-blue-400 font-medium">Source</p>
                                        <p className="text-sm line-clamp-2">Bocchi the Rock!</p>
                                    </div>

                                    <p>Manga * Hiatus</p>
                                </div>
                            </div>
                        })}
                    </div>
                </section>

                {/* Characters */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-medium text-gray-600">Characters</h2>

                    <div className="flex flex-col gap-4">
                        {characters.map((character, index) => {
                            return <div key={index} className="flex justify-between shadow">
                                <div className="h-20 w-16 apsect-[3/4] bg-blue-300 rounded-l"></div>

                                <div className="flex flex-col justify-between flex-1 p-2.5 font-light bg-white">
                                    <div className="flex justify-between text-xs">
                                        <p className="text-gray-600">{character.character}</p>
                                        <p className="text-gray-600">{character.voicedBy}</p>
                                    </div>

                                    <div className="flex justify-between text-[11px]">
                                        <p className="text-gray-500">{character.lead}</p>
                                        <p className="text-gray-500">{character.nativeLanguage}</p>
                                    </div>
                                    
                                </div>

                                <div className="h-20 w-16 apsect-[3/4] bg-red-300 rounded-r"></div>
                            </div>
                        })}
                    </div>
                </section>

                {/* Staff */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-medium text-gray-600">Staff</h2>

                    <div className="flex flex-col gap-4">
                        {staff.map((staff, index) => {
                            return <div key={index} className="flex justify-between shadow">
                                <div className="h-[72px] w-14 apsect-[3/4] bg-blue-300 rounded-l"></div>

                                <div className="flex flex-col justify-between flex-1 p-2.5 font-light bg-white">
                                    <div className="flex justify-between text-xs">
                                        <p className="text-gray-600">{staff.name}</p>
                                    </div>

                                    <div className="flex justify-between text-[11px]">
                                        <p className="text-gray-500">{staff.role}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        })}
                    </div>
                </section>

                {/* Status Distribution */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-medium text-gray-600">Status Distribution</h2>

                    <div className="shadow">
                        <div className="flex justify-between px-3 py-4 bg-white rounded-t">
                            {statusDistribution.map((status, index) => {
                                return <div key={index} className="flex flex-col gap-2">
                                    <p className={`px-3 py-1.5 text-sm ${status.bgColor} text-white rounded`}>{status.status}</p>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className={`text-sm ${status.textColor}`}>{status.numOfUsers}</p>
                                        <p className={`text-xs text-gray-500`}>Users</p>
                                    </div>
                                </div>
                            })}
                        </div>

                        <div className="flex h-3">
                            <div className="h-full w-6/12 bg-green-500 rounded-bl"></div>
                            <div className="h-full w-2/12 bg-blue-500"></div>
                            <div className="h-full w-2/12 bg-purple-500"></div>
                            <div className="h-full w-1/12 bg-pink-400"></div>
                            <div className="h-full w-1/12 bg-red-400 rounded-br"></div>
                        </div>
                    </div>


                </section>

                {/* Score Distribution */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-medium text-gray-600">Score Distribution</h2>

                    <div className="flex justify-between items-end p-5 h-28 bg-white rounded shadow">
                        {scoreDistribution.map((score, index) => {
                            return <div key={index} className={`${score.height} w-4 ${score.color} rounded-t-full rounded-b-full shrink-0`}>
                                
                            </div>
                        })}
                    </div>
                </section>

                {/* Watch */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-medium text-gray-600">Watch</h2>

                    <div className="flex gap-[32px] overflow-x-scroll">
                        {watch.map((watch, index) => {
                            return <div key={index} className="relative flex justify-between items-end p-5 w-44 aspect-video shrink-0 bg-red-300 rounded shadow">
                                <div className="absolute left-0 bottom-0 flex items-center px-4 h-[36px] w-full bg-black/50">
                                    <p className="text-xs text-white truncate">{watch.episodeName} asfd;lajsdfj;laskjf</p>
                                </div>
                            </div>
                        })}
                    </div>
                </section>

                {/* Following */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-medium text-gray-600">Following</h2>

                    <div className="flex items-center px-2.5 py-2 text-sm bg-white text-gray-600 rounded shadow">
                        <div className="flex items-center gap-3.5">
                            <div className="w-[32px] aspect-square bg-red-300 rounded"></div>
                            <p className="font-medium">jujune</p>
                        </div>
                        <p className="flex justify-center flex-1 font-light">Paused</p>
                    </div>
                </section>

                {/* Recommendations */}
                <section className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-gray-600">
                        <h2 className="text-sm font-medium">Recommendations</h2>
                        <i className='bx bx-plus text-xl'></i>
                    </div>

                    <div className="flex gap-6 overflow-x-scroll">
                        {recommendations.map((recommendations, index) => {
                            return <div key={index} className="flex flex-col gap-2">
                                <div className="w-32 aspect-[3/4] bg-red-300 shrink-0 rounded"></div>  
                                <p className="text-sm font-medium text-gray-600">{recommendations.title}</p>
                            </div>
                        })}
                    </div>
                </section>

                {/* Threads */}
                <section className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-gray-600">
                        <h2 className="text-sm font-medium">Threads</h2>
                        <p className="text-xs">Create New Thread</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        {Array.from({length: 2}).map((_, index) => {
                            return <div key={index} className="flex flex-col gap-3 p-4 bg-white rounded shadow">
                                <div className="flex gap-5">
                                    <p className="min-w-0 text-sm text-gray-600 line-clamp-3">[Spoilers] One Piece - Episode 1165 Discussion</p>

                                    <div className="flex gap-3 text-gray-500 shrink-0">
                                        <div className="flex gap-0.5">
                                            <i className='bx bx-bar-chart text-sm' ></i>
                                            <p className="text-xs">268</p>
                                        </div>

                                        <div className="flex gap-0.5">
                                            <i className='bx bxs-chat text-sm'></i>
                                            <p className="text-xs">13</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5 text-gray-600">
                                    <div className="w-6 aspect-square bg-blue-300 rounded"></div>
                                    <p className="text-xs">Hanni replied 22 hours ago</p>
                                </div>

                                <div className="px-2 py-0.5 w-fit text-xs bg-blue-400 text-white rounded-full">anime</div>
                            </div>
                        })}
                    </div>
                </section>

                {/* Reviews */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-medium text-gray-600">Reviews</h2>

                    <div className="flex flex-col gap-4">
                        {reviews.map((review, index) => {
                            return <div key={index} className="flex items-start gap-6">
                                <div className="w-12 aspect-square bg-blue-300 rounded shrink-0"></div>

                                <div className="relative p-4 bg-white rounded shadow">
                                    <p className="text-sm text-center text-gray-600">{review.review}</p>

                                    <div className="absolute bottom-1 right-2 flex justify-end items-center gap-1 text-xs text-gray-500">
                                        <i className='bx bxs-like' ></i>
                                        <p>{review.likes}</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </section>

                {/* External * Streaming Links */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-medium text-gray-600">External & Streaming Links</h2>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        {streamingLinks.map((link, index) => {
                            return <div key={index} className="flex items-center gap-2.5 bg-white rounded shadow">
                                <div className={`flex justify-center items-center p-0.5 w-fit ${link.bgColor} rounded`}>
                                    <i className={`${link.logo} text-2xl text-white`} ></i>
                                </div>

                                <div className="flex items-end gap-1">
                                    <p className="text-xs font-semibold text-gray-600">{link.site}</p>
                                    <p className="text-[10px] font-medium text-gray-500">{link.region}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </section>

                {/* Tags */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-medium text-gray-600">Following</h2>

                    <div className="flex flex-col gap-3">
                        {tags.map((tag, index) => {
                            return <div key={index} className="py-2 px-3 bg-white rounded shadow">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600">{tag.tag}</p>
                                    <p className="text-xs font-light text-gray-500">{tag.percentage}%</p>
                                </div>
                            </div>
                        })}
                    </div>
                    
                    <p className="text-xs text-gray-500">Show 17 spoiler tags</p>
                </section>

            </div>

            <FloatingNav />
            <Footer />
        </>
    );
};

export default Info;