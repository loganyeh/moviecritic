import type { MovieListsType } from "../../../services/tmdb/movieLists";
import Status from "./Status";
import Score from "./Score";
import EpisodeProgress from "./EpisodeProgress";
import Date from "./Date";
import TotalRewatches from "./TotalRewatches";
import Notes from "./Notes";
import CustomLists from "./CustomLists";
import PrivateCheckbox from "./PrivateCheckbox";
import DeleteBtn from "./DeleteBtn";
import ExitBtn from "./ExitBtn";
import Poster from "./Poster";
import FavSaveBtn from "./FavSaveBtn";

type StatusFormProps = {
    info: MovieListsType,
    setIsStatusForm: React.Dispatch<React.SetStateAction<boolean>>,
    currentStatus: string,
    setCurrentStatus: React.Dispatch<React.SetStateAction<string>>,
};

function StatusForm({ info, setIsStatusForm, currentStatus, setCurrentStatus }: StatusFormProps ){

    return(
        <>
            {/* page outer */}
            <div className="fixed z-10 inset-0 w-full">
                {/* page container */}
                <div className="xl:flex xl:justify-center xl:items-center lg:px-5 pt-32 pb-14 md:pt-44 lg:pt-32 xl:p-0 bg-black/50 h-full overflow-y-scroll">

                    <div className="xl:max-w-[1000px] xl:w-full">
                        {/* Movie Backdrop */}
                        <div className="relative flex gap-4 justify-between items-end px-[32px] md:px-12 pb-4 aspect-[2/1] md:aspect-[4/1] lg:aspect-[16/3] bg-gray-300 bg-cover lg:rounded-t-md" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${info?.backdrop_path})` }}>
                            <div className="absolute inset-0 bg-black/80 rounded-t-md"></div>
                            <ExitBtn setIsStatusForm={setIsStatusForm} />
                            <Poster poster_path={info?.poster_path} title={info?.title} />
                            <FavSaveBtn title={info?.title} setIsStatusForm={setIsStatusForm} />
                        </div>

                        {/* Form */}
                        <div className="flex gap-6 md:gap-10 flex-col md:flex-row px-[28px] md:px-12 py-[72px] bg-white text-black lg:rounded-b-md">
                            {/* Left Side */}
                            <div className="flex md:flex-1 flex-col gap-6">
                                <div className="flex flex-col gap-6 xl:grid xl:grid-cols-3 xl:gap-x-10 xl:gap-y-6">
                                    <Status currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} info={info} />
                                    <Score />
                                    <EpisodeProgress />
                                    <Date title="Start Date" />
                                    <Date title="Finish Date" />
                                    <TotalRewatches />
                                    <div className="xl:hidden">
                                        <Notes />
                                    </div>
                                </div>

                                <div className="hidden xl:block">
                                    <Notes />
                                </div>

                            </div>

                            {/* Right Side */}
                            <div className="flex flex-col md:justify-between gap-6 md:max-w-[200px] w-full">
                                <div className="flex flex-col gap-6">
                                    <CustomLists />
                                    <PrivateCheckbox />
                                </div>

                                <DeleteBtn setIsStatusForm={setIsStatusForm} id={info?.id} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default StatusForm;