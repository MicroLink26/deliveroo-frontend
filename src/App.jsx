import React, { useState, useEffect } from "react";
import "./App.css";
import Restaurant from "./components/restaurant/Restaurant";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [shoppingCart, setShoppingCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200/");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const setNewCard = (action, item) => {
    let findElem = shoppingCart.filter((elem) => elem.item === item.item)[0];

    if (findElem !== undefined) {
      if (action === "ADD") {
        findElem.number++;
      } else {
        findElem.number--;
      }

      setShoppingCart([...shoppingCart]);
    } else {
      setShoppingCart([...shoppingCart, item]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (shoppingCart.filter((elem) => elem.number === 0).length > 0)
      setShoppingCart([...shoppingCart.filter((elem) => elem.number !== 0)]);
  }, [shoppingCart]);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Restaurant
        data={data}
        shoppingCart={shoppingCart}
        setShoppingCart={setNewCard}
      />
    </>
  );
}

export default App;
