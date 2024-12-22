// Create an array of pizza toppings with at least four different toppings
const pizzaToppings = [
  "pepperoni",
  "pineapples",
  "red onions",
  "green peppers"
];

// Create the greetCustomer function
function greetCustomer() {
  console.log("Welcome to Pizza House, our toppings are:");
  pizzaToppings.forEach(topping => {
    console.log(`${topping}`);
  });
}

// Create the getPizzaOrder function
function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    `One ${size} ${crust} crust pizza with ${toppings.join(", ")} coming up!`
  );
  return [size, crust, toppings];
}

// Create the preparePizza function
function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  const pizza = { size, crust, toppings };
  return pizza;
}

// Create the servePizza function
function servePizza(pizza) {
  console.log(
    `Order up! Here's your ${pizza.size} ${
      pizza.crust
    } crust pizza with ${pizza.toppings.join(", ")}. Enjoy!`
  );
  return pizza;
}

// Call the functions
greetCustomer(); // Welcome and list toppings
const order = getPizzaOrder(
  "large",
  "thick",
  "pepperoni",
  "pineapples",
  "red onions"
);
const preparedPizza = preparePizza(order);
servePizza(preparedPizza);
