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
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse currentMovieId={currentMovieId} setCurrentMovieId={setCurrentMovieId} />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/animelist" element={<AnimeList />} />
      <Route path="/info" element={<Info currentMovieId={currentMovieId} setCurrentMovieId={setCurrentMovieId} />} />
    </Routes>
    </>
  )
};

export default App;
