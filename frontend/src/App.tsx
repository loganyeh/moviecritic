import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// pages 
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Overview from "./pages/Overview/Overview";
import Favorites from "./pages/Favorites/Favorites";
import AnimeList from "./pages/AnimeList/AnimeList";
import MangaList from "./pages/MangaList/MangaList";
import Info from "./pages/Info/Info";
import Stats from "./pages/Stats/Stats";

import Social from "./pages/Social/Social";
import Reviews from "./pages/Reviews/Reviews";
import Submissions from "./pages/Submissions/Submissions";
import Forum from "./pages/Forum/Forum";

import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";

function App() {
  const [currentMovieId, setCurrentMovieId] = useState(374205);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home setCurrentMovieId={setCurrentMovieId} />} />
          <Route path="/browse" element={<Browse setCurrentMovieId={setCurrentMovieId} />} />
          <Route path="/info" element={<Info currentMovieId={currentMovieId} setCurrentMovieId={setCurrentMovieId} />} />
        </Route>

        <Route element={<ProfileLayout />}>
          <Route path="/overview" element={<Overview setCurrentMovieId={setCurrentMovieId} />} />
          <Route path="/animelist" element={<AnimeList setCurrentMovieId={setCurrentMovieId} />} />
          <Route path="/mangalist" element={<MangaList setCurrentMovieId={setCurrentMovieId} />} />
          <Route path="/favorites" element={<Favorites setCurrentMovieId={setCurrentMovieId} />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/social" element={<Social />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/submissions" element={<Submissions />} />
        </Route>

        <Route path="/forum" element={<Forum />} />
      </Routes>
    </>
  )
};

export default App;
