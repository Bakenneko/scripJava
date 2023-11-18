// let arr = [1,2,3,4,5,6];
// let red = arr.reduce((summ, item)=> summ+item);
// console.log(red);

let arr = [12,21,33,41,55,61];

let summ = arr.reduce((sum, item) => sum+item) / arr.length;
console.log(summ);

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

