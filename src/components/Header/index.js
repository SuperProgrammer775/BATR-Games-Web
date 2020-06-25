import React from "react";
import "./styles.scss";
import Logo from "../../assets/BATR-Games-logos_transparent.png";

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="BATR Games Logo"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
