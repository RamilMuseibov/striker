// /!----------------------1---------------------------/;
// // на вход строка const inputFields = "name,id,tokens";

// // на выход {
// //   "name": true,
// //   "id": true,
// //   "tokens": true
// // }

// const inputFields = "name,id,tokens";

// function transformToJson(str) {
//   //   return Object.fromEntries(str.split(",").map((key) => [key, true]));

//   const arr = str.split(",");

//   let i = 0;
//   let entries = [];
//   while (i < arr.length) {
//     entries.push([arr[i], true]);

//     i++;
//   }
//   return Object.fromEntries(entries);
// }
// console.log(transformToJson(inputFields));

// /!----------------------2---------------------------/;
// на вход const inputSort = "name:asc,tokens:desc";

// на выход {
//   "name": "asc",
//   "tokens": "desc"
// }

// const inputSort = "name:asc,tokens:desc";

// function transformToJson(str) {
//   return Object.fromEntries(str.split(",").map((item) => item.split(":")));
// }
// console.log(transformToJson(inputSort));

// /!----------------------3---------------------------/; НЕ РЕШЕНО
// на вход const inputInclude = "role(id,title,slug),role.permissions,tokens.user(id,name,password),tokens.user.tokens(id)";

// на выход{
//   "role": {
//     "select": {
//       "id": true,
//       "title": true,
//       "slug": true
//     },
//     "include": {
//       "permissions": true
//     }
//   },
//   "tokens": {
//     "include": {
//       "user": {
//         "select": {
//           "id": true,
//           "name": true,
//           "password": true
//         },
//         "include": {
//           "tokens": {
//             "select": {
//               "id": true
//             }
//           }
//         }
//       }
//     }
//   }
// }

// const inputInclude =
//   "role(id,title,slug),role.permissions,tokens.user(id,name,password),tokens.user.tokens(id)";

// console.log(inputInclude.split("(").map((item) => item.split(")")));

// function transformToJson(str) {}
// transformToJson(inputInclude);
// // console.log(transformToJson(inputInclude));

// /!----------------------4---------------------------/;

// Вход: const str = "Молоко:50;Хлеб:25;Сыр:120;Яблоки:80"
// Выход: {Молоко: 50, Хлеб: 25, Сыр: 120, Яблоки: 80} и общая сумма 275

// const str = "Молоко:50;Хлеб:25;Сыр:120;Яблоки:80";

// function transformToJson(str) {
//   let sum = 0;
//   const purchase = str.split(";").map((item) => {
//     [key, value] = item.split(":");
//     sum += +value;
//     return [key, +value];
//   });

//   purchase.push(["Общая стоимость", sum]);

//   return Object.fromEntries(purchase);
// }
// console.log(transformToJson(str));

// const str = "молоко:30:3.2:100";
// const [key, value, ...arr] = str.split(":");
// const newArr = [key, value, ...arr].join(":");
// console.log(newArr);

// /!----------------------5---------------------------/;
// Вход: const str = "Иванов,Математика,5;Петров,Физика,4;Сидоров,Химия,3;Кузнецов,Математика,4"

// {
//   Математика: [ {name: "Иванов", grade: 5}, {name: "Кузнецов", grade: 4} ];
//   Физика: [ {name: "Петров", grade: 4} ]
//   Химия: [ {name: "Сидоров", grade: 3} ]
// }

// const str =
//   "Иванов,Математика,5;Петров,Физика,4;Сидоров,Химия,3;Кузнецов,Математика,4";

// function transformToJson(str) {
//   const finiteObj = {};
//   const arr = str.split(";");
//   arr.map((item) => {
//     const [name, subject, grade] = item.split(",");
//     if (!(subject in finiteObj)) {
//       finiteObj[subject] = [];
//     }
//     finiteObj[subject].push({ name, grade });
//   });
//   return finiteObj;
// }
// console.log(transformToJson(str));

// /!----------------------6---------------------------/;
// Вход: const str = "user1|2024-05-01,user2|2024-05-01,user1|2024-05-02,user3|2024-05-01"
// Выход: {
//   user1: ["2024-05-01", "2024-05-02"],
//   user2: ["2024-05-01"],
//   user3: ["2024-05-01"]
// }

// const str =
//   "user1|2024-05-01,user2|2024-05-01,user1|2024-05-02,user3|2024-05-01";

// function transformToJson(str) {
//   const finiteObj = {};

//   str.split(",").map((item) => {
//     const [key, value] = item.split("|");
//     if (!(key in finiteObj)) {
//       finiteObj[key] = [];
//     }
//     finiteObj[key].push(value);  
//   });
//   return finiteObj;
// }
// console.log(transformToJson(str));

// /!----------------------7---------------------------/;
// Вход: const str = "id=15;sort=desc;page=2;filter=active"
// Выход: "?id=15&sort=desc&page=2&filter=active"

// const str = "id=15;sort=desc;page=2;filter=active";

// function transformToJson(str) {
//   const newStr = `?${str.split(";").join("&")}`;
//   return newStr;
// }
// console.log(transformToJson(str));

// /!----------------------8---------------------------/;
// Вход:const str =  "Купил телефон, работает быстро, батарею держит долго, экран яркий"
// Выход: объект частот слов, например - {купил:1, телефон:1, работает:1, быстро:1, ...}
// И массив уникальных слов по алфавиту ["батарею","быстро","держит","долго","екран","купил","работает","телефон","яркий"]

const str = "Купил телефон, работает быстро, батарею держит долго, экран яркий";

function transformToJson(str) {
  const arr = str.split(", ").map((item) => item.split(" "));
  return arr;
}
console.log(transformToJson(str));
