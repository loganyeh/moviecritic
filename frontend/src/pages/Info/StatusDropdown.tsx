

type StatusDropdownProps = {
    setCurrentStatus: React.Dispatch<React.SetStateAction<string>>,
    setIsStatusDropdown: React.Dispatch<React.SetStateAction<boolean>>,
    setIsStatusForm: React.Dispatch<React.SetStateAction<boolean>>,
};


function StatusDropdown({ setCurrentStatus, setIsStatusDropdown, setIsStatusForm }: StatusDropdownProps ){

    return(
        <>
            <div className="hidden border border-gray-300 absolute -bottom-30 right-0 md:flex gap-2 flex-col justify-start items-center p-2.5 w-5/6 md:w-full lg:w-11/12 text-sm font-light bg-white text-gray-700 rounded shadow-2xl">
                <p onClick={() => {setCurrentStatus("Watching"); setIsStatusDropdown(false)}}>Set as Watching</p>
                <p onClick={() => {setCurrentStatus("Plan to watch"); setIsStatusDropdown(false)}}>Set as Planning</p>
                <p onClick={() => {setIsStatusForm(true); setIsStatusDropdown(false)}} className="border-t border-gray-300 pt-2">Open List Editor</p>
            </div>
        </>
    );
};

export default StatusDropdown;