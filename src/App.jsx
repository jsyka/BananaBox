import React from "react";
import Menu from "./components/menu/Menu";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePg from "./pages/homePg/HomePg";
import DiscoverPg from "./pages/discoverPg/DiscoverPg";

const App = () => {
  return (
    <div className="main">
      <div className="container">
        <Menu />
        <Routes className="contents">
          <Route path="/home" element={<HomePg />} />
          <Route path="/discover" element={<DiscoverPg />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
