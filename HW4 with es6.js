// Hello) here is a link for sandbox : https://codepen.io/pakpak28/pen/abZBQGL?editors=0012

// 1) Write a function `splitAndMerge
const splitAndMerge = (str, sp) =>
  str
    .split(" ")
    .map((word) => word.split("").join(sp))
    .join(" ");

console.log(splitAndMerge("My name is John", " ")); // "M y n a m e i s J o h n"
console.log(splitAndMerge("Hello World!", ",")); // "H,e,l,l,o W,o,r,l,d,!"

// 2) Write a function `convert`
const convert = (obj) => Object.entries(obj);
let obj = { name: "Jeremy", age: 24, role: "Software Engineer" };

console.log(convert(obj)); // [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
// 3) Complete the method/function  for Capitalize
const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());

console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("the-stealth-warrior")); // returns "TheStealthWarrior"
// 4) Write a reverse function
const reverseStr = (str) =>
  str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

console.log(reverseStr("A fun little challenge!")); // "A nuf elttil !egnellahc"
// 5) Write a function `stringExpansion`
const stringExpansion = (str) =>
  str.replace(/\d\D*/g, (m) => m.slice(1).replace(/./g, (n) => n.repeat(m[0])));

console.log(stringExpansion("3D2a5d2f")); // "DDDaadddddff"
console.log(stringExpansion("3d332f2a")); // "dddffaa"
console.log(stringExpansion("abcde")); // "abcde"

// 6) Write `largest` and `smallest` functions
const largest = (...arg) => Math.max(...arg);
const smallest = (...arg) => Math.min(...arg);

console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5

// 7) Write function `transform`
const transform = (arr) => arr.map((elem) => () => elem);

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
transform(baseArray);
console.log(newArray[3]()); // should return 40`
console.log(newArray[4]()); // should return 50`

// 8) Write function `sum`
const sum = (...n) => (n.length == 0 ? 0 : n[0] + sum(...n.slice(1)));
//solution for 'reduce'method
const sum = (...numbers) => numbers.reduce((a, b) => a + b);

console.log(sum(1, 3, 5, 7)); // 16
// 9) Write function `countDown`

const countDown = (num) =>
  setInterval(() => {
    if (num < 0) clearInterval();
    else {
      console.log(num);
      num--;
    }
  }, 1000);

countDown(3); // 3 2 1 0
countDown(5); // 5 4 3 2 1 0
