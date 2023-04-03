import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="title">KSIAZKOWNIA</div>
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
      <div className="shopping-card">
        <div>
          <FaShoppingCart className="shopping-icon" />
        </div>
        <div className="shopping-card-text">TWÓJ KOSZYK:</div>
        <div className="shopping-card-text">0.00 zł</div>
      </div>
    </div>
  );
};

export default Header;
