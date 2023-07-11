import Header from "./Header";
import ShopingCart from "../ShoppingCart";
import CategoriesList from "./CategoriesList";

export default function ({ data }) {
  return (
    <>
      <Header restaurant={data.restaurant} />

      <div className="Content">
        <div className="Content--center">
          <CategoriesList categoriesList={data.categories} />
          <ShopingCart />
        </div>
      </div>
      {/* <div className="Cart-minus-container">
        <button disabled="" className="Cart-minus-button-disabled">
          <span>Voir le panier</span>
        </button>
      </div> */}
    </>
  );
}
