

function InfoNav(){
    const infoNav = [
        { text: 'Overview', route: '/overview'},
        { text: 'Watch', route: '/animelist'},
        { text: 'Characters', route: '/animelist'},
        { text: 'Staff', route: '/favorites'},
        { text: 'Reviews', route: '/overview'},
        { text: 'Stats', route: '/overview'},
        { text: 'Social', route: '/overview'},
    ];

    return(
        <>
            <section className="2xl:flex 2xl:justify-center">
                <div className="flex lg:justify-around 2xl:justify-between max-w-3xl w-full overflow-x-scroll lg:overflow-x-hidden">
                    {infoNav.map((nav, index) => {
                        return <div key={index} className="px-3 py-3 text-sm font-light text-gray-600">
                            {nav.text}
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default InfoNav;