// let a=4

// if(a==1){}
// if(a==2){}
// if(a==3){}
// if(a==4){}
// if(a==5){}
// if(a==6){}

// console.log(0 || 1);
// console.log(0 ?? 1);

// if -> <,>,<=,>=, ==, ===
// switch -> ===
// let data = "bulut";
// switch (data) {
//   case 1:
//     console.log("teng");
//     break;
//   case "bulut":
//     console.log("bugun bulut");
//     break;
//   case "qor":
//     console.log("bugun qor");
//     break;
//   default:
//     console.log("no data");
// }

// console.log("Hello Muhammad");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");
// console.log("Hello Abdulloh");

// console.log(1);
// console.log(2);
// console.log(3);

// for(boshlanish,manzil, step )
// var i = 1;
// var sum = 0;
// for (i = 1; i <= 12; i++) {
//   if (i % 3 === 0) continue;
//   console.log(` ${i}`);
// }

// for (i = 10; i >= 1; i--) {
//   for (j = 1; j <= 10; j++) {
//     console.log(j);
//   }
//   //   console.log(i);
// }

// 2lik karra jadvali
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6

// 3lik karra jadvali
// 3 x 1 = 2
// 3 x 2 = 4
// 3 x 3 = 6

// outer: for (i = 1; i <= 5; i++) {
//   console.log(i, "i");
// }

// * * * HOMEWORL * * * //

// EASE
// 1-misol / toq juft sonlarni topish

// for (let i = 1; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`juft son ${i}`);
//   } else {
//     console.log(`toq son ${i}`);
//   }
// }

// 2-misol / kara jadvalini qilish

// let number = 2;
// for (let i = 1; i <= 10; i++) console.log(`${number} * ${i} = ${number * i}`);

// 3-misol toq va juft sonni topish codeini yozing if elsedan foydalanib.

// let number = 4;
// if (number % 2 === 0) {
//   console.log(`${number} Juft son`);
// } else {
//   console.log(`${number} Toq son`);
// }

// 4-misol tup sonni topish codeni yozing.

// let number = 7;`
// if (number % 2 !== 0) {
//   console.log(`${number} tup son`);
// }`

// 5-misol ternory operator foydalanib juft sonni topish shartini yozing "?".

// let number = 4;
// number % 2 === 0
//   ? console.log(`${number} juft son`)
//   : console.log(`${number} toq son`);

// 6-misol ternory operator foydalanib tup sonni topish shartini yozing "?".

// let number = 5;
// number % 2 !== 0
//   ? console.log(`${number} tup son`)
//   : console.log(`${number} tup son emas.`);

// DIFFICULT
// 1-misol / katta hariflarni ajratish

// let str = "Web Brain Academy";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   let text = str[i];
//   if (text.charCodeAt(0) == text.toUpperCase().charCodeAt(0)) {
//     result += text.trim();
//   }
// }
// console.log(result);

// 2 - misol / faqat raqamni topish kerak

// let str1 = "Webbrain Academy founded 2019, Now it is 4 years old";
// let numebrs = "";
// let number = "";

// for (let i = 0; i < str1.length; i++) {
//   if (!isNaN(parseInt(str1[i]))) {
//     number += str1[i];
//   } else if (number !== "") {
//     numebrs += number + ", ";
//     number = "";
//   }
// }
// console.log(numebrs);

// 3-misol / Pul birligini topish

// let str2 =
//   "Feontend $100 1 oy uchun. Umumiy 6 oy davom etadi. oldindan to'lo'v qilsa $20 chegirma bor.";
// let result = "";
// let currentWord = "";

// for (let i = 0; i < str2.length; i++) {
//   if (str2[i] === " " || i === str2.length - 1) {
//     if (currentWord.startsWith("$")) {
//       result += currentWord + " ";
//     }
//     currentWord = "";
//   } else {
//     currentWord += str2[i];
//   }
// }

// console.log(result.trim());

// switch -> ===
// let data = "bulut";
// switch (data) {
//   case 1:
//     console.log("teng");
//     break;
//   case "bulut":
//     console.log("bugun bulut");
//     break;
//   case "qor":
//     console.log("bugun qor");
//     break;
//   default:
//     console.log("no data");
// }

// let number = 18;
// switch (number) {
//   case 19:
//     console.log("19 yosh");
//     break;
//   case 20:
//     console.log("20 yosh");
//     break;
//   case 18:
//     console.log("teng");
//     break;
//   default:
//     console.log("xato!!!");
// }
