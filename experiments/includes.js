const fruits = ["Banana", "Orange", "Apple", "Mango"];
const arrFruit = fruits.includes("Mango");
// console.log(arrFruit);

// Example II
const arrObj = [
  {
    item: "javaScript Book",
    pencil: 2,
    desktop: "Samsung",
    condition: true,
    arr: ["chess", "calendar", "card"],
  },
  {
    item: "Node Js",
    pencil: 3,
    desktop: "Hp",
    condition: true,
    arr: ["frame", "lightBoard", "glass"],
  },
  {
    item: "java Book",
    pencil: 4,
    desktop: "Apple",
    condition: false,
    arr: ["iphone", "earphone", "charger"],
  },
];

const funArr = (arg) => {
  arg.forEach((arr) => console.log(arr.arr));
};

funArr(arrObj);
