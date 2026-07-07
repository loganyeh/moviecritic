

function UserListToggle(){

    return(
        <>
            <section className="md:hidden flex justify-between items-center">
                <p className="text-xl font-semibold text-gray-700">Hanni's Stats</p>
                <div className="flex justify-center items-center p-2 bg-white rounded shadow">
                    <i className='bx bx-dots-horizontal-rounded text-2xl text-gray-600'></i>
                </div>
            </section>
        </>
    );
};

export default UserListToggle;