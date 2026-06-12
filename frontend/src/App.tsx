// pages 
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Overview from "./pages/Overview/Overview";
import Favorites from "./pages/Favorites/Favorites";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </>
  )
};

export default App;
