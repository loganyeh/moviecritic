
type DeleteBtnProps = {
    id: number,
    setIsStatusForm: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentStatus: React.Dispatch<React.SetStateAction<String>>,
};

function DeleteBtn({ id, setIsStatusForm, setCurrentStatus }: DeleteBtnProps ){
    // Delete Request
    async function deleteMovie(currentMovieId: number){
        await fetch(`http://localhost:3000/movies/${currentMovieId}`, {
            method: "DELETE",
        });
    };

    return(
        <>
            <div className="flex justify-end">
                <button onClick={() => {deleteMovie(id); setIsStatusForm(false); setCurrentStatus("Add to List")}} className="px-4 py-1.5 text-sm bg-gray-200 text-gray-600 rounded hover:bg-gray-300 hover:text-red-600 active:text-red-600 hover:cursor-pointer">Delete</button>
            </div>
        </>
    );
};

export default DeleteBtn;