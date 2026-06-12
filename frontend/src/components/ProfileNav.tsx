

function ProfileNav(){
    const profileNav = [
        { text: 'Overview', route: '/'},
        { text: 'Anime List', route: '/'},
        { text: 'Manga List', route: '/'},
        { text: 'Favorites', route: '/'},
        { text: 'Stats', route: '/'},
        { text: 'Social', route: '/'},
        { text: 'Reviews', route: '/'},
        { text: 'Submissions', route: '/'},
    ];

    return(
        <>
            <section className="bg-white">
                <div className="flex md:justify-center gap-x-10 md:gap-x-12 md:gap-y-5 px-12 py-4 lg:py-3 overflow-x-scroll md:flex-wrap">
                    {profileNav.map((nav, index) => {
                        return <div key={index} className={`${index === 0 ? "text-blue-400" : "text-gray-500"} text-sm font-semibold shrink-0`}>
                            {nav.text}
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default ProfileNav;