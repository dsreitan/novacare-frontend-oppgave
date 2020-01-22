import React from "react";
import logo from "../logo.svg";
import "./MainNavigation.css";

export const MainNavigation = () => {
  return (
    <header className="main-nav">
      <img src={logo} className="main-nav-logo" alt="logo" />
    </header>
  );
};

export default MainNavigation;
