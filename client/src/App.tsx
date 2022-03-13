import React from "react";
import { Route, Router, Routes } from "react-router";
import { Menu } from "./components/menu";
import HeaderContainer from "./containers/header";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import "./shared/styles/global.scss";

function App() {
  return (
    <>
      <div className="container">
        <HeaderContainer />
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          </Route>*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
