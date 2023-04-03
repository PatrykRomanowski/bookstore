import React, { useState, useEffect } from "react";

import bookImage from "./bryndza2.jpg";

import "./booksComponent.css";

const books = [
  {
    booksName: "Mikrokontrolery z rdzeniem arm7",
    author: "Lucjan Bryndza",
    price: 10.99,
    img: require("../img/bryndza1.jpg"),
  },
  {
    booksName: "Mikrokontrolery z rdzeniem arm9",
    author: "Lucjan Bryndza",
    price: 12.99,
    img: require("../img/bryndza2.jpg"),
  },
];

function TestComponent3() {
  const showBooks = books.map((item) => (
    <div className="bookContainer" key={item.price}>
      <div className="bookPhoto">
        <img className="photo" src={item.img} alt=""></img>
      </div>

      <div>{item.booksName}</div>
      <div>{item.author}</div>
      <div>{item.price}</div>
    </div>
  ));

  return <div className="booksContainer"> {showBooks} </div>;
}

export default TestComponent3;
