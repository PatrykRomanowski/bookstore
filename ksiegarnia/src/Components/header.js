import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import { useSelector } from "react-redux";

import "./header.css";

const Header = () => {
  const totalCost = useSelector((state) => state.test.value);

  return (
    <div className="header">
      <div className="title">KSIAZKOWNIA V2</div>
      <div className="menu">
        <div className="menu-item">
          <Link className="header-link" to="/test2">
            SKLEP
          </Link>
        </div>
        <div className="menu-item">
          <Link className="header-link" to="/test3">
            PROMOCJE
          </Link>
        </div>
        <div className="menu-item">
          <Link className="header-link" to="/login">
            LOGOWANIE
          </Link>
        </div>
      </div>
      <Link className="header-link" to="/shoppingCart">
        <div className="shopping-card">
          <FontAwesomeIcon icon={faShoppingCart} />
          <div className="shopping-card-text">TWÓJ KOSZYK:</div>
          <div className="shopping-card-text">
            {totalCost.toFixed(2)} &pound;
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
