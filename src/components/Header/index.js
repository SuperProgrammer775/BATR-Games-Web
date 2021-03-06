import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/BATR-Games-logos_transparent.png";
import { auth } from "./../../firebase/utils.js";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const { currentUser } = useSelector(mapState);
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="BATR Games Logo"></img>
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()} className="logoutBtn">
                  LOGOUT
                </span>
              </li>
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
