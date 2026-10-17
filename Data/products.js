import { saveProducts } from "../Magasin.js";
export let Products = JSON.parse(localStorage.getItem("products"));
if (!Products) {
  Products = [
    {
      id: 1,
      name: "Casque Gaming RGB",
      description: "Casque avec son surround, micro anti-bruit et RGB lighting",
      image: "images/product1.jpeg",
      price: 120,
      quantity: 602,
    },
    {
      id: 2,
      name: "Clavier Mécanique",
      description: "Clavier mécanique gaming switches blue avec rétroéclairage",
      image: "images/product2.jpeg",
      price: 80,
      quantity: 123,
    },
    {
      id: 3,
      name: "Souris Gaming Pro",
      description: "Souris haute précision 16000 DPI RGB pour gaming",
      image: "images/product3.jpeg",
      price: 45,
      quantity: 133,
    },
    {
      id: 4,
      name: "Écran 27 pouces",
      description: "Moniteur Full HD 165Hz parfait pour gaming",
      image: "images/product4.jpeg",
      price: 320,
      quantity: 231,
    },
    {
      id: 5,
      name: "Tapis de souris XXL",
      description: "Tapis large antidérapant pour clavier et souris",
      image: "images/product5.jpeg",
      price: 25,
      quantity: 1223,
    },
    {
      id: 6,
      name: "Microphone USB",
      description: "Microphone professionnel pour streaming et gaming",
      image: "images/product6.jpeg",
      price: 95,
      quantity: 231,
    },
    {
      id: 7,
      name: "Webcam HD",
      description: "Webcam 1080p avec autofocus et micro intégré",
      image: "images/product7.jpeg",
      price: 60,
      quantity: 1283,
    },
    {
      id: 8,
      name: "Chaise Gaming",
      description: "Chaise ergonomique avec support lombaire",
      image: "images/product8.jpeg",
      price: 210,
      quantity: 100,
    },
  ];
}

export function addQuantity(productId) {
  Products.forEach((product) => {
    if (product.id === productId) {
      product.quantity++;
      saveProducts();
    }
  });
}

export function minusQuantity(productId) {
  Products.forEach((product) => {
    if (product.id === productId) {
      product.quantity--;
      saveProducts();
    }
  });
}

export function deleteProduct(productId) {
  const newProducts = [];
  Products.forEach((product) => {
    if (product.id !== productId) {
      newProducts.push(product);
    }
  });
  Products = newProducts;
  saveProducts();
}
