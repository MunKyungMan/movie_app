import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; // Routes 추가
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        {" "}
        {/* <Routes> 추가 */}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/movie-detail" element={<Detail />} />{" "}
      </Routes>
    </HashRouter>
  );
}

export default App;
