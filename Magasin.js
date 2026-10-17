import {
  Products,
  addQuantity,
  minusQuantity,
  deleteProduct,
} from "./Data/products.js";
import { renderHeaderHTML } from "./scripts/renderTheHeader.js";
import { addProduct } from "./scripts/productsManagement.js";
// save function
export function saveProducts() {
  localStorage.setItem("products", JSON.stringify(Products));
}
// display function
export const displayProduct = function () {
  renderHeaderHTML();
  const inputElement = document.querySelector(".js-main-products-container");
  inputElement.innerHTML = "";
  let html = "";

  Products.forEach((value, index) => {
    html += `<div class="product-container js-product-container">
          <img src="${value.image}" class="products"/>
          <div class="product-info">
            <p class="product-name">${value.name}</p>
            <p class="product-discription">
              ${value.description}
            </p>
            <p class="product-price">${value.price}DH</p>
          </div>
          <div class="add-delete-button">
            <button class="minus-button js-minus-button" data-product-id="${value.id}">-</button>
            <p class="js-quantity-spot">${value.quantity}</p>
            <button class="plus-button js-plus-button" data-product-id="${value.id}">+</button>
            <button class="delete-button js-delete-button" data-product-id="${value.id}">Supprimer</button>
          </div>
        </div>`;
  });

  inputElement.innerHTML = html;

  document.querySelectorAll(".js-plus-button").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.productId);
      addQuantity(productId);
      displayProduct();
    });
  });

  document.querySelectorAll(".js-minus-button").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.productId);
      minusQuantity(productId);
      displayProduct();
    });
  });

  document.querySelectorAll(".js-delete-button").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.productId);
      deleteProduct(productId);
      displayProduct();
    });
  });
};
displayProduct();

// add product
document
  .querySelector(".js-final-adding-product-button")
  .addEventListener("click", () => {
    addProduct();
    saveProducts();
  });
