import React from "react";

import { useDispatch } from "react-redux";

import { testContextActions } from "../store/test-context";

import "./booksComponent.css";

const books = [
  {
    id: 101,
    booksName: "Java",
    author: "Kubiak Mirosław J.",
    price: 16.99,
    pricePromo: 11.99,
    img: require("../img/java2.jpg"),
    counter: 1,
  },

  {
    id: 102,
    booksName: "Język R",
    author: "J.D. Long  ",
    price: 18.99,
    pricePromo: 11.99,
    img: require("../img/R.jpg"),
    counter: 1,
  },

  {
    id: 103,
    booksName: "Big Data",
    author: "David Stephenson",
    price: 12.99,
    pricePromo: 11.99,
    img: require("../img/data.jpg"),
    counter: 1,
  },
  {
    id: 104,
    booksName: "C++",
    author: "Stroustrup Bjarne",
    price: 14.99,
    pricePromo: 11.99,
    img: require("../img/cpp.jpg"),
    counter: 1,
  },
  {
    id: 105,
    booksName: "Laravel",
    author: "Kamiński Paweł",
    price: 11.99,
    pricePromo: 6.99,
    img: require("../img/laravel.jpg"),
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
