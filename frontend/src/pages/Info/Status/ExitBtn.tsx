

type ExitBtnProps = {
    setIsStatusForm: React.Dispatch<React.SetStateAction<boolean>>,
};


function ExitBtn({ setIsStatusForm }: ExitBtnProps ){

    return(
        <>
            <button onClick={() => setIsStatusForm(false)} className="absolute top-4 right-4">
                <i className='bx bx-x text-2xl text-white hover:cursor-pointer' ></i>
            </button>
        </>
    );
};

export default ExitBtn;