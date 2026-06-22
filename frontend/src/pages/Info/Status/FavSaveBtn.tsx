

type FavSaveBtnProps = {
    title: string,
}


function FavSaveBtn({ title }: FavSaveBtnProps ){

    return(
        <>
            <div className="flex flex-1 justify-between items-center text-white">
                <p className="">{title}</p>

                <div className="flex gap-4">
                    <div className="flex items-center">
                        <i className='bx bxs-heart text-xl'></i>
                    </div>
                    <button className="px-4 py-2 text-xs bg-blue-400 rounded">Save</button>
                </div>
            </div>
        </>
    );
};

export default FavSaveBtn;