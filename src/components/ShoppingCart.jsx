export default function () {
  return (
    <div className="Cart">
      <div className="Cart--card">
        <button className="Cart--validate Cart--disabled">
          Valider mon panier
        </button>
        <div className="Cart--empty">Votre panier est vide</div>
      </div>
    </div>
  );
}
