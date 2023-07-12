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
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // {
  //   item:"",
  //   number:"",
  //   price:""
  // }
  const setNewCard = (action, item) => {
    //console.log(action, item);
    let findElem = shoppingCart.filter((elem) => elem.item === item.item)[0];
    // if ((action = "ADD")) {

    //console.log(findElem);
    if (findElem !== undefined) {
      //const index = shoppingCart.findIndex(
      //  (elem) => findElem.item === elem.item
      //);
      //console.log("existing item");
      if (action === "ADD") {
        findElem.number++;
      } else {
        findElem.number--;
      }

      // setShoppingCart([
      //   ...shoppingCart.filter((elem) => elem.item !== item.item),
      //   findElem,
      // ]);
      setShoppingCart([...shoppingCart]);
      //.splice(index, 1, findElem)
      //setShoppingCart([...shoppingCart.splice(index, 1, findElem)]);
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
