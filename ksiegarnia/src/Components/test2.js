import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { testContextActions } from "../store/test-context";

import "./booksComponent.css";

const books = [
  {
    id: 1,
    booksName: "Mikrokontrolery z rdzeniem arm7",
    author: "Lucjan Bryndza",
    price: 10.99,
    pricePromo: 9.99,
    img: require("../img/bryndza1.jpg"),
    counter: 1,
  },
  {
    id: 2,
    booksName: "Mikrokontrolery z rdzeniem arm9",
    author: "Lucjan Bryndza",
    price: 12.99,
    pricePromo: 11.99,
    img: require("../img/bryndza2.jpg"),
    counter: 1,
  },
];

function TestComponent3() {
  const dispatch = useDispatch();

  const addBookHandler = (price, id, item) => {
    dispatch(testContextActions.addValue({ price, id, item }));
  };

  const showBooks = books.map((item) => (
    <div className="bookContainer" key={item.id}>
      <div className="bookPhoto">
        <img className="photo" src={item.img} alt=""></img>
      </div>

      <div className="bookName">{item.booksName}</div>
      <div className="bookAuthor">{item.author}</div>
      {/* <div className="bookPrice">{item.price} £</div> */}

      {item.pricePromo === undefined ? (
        <div className="bookPriceWithOutPromo"> {item.price} £</div>
      ) : (
        <div>
          <div className="bookPrice">{item.price} £</div>
          <div className="bookPricePromo"> {item.pricePromo} £</div>
        </div>
      )}

      <button
        onClick={() =>
          addBookHandler(
            item.pricePromo === undefined ? item.price : item.pricePromo,
            item.id,
            item
          )
        }
        className="addBook"
      >
        DODAJ DO KOSZYKA
      </button>
    </div>
  ));

  return <div className="booksContainer"> {showBooks} </div>;
}

export default TestComponent3;
