export default function ({ shoppingCart, setShoppingCart }) {
  const changeCart = (action, elem) => {
    //console.log("action>", action);
    setShoppingCart(action, elem);
  };
  return (
    <div className="Cart">
      <div className="Cart--card">
        <button
          className={
            shoppingCart.length > 0
              ? "Cart--validate"
              : "Cart--validate Cart--disabled"
          }
        >
          Valider mon panier
        </button>
        {shoppingCart.length > 0 ? (
          <div className="Cart-minus-cart-container">
            <div className="Cart--items">
              {shoppingCart.map((item) => (
                <div className="Cart--line" key={item.item}>
                  <div className="Cart--counter">
                    <span
                      onClick={() => {
                        changeCart("REMOVE", item);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus-circle green-button"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </span>
                    <span>{item.number}</span>
                    <span
                      onClick={() => {
                        changeCart("ADD", item);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus-circle green-button"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </span>
                  </div>
                  <span className="Cart--item-name">{item.item}</span>
                  <span className="Cart--amount">{item.price} €</span>
                </div>
              ))}
            </div>
            <div className="Cart--results">
              <div className="Cart--result-line">
                <span className="Cart--result-name">Sous-total</span>
                <span className="Cart--amount">90,60 €</span>
              </div>
              <div className="Cart--result-line">
                <span className="Cart--result-name">Frais de livraison</span>
                <span>2,50 €</span>
              </div>
            </div>
            <div className="Cart--total">
              <span className="Cart--result-name">Total</span>
              <span className="Cart--amount">93,10 €</span>
            </div>
          </div>
        ) : (
          <div className="Cart--empty">Votre panier est vide</div>
        )}
      </div>
    </div>
  );
}
