// i = 3;
// while (i) {
//   console.log(`hey`);
//   i--;
// }

// do {
//   console.log(i);
//   i--;
// } while (i == 0);

// getAvr();
// let id = 1;
// console.log(id);

// function getAvr() {
//   console.log("Abdulloh, Welcome to Webbrain");
// }

// const getAvr = function () {
//   console.log("Abdulloh, Welcome to Webbrain");
// };
// getAvr();

// const getAvr =()=>{}

// let name = 'webbrain'

// const getAvr = function (name, surname, age) {
//   console.log(`Name: ${name}`);
//   console.log(`Surname: ${surname}`);
//   console.log(`Age: ${age}`);
//   console.log(`================`);
// };
// getAvr(20, "F");
// getAvr();
// getAvr("Najmiddin", "Nazarov", 20);
// getAvr("Iqboljon", "Iqboljon F", 20);
// getAvr("Asilebk", "Asilebk F", 20);

// const telegram = (name, surname = "") => {
//   if (surname) console.log(name, surname);
//   else console.log(name);
// ||,??
//   surname ? console.log(name, surname) : console.log(name);
//   console.log(name, surname || "");
//   console.log(name, surname);
// };

// telegram("webbrain", "Academy");

// const gpa = (a = 0, b = 0, c = 0, d = 0) => {
//   let res = (a + b + c + d) / 4;
//   console.log(res);
//   //   return "okay?";
// };

// console.log(gpa(4.5, 3, 3.5, 2)); //3.25
// console.log(gpa(4, 3, 5, 2));//3.5
// console.log(gpa(5, 3, 3, 2));//3.25

// console.log((gpa(4.5, 3, 3.5, 2) + gpa(4, 3, 5, 2) + gpa(5, 3, 3, 2)) / 3);

// const getValue = () => {
//     let id = document.getElementById("gpa");
//     id.innerHTML = `GPA: ${getNum}`;
//   };

// const getNum = (a) => {
//   let total = 193;
//   console.log((a * 100) / total);
//   return (a * 100) / total;
// };

// console.log(parseInt(getNum(159)));

// const getGpa = (a = 0, b = 0, c = 0, d = 0) => {
//   let res = (a + b + c + d) / 4;
//   return res;
// };

// const getValue = () => {
//   let id = document.getElementById("gpa");
//   id.innerHTML = `GPA: ${getGpa(5, 3, 3, 2)}`;
// };

// const getGPA = (name, callback) => {
//   console.log("Hey", name);
//   callback();
// };

// getGPA("Webbrain", getValue);

// * * * HOMEWORK * * * //
// while 

// 1-misol katta hariflarni ajratish "WBA".

// let str = "Web Brain Academy";
// let index = 0;
// let result = "";
// while (index < str.length) {
//   if(str[index] === str[index].toUpperCase()){
//     result += str[index];
//   }
//   index++
// }
// console.log(result);

// 2-misol faqat raqamni olish

// let str = "Webbrain Academy founded 2019, Now it is 4 years old";
// let index = 0;
// let result = [];
// while(index < str.length){
//     let num = ""
//     while (!isNaN(parseInt(str[index]))) {
//       num += str[index];
//       index++;
//     }
//     if(num !== ""){
//         result.push(num)
//     }
//     index++
// }
// console.log(result);

// 3-misol pul birligini va dollor topish ['$100', '$20];

// let str =
//   "Feontend $100 1 oy uchun. Umumiy 6 oy davom etadi. oldindan to'lo'v qilsa $20 chegirma bor.";
// let index = 0;
// let DOLLOR = [];
// while (index < str.length) {
//   let num = "";
//   if (str[index] === "$") {
//     index++;
//     while(!isNaN(parseInt(str[index]))){
//         num += str[index];
//         index++
//     }
//     if(num !== ""){
//         DOLLOR.push("$" + num);
//     }
//   }
//   index++
// }
// console.log(DOLLOR);

// 4-misol pul birligini topish ['$', '¥']

// let str =
//   "Feontend $100 1 oy uchun. Umumiy 6 oy davom etadi. oldindan to'lo'v qilsa ¥20 chegirma bor.";
// let index = 0;
// let arr = [];
// while (index < str.length) {
//   let num = "";
//   if (str[index] == "$" ||str[index] == "¥") {
//     num += str[index];
//     index++;
//     if (num !== "") {
//       arr.push(num);
//     }
//   }
//   index++;
// }
// console.log(arr);

// TEPADAGI 4 misolning hammasini do whileda qilish.
// do while
// 1-misol

// let str = "Web Brain Academy";
// let result = "";
// let index = 0;
// do{
//     if(str[index] == str[index].toUpperCase()){
//         result += str[index];
//     }
// index++;
// }while(index < str.length);
// console.log(result);

// 2-misol

// let str = "Webbrain Academy founded 2019, Now it is 4 years old";
// let index = 0;
// let arr = [];
// do{
//     let text = ""
//     while(!isNaN(parseInt(str[index]))){
//         text += str[index];
//         index++;
//     }
//     if(text !== ""){
//         arr.push(text);
//     }
//     index++
// }while(index < str.length);
// console.log(arr);

// 3-misol

// let str =
//   "Feontend $100 1 oy uchun. Umumiy 6 oy davom etadi. oldindan to'lo'v qilsa $20 chegirma bor.";
// let index = 0;
// let arr = [];
// do {
//   let num = "";
//   if (str[index] == "$") {
//     index++;
//     while (!isNaN(parseInt(str[index]))) {
//         num += str[index];
//         index++;
//     }
//     if(num !== ""){
//         arr.push("$" + num);
//     }
//   }
//   index++
// } while (index < str.length);
// console.log(arr);

// 4-misol

// let str =
//   "Feontend $100 1 oy uchun. Umumiy 6 oy davom etadi. oldindan to'lo'v qilsa ¥20 chegirma bor.";
// let index = 0;
// let arr = [];
// do{
//     if(str[index] == "$" || str[index] == "¥"){
//         arr.push(str[index]);
//         index++;
//     }
// index++
// } while(index < str.length);
// console.log(arr);

// FUNCTIONS

// 1-misol fn parametirida eng kotta raqamni chiqarish.
// function maxnumber(a, b) {
//     if(a > b) {
//         console.log(`${a} kotta`);
//     }else{
//         console.log(`${b} kotta`);
//     }
// }
// maxnumber(5, 6);

// 2-misol log da 15, 25 teskari chiqishi kerak (25, 15) tarzoda.

// function changeNumber(a, b){
//     console.log(b, a);
// }
// changeNumber(15, 25);

