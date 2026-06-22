import { useState } from "react";

type StatusProps = {
    currentStatus: string
    setCurrentStatus: React.Dispatch<React.SetStateAction<string>>,
};


function Status({ currentStatus, setCurrentStatus }: StatusProps ){
    const [statusBtn, setStatusBtn] = useState(false);
    const statusOptions =  [
        "Watching", "Plan to watch", "Completed", 
        "Rewatching", "Paused", "Dropped"
    ];

    return(
        <>
            <div className="relative flex gap-1 flex-col">
                <h2 className="text-sm text-gray-500">Status</h2>
                
                <button onClick={() => {setStatusBtn(prev => !prev); console.log(`clicked status button`)}}  className="flex justify-between px-3 py-2 bg-gray-200 rounded">
                    <div className="flex font-light text-gray-600">{currentStatus}</div>
                    <div className="flex items-center">
                        <i className={`bx bx-chevron-${statusBtn ? 'down' : 'up'} text-xl text-gray-400`} ></i>
                    </div>
                </button>

                {statusBtn && <div className="border border-gray-300 absolute top-full left-0 flex gap-3 flex-col mt-3 px-5 py-4 h-auto w-11/12 text-sm font-light bg-white text-gray-600 rounded shadow-xl z-20">
                    {statusOptions.map((option, index) => {
                        return <button onClick={() => {setCurrentStatus(option); setStatusBtn(false)}} key={index} className="w-fit">
                            {option}
                        </button>
                    })}
                </div>}
            </div>
        </>
    );
};

export default Status;