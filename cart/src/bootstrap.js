import faker from "faker";

const mount = (el) => {
  const cart = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

  el.innerHTML = cart;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-cart");
    // Assuming our container does not have an element
    // with id 'dev-products'....
    if (el) {
      // We are probably running in isolation
      mount(el);
    }
  }
  
  // Context/Situation #2
  // We are this file in development or production
  // through CONTAINER APP
  // NO GUARANTEE that an element with and id of 'dev-products'
  // WE DO NOT WANT try immediately render the app
export { mount };
