// let arr = [1,2,3,4,5,6];
// let red = arr.reduce((summ, item)=> summ+item);
// console.log(red);
// let arr = [12,21,33,41,55,61];
// let summ = arr.reduce((sum, item) => sum+item) / arr.length;
// console.log(summ);
// const fruits = [
//     { id: 0, name: "Яблуко" },
//     { id: 1, name: "Груша" },
//     { id: 2, name: "Банан" },
//     { id: 3, name: "Апельсин" },
//     { id: 4, name: "Ківі" }
// ];
// console.log(fruits.find((item) => item.name.toLowerCase() === "ківі"));
// console.log(fruits.find((item) => item.id === 1));
// console.log(fruits.filter((item) => item.id > 2));
// let result = fruits.map((item) => item.name.length);
// console.log(result);
// let names = "Іван, Марія, Олександр, Ольга, Петро";
// let arr = names.split(", ");
// console.log(arr);
// let names = "Іван, Марія, Олександр, Ольга, Петро";
// let arr = names.split(", ");
// let newString = arr.join(", ");
// console.log(newString);
// swich case
// const value = prompt("Enter name product").toLowerCase();
// let cost;
// switch (value) {
//     case "apple":
//         cost = 10;
//         alert(`${value} costs ${cost}`);
//         break;
//     case "cherry":
//         cost = 50;
//         alert(`${value} costs ${cost}`);
//         break;
//     case "pineapple":
//         cost = 40;
//         alert(`${value} costs ${cost}`);
//         break;
//     case "watermelon":
//         cost = 110;
//         alert(`${value} costs ${cost}`);
//         break;
//     case "balckberry":
//         cost = 10;
//         alert(`${value} costs ${cost}`);
//         break;
//     case "melon":
//         cost = 150;
//         alert(`${value} costs ${cost} UAN`);
//         break;
//     default : alert(`Product ${value} is absent`);
// }
// const a = 5;
// if (true) {
//    let b = 10;
//  console.log("Block",b);
//  // все що в душках не видно глобально
// }
// console.log("Global", a);
// let a = 0;
// while (a < 10) {
//     a++;
//     console.log("A", a);
// }
// let a = 3;
// while (a) console.log("A",a--);
// let a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a < 5);
// for (a = 0; a < 5; a++) {
//     console.log(a);
// }
// let summ = 0;
//
// while (true) {
//     let value = +prompt("Enter number");
//     if (!value) break;
//     summ += value;
// }
// console.log("Summ", summ)
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log (i);
// }
// let a = 5;
// let b = a;
// a = 10;
// console.log(b);
// console.log(a);
// let arr = [1,2,3];
// let arr2 = arr;
// arr.push(4);
// console.log(arr);
// console.log(arr2);
// let arr = ["a","b","c","d","f"];
// arr.splice(3,1);
// console.log(arr);
// let arr = ["a","b","c","d","f"];
// console.log(arr.slice(2,5));
// let arr = ["a","b","c","d","f"];
// let a = [1,2,3];
// let b = arr.concat(a);
// console.log(b);
// console.log(b.length);
// console.log(arr.indexOf("f",1));
// console.log(arr.includes("f"));
// console.log(arr.lastIndexOf("f",5));
// function showMessage (name, city){
//     console.log("Hello, my name is " + name + " I'm from " + city);
// }
// showMessage("Andrew","Lviv");
// showMessage("Oleg","Kyiv");
// const sayHi = function (){
//     console.log("Hi");
// };
// sayHi();
// const userName = "Andrew";
// const sayHi = function (){
//     let message = "Hello, my name ";
//     console.log(message+userName);
// };
// sayHi();
//  function sum (a,b){
//      return a+b;
// };
// let result = sum(3,5);
// console.log(result);
// const testFunct = function (a,b) {
//     console.log("a :", a);
//     console.log("b :", b);
// };
// testFunct(5,8);
// const a = function () {
//     c();
//     console.log("function a");
//     b();
// };
// const b = function () {
//     console.log("function b");
// };
// const c = function () {
//     console.log("function c");
// };
//
// a();
// const addName = function (){
//     console.log(arguments);
// };
//
// addName();
// const addName = function (){
//     const arg = Array.from(arguments);
//     console.log(arguments);
//     console.log(arg);
// };
// addName(1,3,5,6,7);
// const addName = function (...arg){
//     console.log(arg);
// };
// addName(1,3,5,6,7);
// addName(1,345,51,656,71);
// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }
// function showOk() {
//     console.log("You say Ok");
// }
// function showCancel() {
//     console.log("You say No");
// }
//
// ask("Yes or No?", showOk,showCancel);
// const hello = function (name) {
//     console.log(`Hello, ${name}`);
// };
//
// const searchName = function (callback) {
//     const name = "Andrew";
//     callback(name);
// };
//
// searchName(hello);
// function checkAge(age) {
//     if (age > 18) {
//         return console.log("Hello");
//     }
//     return console.log("Good bye");
// }
// checkAge(21);
// const showMovie = (age) => {
//     if (age > 21) {
//         return console.log("Hello");
//     }
//     return console.log("Bye!");
// }
// showMovie(12);
// console.log(document);
// const addNumber = (number) => {
//     let summ = Number(number) + 10;
//     return console.log(summ);
// }
// const numberRef = document.querySelector
// ('input[name="number"]');
// const buttonRef = document.querySelector
// ("button");
// buttonRef.addEventListener("click", () => addNumber(numberRef.value));;
// buttonRef.addEventListener("click", () => {
//     console.log("click");
// });
// buttonRef.addEventListener("click", () => {
//     console.log(numberRef.value);
// });

class Bank {
    static type = "Privat";
    constructor(options) {
        this.summ = options.summ;
        this.month = options.month;
        this.p = options.p;
    }
    credit () {
        return console.log(this.summ + this.p * this.month);
    }
}

// const userBank = new Bank({
//     summ: 30000,
//     month: 5,
//     p: 500,
// });
//
// userBank.credit();

class NewBank extends Bank {
    constructor(options) {
        super(options);
        this.card  = options.card;
    }
}
const aval = new NewBank({
    summ: 30000,
    month: 5,
    p: 500,
    card: true,
});

console.log(aval.card);

