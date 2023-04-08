import React from "react";

import { useSelector } from "react-redux";
import "./shoppingCartComponent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ShoppingCartComponent = () => {
  const myItems = useSelector((state) => state.test.items);
  const totalCost = useSelector((state) => state.test.value);

  const deleteItem = () => {
    console.log("XD");
  };

  const showMyBooks = myItems.map((item) => (
    <div className="item">
      <img className="photoInShoppingCart" src={item.img} alt=""></img>
      <div className="bookNameShoppingCart">{item.booksName}</div>
      <div className="costinShoppinCart">
        {item.pricePromo === null ? item.price : item.pricePromo}
      </div>
      <div className="counterInShoppingCart"> X {item.counter}</div>
      <div className="buttonContainer">
        <div className="deleteItem">
          <FontAwesomeIcon
            style={{ color: "#777", width: 16 }}
            icon={faTrash}
          />
        </div>
      </div>
      <div className="totalCostInShoppingCart">
        {item.pricePromo === null
          ? item.price * item.counter
          : item.pricePromo * item.counter}
        &pound;
      </div>
    </div>
  ));

  return (
    <div className="itemsContainer">
      <div className="shippingCartTitle">Twój koszyk</div>
      {showMyBooks}
      <div className="totalCostContainer">
        <div className="totalCost">DO ZAPŁATY:</div>
        <div className="totalCostValue">{totalCost}&pound;</div>
      </div>

      <button className="goToPayButton">Przejdź do płatności</button>
    </div>
  );
};

export default ShoppingCartComponent;
