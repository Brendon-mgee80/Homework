const pizzaPlace = "Best Pizza Slice";
const numberOfToppings = 12;

console.log(`"Pizza Place: ${pizzaPlace}, Type: ${typeof pizzaPlace}"`);
console.log(
  `Number of Toppings: ${numberOfToppings}, Type: ${typeof numberOfToppings}`
);

console.log(
  `Welcome to ${pizzaPlace}, where we offer ${numberOfToppings} delicious toppings for your pizza!`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
