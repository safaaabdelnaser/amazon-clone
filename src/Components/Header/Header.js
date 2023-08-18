import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import cart from "../../images/shopping-cart.png";
import { useAuth } from "../../Context/contextState";
import { auth } from "../../Firebase";

import "./Header.css";

const Header = () => {
  const userData = useAuth();
  console.log("hhhhhhhhhhhhhhh",userData.basket?.length);
  // console.log(userData.user.email)
  const handelSignOut = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo of amazon" className="header-logo" />
      </Link>
      <div className="header-search">
        <input
          type="text"
          className="header-searchInput"
          placeholder="Search"
        />
        <img
          src="https://img.icons8.com/?size=1x&id=132&format=png"
          alt="search-icon"
          className="header-searchIcon"
        />
      </div>
      <div className="header-nav ">
      <Link to="/" className="link" >
          <div className="header-option">
            <span className="header-optionLineOne">Amazon</span>
            <span className="header-optionLineTwo">Home</span>
          </div>
        </Link>
        <Link to={!userData.user ? "/login" : ""} className="link">
          <div className="header-option" onClick={handelSignOut}>
            <span className="header-optionLineOne">
              Hello
              {userData.user ? ` ${userData.user.email}` : " Guest"}
            </span>
            <span className="header-optionLineTwo">
              {userData.user ? "Sign Out" : " Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="link">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="link">
          <div className="header-optionBasket">
            <img src={cart} alt="shopping cart" />
            <span className="header-optionLineTwo header-basketCount">
              {userData.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
