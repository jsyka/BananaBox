import React from "react";
import Menu from "./components/menu/Menu";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePg from "./pages/homePg/HomePg";
import DiscoverPg from "./pages/discoverPg/DiscoverPg";
import LandingPg from "./pages/landingPg/LandingPg";
import ListPg from "./pages/listPg/ListPg";

const App = () => {
  return (
    <div className="main">
      <div className="container">
        <Menu />
        <Routes className="contents">
        <Route path="/BananaBox" element={<LandingPg />} />
          <Route path="/home" element={<HomePg />} />
          <Route path="/my-list" element={<ListPg/>}/>
          <Route path="/discover" element={<DiscoverPg />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
