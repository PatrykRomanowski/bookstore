import React from "react";

import { useSelector, useDispatch } from "react-redux";
import "./shoppingCartComponent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { testContextActions } from "../store/test-context";

const ShoppingCartComponent = () => {
  const dispatch = useDispatch();

  const deleteItem = (id, price, counter) => {
    dispatch(testContextActions.deleteItem({ id, price, counter }));
  };

  const myItems = useSelector((state) => state.test.items);
  const totalCost = useSelector((state) => state.test.value);
  const isLogin = useSelector((state) => state.login.email);

  const showMyBooks = myItems.map((item) => (
    <div className="item">
      <img className="photoInShoppingCart" src={item.img} alt=""></img>
      <div className="bookNameShoppingCart">{item.booksName}</div>
      <div className="costinShoppinCart">
        {item.pricePromo === undefined ? item.price : item.pricePromo}
      </div>
      <div className="counterInShoppingCart"> X {item.counter}</div>
      <div className="buttonContainer">
        <div
          onClick={() =>
            deleteItem(
              item.id,
              item.pricePromo === undefined ? item.price : item.pricePromo,
              item.counter
            )
          }
          className="deleteItem"
        >
          <FontAwesomeIcon
            style={{ color: "#777", width: 16 }}
            icon={faTrash}
          />
        </div>
      </div>
      <div className="totalCostInShoppingCart">
        {item.pricePromo === undefined
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

      <button
        disabled={
          (isLogin ? false : true) || (myItems.length > 0 ? false : true)
        }
        className="goToPayButton"
      >
        Przejdź do płatności
      </button>
    </div>
  );
};

export default ShoppingCartComponent;
