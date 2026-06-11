// pages 
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
    </>
  )
};

export default App;
