import { mount as productsMount } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("container");
productsMount(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));
