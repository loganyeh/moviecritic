// pages 
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Overview from "./pages/Overview/Overview";
import Favorites from "./pages/Favorites/Favorites";
import AnimeList from "./pages/AnimeList/AnimeList";
import Info from "./pages/Info/Info";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/animelist" element={<AnimeList />} />
      <Route path="/info" element={<Info />} />
    </Routes>
    </>
  )
};

export default App;
