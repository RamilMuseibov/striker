// /!1. Подсчет количества ключей. Дан объект с данными о пользователях, нужно узнать, сколько в нем ключей. Используй подходящий метод для получения ключей./;
// const users = {
//   alice: { age: 25 },
//   bob: { age: 30 },
//   charlie: { age: 35 },
// };

// const keys = Object.keys(users);
// console.log(`Ключи - ${keys}`);
// console.log(`Количество ключей - ${keys.length}`);

// /!2. Получение всех значений.Дан объект с городами и их населением. Получи массив всех значений (населения)./;
// const cities = {
//   Moscow: 12506468,
//   Berlin: 3769495,
//   Paris: 2161000,
// };

// const values = Object.values(cities);
// console.log(values);

// /!3. Получение всех пар ключ-значение. Дан объект с курсами валют. Выведи массив всех пар [ключ, значение]./;
// const exchangeRates = {
//   USD: 90.25,
//   EUR: 98.5,
//   GBP: 115.75,
// };
// const entries = Object.entries(exchangeRates);
// console.log(entries);

// /!4. Переход от массива пар к объекту. Дан массив пар [ключ, значение], получи из него обратно объект./;
// const data = [
//   ["name", "Alice"],
//   ["age", 28],
//   ["country", "Canada"],
// ];
// const obj = Object.fromEntries(data);
// console.log(obj);

// /!5. Фильтрация по значению и восстановление объекта. Дан объект, из которого нужно удалить все ключи, у которых значение — null или undefined./;
// const data = {
//   name: "Alice",
//   age: null,
//   country: "Canada",
//   email: undefined,
//   asd: "",
// };

// const entries = Object.entries(data);

// const entriesFiltered = Object.fromEntries(
//   entries.filter((item) => item[1] !== null && item[1] !== undefined)
// );

// // есть маp и filter - методы массива посмотреть, вспомнить

// // for (let key in data) {
// //   if (data[key] === null || data[key] === undefined) {
// //     delete data[key];
// //   }
// // }

// console.log(entriesFiltered);

// /!6. Удаление по значению из массива. Дан объект, где ключ — имя студента, значение — его балл. Дан массив студентов на отчисление. Удали из объекта всех студентов, чьи имена есть в этом массиве./;
// const scores = {
//   Ivan: 70,
//   Maria: 85,
//   Pavel: 60,
//   Anna: 50,
// };
// const expelled = ["Pavel", "Anna"];

// const entriesFiltered = Object.entries(scores).filter(
//   (item) => !expelled.includes(item[0])
// );

// // let i = 0;
// // while (i < expelled.length) {
// //   entries = entries.filter((item) => item[0] !== expelled[i]);
// //   i++;
// // }

// console.log(Object.fromEntries(entriesFiltered));

// // есть маp и filter - методы массива посмотреть, вспомнить

// let i = 0;
// while (i < expelled.length) {
//   if (expelled[i] in scoresCopy) {
//     delete scoresCopy[expelled[i]];
//   }
//   i++;
// }

// /!7. Переименование ключей. Дан объект, нужно заменить все ключи, добавив к ним префикс 'new_', а значения оставить прежними. Верни новый объект./;
// const data = {
//   id: 1,
//   name: "Product",
//   price: 100,
// };

// // переделать под entries и fromEntries

// const entriesMapped = Object.entries(data).map((item) => ["new_" + item[0], item[1]]);

// console.log(Object.fromEntries(entries));

// const values = Object.values(data);
// const keys = Object.keys(data);

// let newKey = [];
// let i = 0;
// while (i < keys.length) {
//   newKey.push("new_" + keys[i]);
//   i++;
// }

// let newData = {};
// let j = 0;
// while (j < newKey.length) {
//   let k = 0;
//   while (k < values.length) {
//     newData[newKey[j]] = values[k];
//     console.log(newData[newKey[j]]);
//     console.log(values[k]);

//     j++;
//     k++;
//   }
// }
// console.log(newData);

// /!8. Подсчет количества уникальных значений. Дан объект, где ключ — имя сотрудника, значение — его должность. Узнай, сколько уникальных должностей есть в объекте./;
// const employees = {
//   alice: "manager",
//   bob: "developer",
//   charlie: "developer",
//   diana: "designer",
//   asd: "developer",
// };

// const values = Object.values(employees);

// // const unique = Array.from(new Set(values));

// const uniquePost = [];
// let i = 0;
// while (i < values.length) {
//   if (values.indexOf(values[i]) === i) {
//     uniquePost.push(values[i]);
//   }
//   i++;
// }
// console.log(unique);

// console.log(`Уникальные должности - ${uniquePost}`);

// /!9. Сортировка по значению. Дан объект, где ключ — продукт, значение — цена. Получи массив пар [продукт, цена], отсортированный по возрастанию цены./;
// const products = {
//   bread: 40,
//   milk: 50,
//   cheese: 200,
//   butter: 150,
// };

// const entries = Object.entries(products);

// console.log(entries.sort((a, b) => a[1] - b[1]));
// // прочитать про sort, сделать пометки

// /!10. Преобразование значений. Дан объект с зарплатами сотрудников. Увеличь каждую зарплату на 10% и верни новый объект. /;
// const salaries = {
//   Ivan: 30000,
//   Olga: 45000,
//   Petya: 50000,
// };

// function salaryChange(obj) {
//   const entries = Object.entries(obj).map((item) => [
//     item[0],
//     item[1] + item[1] * 0.1,
//   ]);

//   return entries;
// }
// console.log(Object.fromEntries(salaryChange(salaries)));

// /!11. Получить объект, где ключом будет элемент массива, а значением его индекс в этом массиве /;

// const keys = [
//   "timestamp",
//   "imei",
//   "year",
//   "month",
//   "day",
//   "hour",
//   "min",
//   "sec",
//   "lat",
//   "lon",
//   "altitude",
//   "altitudebaro",
//   "hdg",
//   "speed",
//   "rpm",
//   "pitch",
//   "roll",
//   "fuel",
//   "voltage",
//   "gps",
//   "payload",
//   "N/S",
//   "lat.deg",
//   "lat.min/1000",
//   "E/W",
//   "lng.deg",
//   "lng.min/1000",
//   "CEPRadius",
// ];

// console.log(Object.fromEntries(keys.map((item, index) => [item, index])));
