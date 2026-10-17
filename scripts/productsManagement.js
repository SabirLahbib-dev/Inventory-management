import { Products } from "../Data/products.js";
import { saveProducts } from "../Magasin.js";
import { displayProduct } from "../Magasin.js";
// add product
export function addProduct() {
  // getting the products informations
  let productNameElement = document.querySelector(".js-add-product-input");
  let productPriceElement = document.querySelector(".js-add-price-input");
  let productDescriptionElement = document.querySelector(
    ".js-add-product-description",
  );
  let productQuantityElement = document.querySelector(".js-add-quantity-input");
  let productImageElement = document.querySelector(".js-add-product-image");
  if (
    !productNameElement.value ||
    isNaN(productPriceElement.value) ||
    !productDescriptionElement.value ||
    isNaN(productQuantityElement.value) ||
    productImageElement.files.length === 0
  ) {
    console.error("Error");
  } else {
    Products.push({
      id: Products.length + 1,
      name: productNameElement.value,
      description: productDescriptionElement.value,
      image: URL.createObjectURL(productImageElement.files[0]),
      price: Number(productPriceElement.value),
      quantity: Number(productQuantityElement.value),
    });

    saveProducts();

    // reset inputs
    productNameElement.value = "";
    productPriceElement.value = "";
    productDescriptionElement.value = "";
    productQuantityElement.value = "";
    productImageElement.value = "";

    displayProduct();
  }
}
