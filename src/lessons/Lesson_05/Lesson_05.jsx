import { useState } from "react";
import { v4 } from "uuid";

import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson05() {
  const [products, setProducts] = useState([]);
  const buttonNames = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ketchup",
    "Ice-creem",
  ];

  const addProduct = (product) => {
    setProducts((prevValue) => {
      return [...prevValue, product];
    });
  };

  const orderList = products.map((value) => {
    return (
      <li key={v4()} className="product">
        {value}
      </li>
    );
  });

  const menuButtons = buttonNames.map((value) => {
    return (
      <div key={v4()} className="button-control">
        <Button name={value} onClick={() => addProduct(value)} />
      </div>
    );
  });
  return (
    <div className="page-wrapper">
      <h1>Menu</h1>
      <div className="button-container">{menuButtons}</div>
      <div className="order-list-container">
        <h1>Order list:</h1>
        <ul>{orderList}</ul>
      </div>
    </div>
  );
}

export default Lesson05;
