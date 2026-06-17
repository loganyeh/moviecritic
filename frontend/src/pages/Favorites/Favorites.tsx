import DesktopHeader from "../../components/DesktopHeader";
import FloatingNav from "../../components/FloatingNav";
import Footer from "../../components/Footer";
import ProfileBanner from "../Overview/ProfileBanner";
import ProfileNav from "../../components/ProfileNav";
import FavoritesCard from "./FavoritesCard";

import { useState, useEffect } from "react";
import type { MovieListsType } from "../../services/tmdb/movieLists";

function Favorites(){
    const [movies, setMovies] = useState<MovieListsType[]>([]);
    // const [characters, setCharacters] = useState();

    useEffect(() => {
        async function getMovies(){
            const response = await fetch('http://localhost:3000/favorites/movies');
            // const response = await fetch('https://localhost:3000/favorites/movies/');
            // const response = await fetch('/movies/favorites');
            const data: MovieListsType[] = await response.json();

            setMovies(data);
        };

        getMovies();
    }, []);

    return(
        <>
            <DesktopHeader />
            <ProfileBanner />
            <ProfileNav />

            <div className="flex flex-col items-center gap-10 px-6 py-10 pb-16 bg-gray-200">
                <FavoritesCard sectionName="Anime" favoriteData={movies} />
                {/* <FavoritesCard sectionName="Characters" /> */}
            </div>

            <FloatingNav />
            <Footer />
        </>
    );
};

export default Favorites