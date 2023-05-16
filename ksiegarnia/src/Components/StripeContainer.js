import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51N48kBLfY7nXKPpR0z83TcVvXkgGu8Q74ai1duQVMoA4kmK1k8lYt4Od7BWTCTumtPG2eRMj27UmPVPxecsHrTA100JzdQ6ZZL";
const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  console.log("XD");
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
