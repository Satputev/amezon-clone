import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      {/* logo on the left ->img */}

      <Link>
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* searchbox */}
      <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link*/}
        <Link className="header__link" to={!user && "/login"}>
          <div className="header__option" onClick={login}>
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Signin"}
            </span>
          </div>
        </Link>
        {/* 2st link*/}

        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo"> &Orders</span>
          </div>
        </Link>
        {/* 3st link*/}

        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4st link*/}

        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            {/*shopping basket icon */}
            <ShoppingBasketIcon />
            {/*no of items in basket */}
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
      {/* basket icon with number */}
    </div>
  );
}

export default Header;
