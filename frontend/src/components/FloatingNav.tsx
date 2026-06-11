import { useState } from "react";


function FloatingNav(){
    const [isNav, setIsNav] = useState(false);
    const navIcons = [
        { icon: 'bx bxs-home', text: 'home' },
        { icon: 'bx bx-play', text: 'anime list' },
        { icon: 'bx bxs-book-alt', text: 'manga list' },
        { icon: 'bx bxs-chat', text: 'forum' },
        { icon: 'bx bxs-user', text: 'profile' },
        { icon: 'bx bxs-envelope', text: 'notifications' },
        { icon: 'bx bxs-cog', text: 'settings' },
        { icon: 'bx bx-search', text: 'search' },
        { icon: 'bx bx-x', text: '' },
    ];

    const handleNavClick = () => {
        setIsNav(!isNav);
        // console.log(isNav);
    };

    return(
        <>
            <section className="xl:hidden fixed bottom-5 right-5 flex justify-center items-center bg-white rounded shadow-2xl">
                {!isNav && <i onClick={() => handleNavClick()} className='bx bx-menu p-0.5 text-blue-400 text-5xl' ></i>}

                {isNav && <div className="border border-gray-100 grid grid-cols-3 gap-3 px-2 py-4 rounded shadow">
                    {navIcons.map((nav, index) => {
                        return <div key={index} className="flex gap-1 flex-col justify-center items-center">
                            <i onClick={index === 8 ? handleNavClick : undefined} className={`${nav.icon} text-3xl`} ></i>
                            <p className="text-[10px] font-medium">{nav.text}</p>
                        </div>
                    })}
                </div>}
            </section>
        </>
    );
};

export default FloatingNav;