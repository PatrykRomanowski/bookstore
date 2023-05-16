import { useEffect, useState } from "react";
import sha256 from "crypto-js/sha256";
import { useSelector } from "react-redux";

function DotPay() {
  const [message, setMessage] = useState("Przekierowywanie za 3 sekundy...");

  const totalCost = useSelector((state) => state.test.value);
  const isLogin = useSelector((state) => state.login.email);

  useEffect(() => {
    const handleSubmit = () => {
      const form = document.getElementById("paymentForm");
      const dotpayUrl = "https://ssl.dotpay.pl/test_payment/";

      const paymentData = {
        api_version: "dev",
        id: "768789",
        amount: totalCost,
        currency: "PLN",
        description: `Płatność od: ${isLogin}`,
        // URL: "http://localhost:3000/success/",
        // URLC: "http://localhost:3000/success/", // adres powiadomienia o stanie płatności

        chk: "",
      };

      const pin = process.env.React_App_DotPayPin;

      const plainText = `${pin}${paymentData.api_version}${paymentData.id}${paymentData.amount}${paymentData.currency}${paymentData.description}`;
      const checksum = sha256(plainText);

      paymentData.chk = checksum;

      form.action = dotpayUrl;
      form.method = "POST";

      Object.keys(paymentData).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = paymentData[key];
        form.appendChild(input);
      });

      form.submit();
    };

    const timer = setTimeout(() => {
      setMessage("Przekierowywanie...");
      handleSubmit();
    }, 3000);
    return () => clearTimeout(timer); // wyczyszczenie timera
  }, [isLogin, totalCost]);

  return (
    <div>
      <p>{message}</p>
      <form id="paymentForm">
        <input type="submit" style={{ display: "none" }} />{" "}
      </form>
    </div>
  );
}

export default DotPay;
