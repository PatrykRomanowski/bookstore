import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { testContextActions } from "../store/test-context";

import "./PaymentForm.modules.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const totalCost = useSelector((state) => state.test.value);
  const isLogin = useSelector((state) => state.login.email);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: totalCost * 100,
          id: id,
          emailDesciption: isLogin,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
          dispatch(testContextActions.resetItems());
        }
      } catch (error) {
        console.log("Error", error);
        setError(error);
      }
    } else {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(null);
        navigate("/shop");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <>
      {!success && !error ? (
        <form className="stripeForm" onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="stripeFormButton" type="submit">
            Pay
          </button>
        </form>
      ) : (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Status płatności:</h2>
            </div>
            <div className="modal-body">
              {success && <p>Twoja płatność zakończyła się sukcesem!</p>}
              {error && <p>Płatność nie została zrealizowana: {error}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
