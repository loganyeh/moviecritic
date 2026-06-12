// pages 
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Overview from "./pages/Profile/Overview/Overview";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
    </>
  )
};

export default App;
