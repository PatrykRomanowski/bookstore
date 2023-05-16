import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { loginActions } from "../store/login-context";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.email);
  const totalCost = useSelector((state) => state.test.value);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(loginActions.logout());
      setMessage("Wylogowano pomyslnie.");
      setShowModal(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log("Bład podczas wylogowywania", error);
    }
  };

  useEffect(() => {
    if (isLogin) {
      setShowModal(false);
      setMessage("");
    }
  }, [isLogin]);

  return (
    <div className="header">
      <div className="title">KSIAZKOWNIA</div>

      <div className="menu">
        <div className="menu-item">
          <Link className="header-link" to="/shop">
            SKLEP
          </Link>
        </div>
        <div className="menu-item">
          <Link className="header-link" to="/shopPromo">
            PROMOCJE
          </Link>
        </div>
        <div className="menu-item">
          {isLogin ? (
            <div onClick={handleLogout} className="header-link">
              WYLOGUJ
            </div>
          ) : (
            <Link className="header-link" to="/login">
              ZALOGUJ
            </Link>
          )}
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
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{message}</h2>
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
