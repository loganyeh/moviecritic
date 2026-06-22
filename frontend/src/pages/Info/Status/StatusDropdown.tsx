

function StatusDropdown(){

    return(
        <>
            <div className="hidden border border-gray-300 absolute -bottom-30 right-0 md:flex gap-2 flex-col justify-start items-center p-2.5 w-5/6 md:w-full text-sm font-light bg-white text-gray-700 rounded shadow-2xl">
                <p>Set as Watching</p>
                <p>Set as Planning</p>
                <p className="border-t border-gray-300 pt-2">Open List Editor</p>
            </div>
        </>
    );
};

export default StatusDropdown;