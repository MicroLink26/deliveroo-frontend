import { nanoid } from "nanoid";

import Meal from "./Meal";
export default function ({ categoriesList, setShoppingCart }) {
  return (
    <div className="Menu">
      {categoriesList.map((category) => {
        return (
          category.meals.length > 0 && (
            <div className="MenuItems" key={nanoid()}>
              <h2>{category.name}</h2>
              <div className="MenuItems--items">
                {category.meals.map((meal) => {
                  return (
                    <Meal
                      meal={meal}
                      key={nanoid()}
                      setShoppingCart={setShoppingCart}
                    ></Meal>
                  );
                })}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}
