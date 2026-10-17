import { Products } from "../Data/products.js";
export function renderHeaderHTML() {
  let valueStock = 0;
  let productsQuantity = 0;
  Products.forEach((product) => {
    valueStock += product.price * product.quantity;
    productsQuantity += product.quantity;
  });

  let headerHTML = document.querySelector(".js-header");
  headerHTML.innerHTML = `     
        <div id="adding-product-bar">
          <p class="page-title">Gestion d'Inventaire</p>
          <p class="small-title">Gérez vos produits en stock</p>
        </div>
        <div class="stock-info">
          <div class="total-products">
            <p class="tp">Total produits</p>
            <p class="total-product-number">${productsQuantity}</p>
          </div>
          <div class="stock-value">
            <p class="sv">Valeur stock</p>
            <p class="stock-value-number">${valueStock} DH</p>
          </div>
        </div>
      `;
}
