// #    /////////////////object/////////////////

// No1

// object keylarini toping
// let obj = {
//   id: 1,
//   name: "WebBrain",
// };
// * * * obj ning key topish
// for (const key in obj) {
//     console.log(key);
// }
// * * * obj ning valuesini topish
// console.log(`obj id: ${obj.id}
// obj name: ${obj.name}`);

// chiqish
// id,name

// No2

// object valuelarining raqamga tenglarini toping
// let obj = {
//   id: 1,
//   name: "WebBrain",
// };
// * * * objning raqamga tengining keyi
// for(const key in obj){
//     if (!isNaN(parseInt(obj[key]))) {
//       console.log(key);
//     }
// }
// chiqish
// id

// No3

// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// * * * oddi holada chiqadi.
// for (const key in obj) {
//   if (obj[key] === Boolean(obj[key])) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }
// * * * obj tarzida chiqadi.
// let newObj = {};
// for (const key in obj) {
//   if (obj[key] === Boolean(obj[key])) {
//     newObj[key] = obj[key];
//   }
// }
// console.log(newObj);
// chiqish
// {
//     offline:true,
//     online:true,
//     individual:false
// }

// No4

// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// * * *
// function Search(obj) {
//   for (const key in obj) {
//     let objKey = obj[key];
//     if (obj[key] === String(objKey)) {
//       return `${key}: "${objKey}"`;
//     }
//   }
// }
// console.log(Search(obj));
// chiqish
// name:"WebBrain"

// No5

// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj = {
//   id: 1,
//   name: "atirgul",
//   color: "qizil",
//   count: 10,
//   price: "10$",
// };
// * * *
// const searchValue = (obj) => {
// for (const key in obj) {
//   let objKey = obj[key];
//   if (isNaN(objKey)) {
//     console.log(objKey);
//   }
// }
// ===
// for (const [key, value] of Object.entries(obj)) {
//   if (typeof value === "string") {
//     console.log(value);
//   }
// }
// ===
// for (const value in obj) {
//   if (typeof obj[value] === "string") {
//     console.log(obj[value]);
//   }
// }
// };
// searchValue(obj);
// searchValue(obj,'i') => atirgul,qizil

// No6

// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// let person = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 48,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 20,
//     },
//   },
// };
// * * *
// function resultFn(obj) {
//   let num = 0;
//   while (obj) {
//     if (obj) num += obj.age;
//     else break;
//     obj = obj.child;
//   }
//   console.log(num);
// }
// resultFn(person);

// chiqish
// 146

// No7

// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
// let user = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   children: [
//     {
//       id: 1,
//       name: "Umar",
//       age: 54,
//       children: [
//         { id: 1, name: "Asmo", age: 34 },
//         { id: 2, name: "Osim", age: 30 },
//         { id: 3, name: "Xattob", age: 25 },
//       ],
//     },
//     { id: 2, name: "Umar", age: 54 },
//     { id: 3, name: "Umar", age: 12 },
//   ],
// };
// * * *
// function logAdults(user) {
//   if (user.age > 18) {
//     console.log(user.name, user.age);
//   }
//   if (user.children) {
//     for (const child of user.children) {
//       logAdults(child);
//     }
//   }
// }
// logAdults(user);

// No8

// array ichida object berilgan. job berilgan objectlarni qaytaring
// let arr=[
//     {id:1,name:'Usmon',job:'developer'},
//     {id:2,name:'Usmon',job:'developer'},
//     {id:3,name:'Usmon'},
//     {id:4,name:'Usmon',job:'developer'},
//     {id:5,name:'Usmon'}
// ];
// * * *
// for(let i = 0; i < arr.length; i++){
//   if(arr[i].job){
//     console.log(arr[i].job);
//   }
// }

// No9

// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
// };

// let obj1 = {};
// Object.assign(obj1, obj);

// let obj2 = structuredClone(obj);

// obj.id = 10;

// console.log(obj);
// console.log(obj1);
// console.log(obj2);

// No10

// objectga yangi qiymat qo'shuvchi funksiya yozing
// add(obj,key,value){}
// add(obj,'address','toshkent')

// No11

// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 1,
// };
// * * *
// if (obj.practice >= 1) console.log("qabul qilindi");
// else console.log("qabul qilimadi");

// chiqish
// qabul qilindi

// No12

// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 1,
//   talaba: true,
// };
// * * * 
// if (obj.talaba) {
//   obj.kridit = true;
// }else{
//   obj.kridit = false;
// }
// console.log(obj);
// chiqish
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true,
//     kiridit:true
// }

// No13

// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     age:34,
//     year:1990
// }
// chiqish
// 'xato malumot kiritdingiz'

// No14

// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
// arr=['Andijon','Namangan','Qarshi','toshkent']

// No15

// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
// let arr=[
//     {id:3,name:'Usmon',parol:'1231'},
//     {id:1,name:'Umar',parol:'1241'},
//     {id:5,name:'Jasur',parol:'3452'}
//     {id:2,name:'Asmo',parol:'2312'},
//     {id:4,name:'Salohiddin',parol:'3421'},
// ]
// logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz

// No16

// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring
// obj={
//   id:1,
//   title:'the best',
//   address:{street:"Farobiy",number:'34'}
// }
// chiqish
// true

// No17

// let person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
// }

// // add IELTS
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }

// 2 - shart

// // agar ielts 5.5 yoki katta bolsa consoleda qabul qilindi,aks holda qayta topshirish kk
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// // qabul qilindi

// 3 - shart

// // agar ielts 5.5 yoki katta bolsa objectga student:true qoshilsin qiymati bn birga
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }

// // qoshimcha

// 4 - shart

// // agar student true bolsa unga maxsus key berilsin(math.random+id orqali berilsin)
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }

// 5 - shart

// // talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar qarol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name xato chiqsin
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// function Kirish(parol,name){}

// Kirish(101,'Umar') //=> hush kelibsiz
// Kirish(10,'Umar')  // => parol yoki name xato
// Kirish(101,'Ali')   // => parol yoki name xato
