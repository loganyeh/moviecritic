
type DeleteBtnProps = {
    id: number
    setIsStatusForm: React.Dispatch<React.SetStateAction<boolean>>,
};

function DeleteBtn({ id, setIsStatusForm }: DeleteBtnProps ){
    // Delete Request
    async function deleteMovie(currentMovieId: number){
        await fetch(`http://localhost:3000/movies/${currentMovieId}`, {
            method: "DELETE",
        });
    };

    return(
        <>
            <div className="flex justify-end">
                <button onClick={() => {deleteMovie(id); setIsStatusForm(false)}} className="px-4 py-1.5 text-sm bg-gray-200 text-gray-600 rounded">Delete</button>
            </div>
        </>
    );
};

export default DeleteBtn;