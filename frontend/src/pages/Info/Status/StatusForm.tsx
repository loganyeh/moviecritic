
import type { MovieListsType } from "../../../services/tmdb/movieLists";

type StatusFormProps = {
    info: MovieListsType,
    setIsStatusForm: React.Dispatch<React.SetStateAction<boolean>>,
    setWatchingList: React.Dispatch<React.SetStateAction<MovieListsType[]>>,
};

function StatusForm({ info, setIsStatusForm, setWatchingList }: StatusFormProps ){

    async function toggleWatching(){
        if (!info) return "Info returned undefined";

        const res = await fetch(`http://localhost:3000/list/status/${info.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...info,
                isWatching: !info.isWatching
            })
        });

        const newMovie = await res.json();
        setWatchingList((prev) => [...prev, newMovie]);
    };

    return(
        <>
            <div className="fixed z-10 inset-0 w-full">
                <div className="relative h-full overflow-y-scroll">

                    {/* Opacity */}
                    <div className="h-32 bg-black/50"></div>

                    {/* Exit Button */}
                    <button onClick={() => setIsStatusForm(false)} className="absolute top-36 right-4">
                        <i className='bx bx-x text-2xl text-white' ></i>
                    </button>

                    {/* Movie Backdrop */}
                    <div className="flex gap-4 justify-between items-end px-[32px] pb-4 aspect-[4/2] bg-red-300">
                        {/* Poster */}
                        <div className="relative flex justify-center items-end w-26">
                            <div className="absolute bottom-0 left-0 h-28 w-full bg-gray-300 rounded">
                                <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt={info.title} className="rounded" />
                            </div>
                            {/* <div className="w-24 aspect-[3/4] bg-blue-300"></div> */}
                        </div>
                        
                        {/* Title and Fav/Save Btn */}
                        <div className="flex flex-1 justify-between items-center text-white">
                            <p>{info.title}</p>

                            <div className="flex gap-4">
                                <div className="flex items-center">
                                    <i className='bx bxs-heart text-xl'></i>
                                </div>
                                <button className="px-4 py-2 text-xs bg-blue-400 rounded">Save</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="aspect-video bg-cover bg-contain" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieData?.poster_path})`}}></div> */}

                    <div className="flex gap-6 flex-col px-[28px] py-[72px] bg-white text-black">
                        {/* Status */}
                        <div className="flex gap-1 flex-col">
                            <h2 className="text-sm text-gray-500">Status</h2>
                            
                            <button onClick={() => toggleWatching()} className="flex justify-between px-3 py-2 bg-gray-200 rounded">
                                <div className="flex font-light text-gray-600">Paused</div>
                                <div className="flex items-center">
                                    <i className='bx bx-chevron-down text-xl text-gray-400' ></i>
                                </div>
                            </button>
                        </div>

                        {/* Score */}
                        <div className="flex gap-1 flex-col">
                            <h2 className="text-sm text-gray-500">Score</h2>

                            <button className="relative flex justify-between px-3 py-2 bg-gray-200 rounded">
                                <div className="flex font-light text-gray-600">0</div>
                                <div className="absolute top-0 right-2.5 flex flex-col items-center">
                                    <i className='bx bx-chevron-up text-xl text-gray-400' ></i>
                                    <i className='bx bx-chevron-down text-xl text-gray-400' ></i>
                                </div>
                            </button>
                        </div>

                        {/* Episode Progress */}
                        <div className="flex gap-1 flex-col">
                            <h2 className="text-sm text-gray-500">Episode Progress</h2>

                            <button className="relative flex justify-between px-3 py-2 bg-gray-200 rounded">
                                <div className="flex font-light text-gray-600">162</div>
                                <div className="absolute top-0 right-2.5 flex flex-col items-center">
                                    <i className='bx bx-chevron-up text-xl text-gray-400' ></i>
                                    <i className='bx bx-chevron-down text-xl text-gray-400' ></i>
                                </div>
                            </button>
                        </div>

                        {/* Start Date */}
                        <div className="flex gap-1 flex-col max-w-9/12">
                            <h2 className="text-sm text-gray-500">Start Date</h2>

                            <button className="relative flex gap-3 px-3 py-2 bg-gray-200 rounded">
                                <div className="flex items-center">
                                    <i className='bx bx-calendar text-gray-300'></i>
                                </div>

                                <div className="flex font-light text-gray-600">2025-07-01</div>
                            </button>
                        </div>

                        {/* Finish Date */}
                        <div className="flex gap-1 flex-col max-w-9/12">
                            <h2 className="text-sm text-gray-500">Finish Date</h2>

                            <button className="relative flex gap-3 px-3 py-2 h-10 bg-gray-200 rounded">
                                <div className="flex items-center">
                                    <i className='bx bx-calendar text-gray-300'></i>
                                </div>

                                <div className="flex font-light text-gray-600"></div>
                            </button>
                        </div>

                        {/* Total Rewatches */}
                        <div className="flex gap-1 flex-col">
                            <h2 className="text-sm text-gray-500">Total Rewatches</h2>

                            <button className="relative flex justify-between px-3 py-2 bg-gray-200 rounded">
                                <div className="flex font-light text-gray-600">0</div>
                                <div className="absolute top-0 right-2.5 flex flex-col items-center">
                                    <i className='bx bx-chevron-up text-xl text-gray-400' ></i>
                                    <i className='bx bx-chevron-down text-xl text-gray-400' ></i>
                                </div>
                            </button>
                        </div>

                        {/* Notes */}
                        <div className="flex gap-1 flex-col">
                            <h2 className="text-sm text-gray-500">Notes</h2>

                            <button className="relative flex justify-between  h-10 bg-gray-200 rounded">
                                <input type="text" className="px-3 py-2 h-full w-full outline-none" />
                            </button>
                        </div>

                        {/* Custom Lists */}
                        <div className="flex gap-1 flex-col text-gray-500">
                            <h2 className="text-sm">Custom Lists</h2>

                            <div className="border-b border-gray-200 flex justify-center w-full">
                                <p className="py-2 text-xs">No custom anime lists</p>
                            </div>
                        </div>

                        {/* Private Checkbox */}
                        <div className="flex gap-3 text-sm text-gray-600">
                            <input type="checkbox" />
                            <p>Private</p>
                        </div>

                        {/* Delete Button */}
                        <div className="flex justify-end">
                            <button className="px-4 py-1.5 text-sm bg-gray-200 text-gray-600 rounded">Delete</button>
                        </div>

                    </div>
                
                    {/* Opacity */}
                    <div className="h-14 bg-black/50"></div>

                </div>
            </div>
        </>
    );
};

export default StatusForm;