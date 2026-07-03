import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function ProfileNav(){
    const profileNav = [
        { text: 'Overview', route: '/overview'},
        { text: 'Movies List', route: '/animelist'},
        { text: 'Shows List', route: '/animelist'},
        { text: 'Favorites', route: '/favorites'},
        { text: 'Stats', route: '/overview'},
        { text: 'Social', route: '/overview'},
        { text: 'Reviews', route: '/overview'},
        { text: 'Submissions', route: '/overview'},
    ];

    return(
        <>
            <section className="bg-white">
                <div className="flex md:justify-center gap-x-10 md:gap-x-12 md:gap-y-5 px-12 py-4 lg:py-3 overflow-x-scroll md:flex-wrap">
                    {profileNav.map((nav, index) => {
                        return <NavLink to={`${nav.route}`} key={index} className={({ isActive }) => `${ isActive ? "text-blue-400" : "text-gray-500"} text-sm font-semibold shrink-0 hover:text-blue-400`}>
                            {nav.text}
                        </NavLink>
                    })}
                </div>
            </section>
        </>
    );
};

export default ProfileNav;