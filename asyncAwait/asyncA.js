async function foo() {
  return "hello";
}
const result = foo();
console.log(result);

const fruits = ["banana", "apple", "pear"];
// callback
function fruitFun(fruit) {
  console.log(fruit);
  console.log("hello World");
}
fruits.forEach(fruitFun);

// example II
const programName = [
  "javaScript",
  "python",
  "c#",
  "ruby",
  "c++",
  "java",
  "php",
];
programName.forEach((program) => console.log(program));
