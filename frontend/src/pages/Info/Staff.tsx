

function Staff(){
    const staff = [
        {name: 'Eiichirou Oda', role: 'Original Creator'},
        {name: 'Kounosuke Uda', role: 'Director (eps 1-278)'},
        {name: 'Kazuya Hisada', role: 'Character Design (eps 385-891)'},
        {name: 'Noboru Koizumi', role: 'Character Design (eps: 1-425)'},
    ];

    return(
        <>
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-medium text-gray-600">Staff</h2>

                <div className="flex flex-col xl:grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-x-[32px]">
                    {staff.map((staff, index) => {
                        return <div key={index} className="flex justify-between shadow">
                            <div className="h-[72px] w-14 apsect-[3/4] bg-blue-300 rounded-l"></div>

                            <div className="flex flex-col justify-between flex-1 p-2.5 font-light bg-white rounded-r">
                                <div className="flex justify-between text-xs">
                                    <p className="text-gray-600">{staff.name}</p>
                                </div>

                                <div className="flex justify-between text-[11px]">
                                    <p className="text-gray-500">{staff.role}</p>
                                </div>
                                
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Staff;