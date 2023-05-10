import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "./firebase";
import "./registerComponent.css";

const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationResult, setRegistrationResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Rejestracja powiodła się.");
      setRegistrationResult("success");
      setShowModal(true);
      setTimeout(() => {
        setRegistrationResult(null);
        setShowModal(false);
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.log("Rejestracja nie powiodła się.", error);
      setRegistrationResult("failure");
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setRegistrationResult(null);
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
        <button type="submit">Zarejestruj się</button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              {registrationResult === "failure" && <h2>Błąd rejestracji</h2>}
              {registrationResult === "success" && (
                <h2>Pomyślnie zarejestrowano</h2>
              )}
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              {registrationResult === "failure" && (
                <div>Nie udało się zarejestrować. Spróbuj ponownie.</div>
              )}
              {registrationResult === "success" && (
                <div>
                  Zarejestrowano pomyślnie. Przekierowanie do strony
                  logowania...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterComponent;
