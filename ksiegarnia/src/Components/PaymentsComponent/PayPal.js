import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { testContextActions } from "../../store/test-context";

import "./PayPal.css";

export default function PayPal() {
  const paypal = useRef();
  const totalCost = useSelector((state) => state.test.value);
  const isLogin = useSelector((state) => state.login.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.React_App_PayPalKey}&currency=PLN`;
    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: `Płatność od: ${isLogin}`,
                  amount: {
                    currency_code: "PLN",
                    value: totalCost,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
            dispatch(testContextActions.resetItems());
            setPaymentSuccessful(true);
            setTimeout(() => {
              navigate("/shop");
            }, 6000);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {!paymentSuccessful ? (
        <div ref={paypal} className="paypal-module"></div>
      ) : (
        <div>Następuje przekierowanie do strony głównej...</div>
      )}
      {paymentSuccessful && (
        <div className="modal" id="payment-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Płatność zrealizowana</h2>
              <span
                className="close"
                onClick={() => setPaymentSuccessful(false)}
              >
                &times;
              </span>
            </div>
            <div className="modal-body">
              <p>Płatność została poprawnie zrealizowana.</p>
              <button className="btn" onClick={() => navigate("/shop")}>
                Kontynuuj
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
