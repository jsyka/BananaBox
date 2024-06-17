import React from "react";
// import Menu from "./components/menu/Menu";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import HomePg from "./pages/homePg/HomePg";

const App = () => {
  return (
    <div className="main">
      <div className="container">
        {/* <Menu /> */}
        <Routes className="contents">
          hello world
          {/* <Route path="/home" element={<HomePg />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
