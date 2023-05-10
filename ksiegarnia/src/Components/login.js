import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

import { auth } from "./firebase";
import { loginActions } from "../store/login-context";
import { useNavigate } from "react-router-dom";
import "./loginComponent.css";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginResult, setLoginResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(`Zalogowano jako: ${email}`);
      setLoginResult("success");
      dispatch(loginActions.login({ value: email }));
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setLoginResult(null);
        navigate("/shop");
      }, 2000);
    } catch (error) {
      console.log("Logowanie nie powiodło się.", error);
      setLoginResult("failure");
      setShowModal(true);
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleCloseModal = () => {
    setLoginResult(null);
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="inputText">WPISZ LOGIN:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="inputText">WPISZ HASŁO:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Zaloguj się</button>
        <p onClick={registerHandler} className="registerButton">
          Jeśli nie posiadasz konta zarejestruj się!
        </p>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              {loginResult === "failure" && <h2>Błąd logowania</h2>}
              {loginResult === "success" && <h2>Zalogowano pomyślnie</h2>}
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              {loginResult === "failure" && (
                <div>
                  Logowanie nie powiodło się. Sprawdź poprawność danych i
                  spróbuj ponownie.
                </div>
              )}
              {loginResult === "success" && (
                <div>Zostałeś zalogowany pomyślnie.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
