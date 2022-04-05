const numbers = [4, 9, 8];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// example 2
const number = [20, 2, 9];
let total = number.reduce(function (accumulator, current) {
  return accumulator + current;
});
console.log(total);

// example 3
const numberFour = [25, 2, 9];
const addFour = numberFour.reduce(
  (accumulator4, current4) => accumulator4 + current4,
  0
);
console.log(addFour);

// example 4
let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 699,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 9.98,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20.99,
  },
];

let totals = shoppingCart.reduce(function (acc, curr) {
  return acc + curr.qty * curr.price;
}, 0);
console.table(totals);
