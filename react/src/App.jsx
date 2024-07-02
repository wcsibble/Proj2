import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Characters from "./components/Characters";
import Home from "./components/Home";
import Films from "./components/Films";
import Planets from "./components/Planets";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Characters" element={<Characters />} />
          <Route exact path="/Films" element={<Films />} />
          <Route exact path="/Planets" element={<Planets />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
