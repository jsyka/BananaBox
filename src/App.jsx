import React from "react";
import Menu from "./components/menu/Menu";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePg from "./pages/homePg/HomePg";
import DiscoverPg from "./pages/discoverPg/DiscoverPg";
import LandingPg from "./pages/landingPg/LandingPg";
import ListPg from "./pages/listPg/ListPg";
import TrackPg from "./pages/trackPg/TrackPg";
import SettingsPg from "./pages/settingsPg/SettingsPg";

const App = () => {
  return (
    <div className="main">
      <div className="container">
        <Menu />
        <Routes className="contents">
        <Route path="/BananaBox" element={<LandingPg />} />
          <Route path="/home" element={<HomePg />} />
          <Route path="/my-list" element={<ListPg/>}/>
          <Route path='/my-progress' element={<TrackPg />}/>
          <Route path="/discover" element={<DiscoverPg />} />
          <Route path="/settings" element={<SettingsPg/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
