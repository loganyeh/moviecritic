// pages 
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Overview from "./pages/Overview/Overview";
import Favorites from "./pages/Favorites/Favorites";
import AnimeList from "./pages/AnimeList/AnimeList";
import Info from "./pages/Info/Info";

import { useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const [currentMovieId, setCurrentMovieId] = useState(374205);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home setCurrentMovieId={setCurrentMovieId} />} />
        <Route path="/browse" element={<Browse setCurrentMovieId={setCurrentMovieId} />} />
        <Route path="/overview" element={<Overview setCurrentMovieId={setCurrentMovieId} />} />
        <Route path="/favorites" element={<Favorites setCurrentMovieId={setCurrentMovieId} />} />
        <Route path="/animelist" element={<AnimeList setCurrentMovieId={setCurrentMovieId} />} />
        <Route path="/info" element={<Info currentMovieId={currentMovieId} setCurrentMovieId={setCurrentMovieId} />} />
      </Routes>
    </>
  )
};

export default App;
