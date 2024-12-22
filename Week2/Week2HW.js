const pizzaPlace = "Best Pizza Slice";
const numberOfToppings = 12;

console.log(`Pizza Place: ${pizzaPlace},  ${typeof pizzaPlace}`);
console.log(
  `Number of Toppings: ${numberOfToppings}, ${typeof numberOfToppings}`
);

console.log(
  `Welcome to ${pizzaPlace}, where we offer ${numberOfToppings} delicious toppings for your pizza!`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
