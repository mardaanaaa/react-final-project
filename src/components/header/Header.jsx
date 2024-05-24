import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>PORTFOLIO</h5>
        <h1>Mardan</h1>
        <h5 className="text-light">Currently, I am studying Digital Management and Design at Narxoz University</h5>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
