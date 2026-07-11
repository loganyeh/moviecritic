import type { VideoType } from "../../services/tmdb/movies";

type WatchProps = {
    videos: VideoType[],
};

function Watch({ videos }: WatchProps ){

    return(
        <>
            <section className="flex flex-col gap-3 min-w-0">
                <h2 className="text-sm font-medium text-gray-600">Watch</h2>

                <div className="w-full min-w-0 flex flex-nowrap gap-[32px] overflow-x-auto">
                    {videos?.slice(0, 4).map((video, index) => {
                        return <div key={index} className="relative flex justify-between items-end w-44 md:w-24 lg:w-44 xl:w-44 aspect-video md:aspect-square lg:aspect-video shrink-0 bg-red-300 rounded shadow">
                            <img src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`} alt={video.name} className="h-full w-full object-cover rounded" />
                            <div className="absolute left-0 bottom-0 flex items-center px-4 h-[36px] w-full bg-black/50">
                                <p className="text-xs text-white truncate">{video.name}</p>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Watch;