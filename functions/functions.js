// /!1.Создай функцию greet, которая принимает имя в качестве аргумента и выводит в консоль приветствие в формате "Привет, ИМЯ!"./;

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }
// greet("Vasya");

// /!2. Напиши функцию multiply, которая принимает два числа и возвращает их произведение./;

// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(5, 5));

// /!3. Создай функцию isEven, которая принимает число и возвращает true, если оно четное, и false в противном случае./;

// function isEven(number) {
//   return number % 2 === 0;
// }
// console.log(isEven(5));

// /!4. Напиши функцию sumArray, которая принимает массив чисел и возвращает их сумму./;
// let arr = [5, 7, 9, 2, 90, 6, 1];

// function sumArray(arr) {
//   let i = 0;
//   let sum = 0;
//   while (i < arr.length) {
//     sum = sum + arr[i];
//     i++;
//   }
//   return sum;
// }
// console.log(sumArray(arr));

// /!5. Создай функцию longestString, которая принимает массив строк и возвращает самую длинную строку./;

// const arrStr = [
//   "timestamp",
//   "imei",
//   "year",
//   "month",
//   "hour",
//   "lat",
//   "altitude",
//   "altitudebaro",
//   "speed",
//   "pitch",
//   "roll",
//   "fuel",
//   "voltage",
//   "payload",
//   "N/S",
//   "lat.deg",
//   "lat.min/1000",
//   "lng.min/1000",
// ];

// function longestString(arr) {
//   let longStr = arr[0];

//   let i = 0;
//   while (i < arr.length) {
//     if (longStr.length < arr[i].length) {
//       longStr = arr[i];
//     }
//     i++;
//   }
//   return longStr;
// }
// console.log(longestString(arrStr));

// /----------------------КОЛБЭКИ---------------------------/

// /!6.Создай функцию doTwice, которая принимает другую функцию в качестве аргумента и вызывает её дважды./;

// function setHello() {
//   console.log("Hello");
// }

// function doTwice(func) {
//   func();
//   func();
// }
// doTwice(setHello);

// /!7.Напиши функцию processUserInput, которая принимает строку и функцию-обработчик. Вызови обработчик, передав ему строку в верхнем регистре./;

// function lowerCase(str) {
//   //   console.log(str.toLowerCase());
//   return str.toLowerCase();
// }

// function processUserInput(str, handlerFunc) {
//   return handlerFunc(str);
// }
// console.log(processUserInput("SDFSDF", lowerCase));

// /!8.Создай функцию applyToEach, которая принимает массив и функцию, и применяет эту функцию к каждому элементу массива. Результаты должны сохраняться в новом массиве, который возвращает функция./;

// const array = [5, 8, 3, 1, 9, 45, 23, 89, 45, 32];

// function squareNumbs(num) {
//   return num ** 2;
// }

// function applyToEach(arr, transformFunc) {
//   let i = 0;
//   const newArr = [];
//   while (i < arr.length) {
//     newArr.push(transformFunc(arr[i]));

//     i++;
//   }

//   return newArr;
// }
// console.log(applyToEach(array, squareNumbs));

// /!9.Напиши функцию customF]ilter, которая принимает массив и функцию-предикат. Верни массив только с теми элементами, для которых функция-предикат вернула true./;

// const array = [5, 8, 3, 1, 9, 12, 23, 10, 45, 32];

// function predicate(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
// }

// function filter(arr, predicateFunc) {
//   const newArr = [];
//   let i = 0;
//   while (i < arr.length) {
//     if (predicateFunc(arr[i], i, arr)) {
//       newArr.push(arr[i]);
//     }
//     i++;
//   }

//   return newArr;
// }
// console.log(filter(array, predicate));

// /!10.Создай функцию delayedAction, которая принимает функцию и число миллисекунд, и вызывает переданную функцию с задержкой, используя setTimeout./;

// function setHello() {
//   console.log("Hello");
// }
// function delayedAction(timeoutFunc, milliseconds) {
//   setTimeout(() => {
//     timeoutFunc();
//   }, milliseconds);
// }
// delayedAction(setHello, 2000);

// /!10.forEach, map, find, includes, findIndex, toReversed/;

// --------------------forEach--------------------

// const array = [6, 9, 234, 67, 5, 34, 5, 12, 8];

// function enumeretion(item, index, array) {
//   return (array[index] = item);
// }

// function forEach(arr, cb) {
//   let i = 0;
//   while (i < arr.length) {
//     cb(arr[i], i, arr);
//     i++;
//   }
// }
// console.log(forEach(array, enumeretion));

// // --------------------map--------------------

// const array = [6, 9, 234, 67, 5, 34, 5, 12, 8];

// function enumeretion(item, index, array) {
//   array[index] = item;
//   return item ** 2;
// }

// function map(arr, cb) {
//   let i = 0;
//   const newArr = [];
//   while (i < arr.length) {
//     newArr.push(cb(arr[i], i, arr));
//     i++;
//   }
//   return newArr;
// }
// console.log(map(array, enumeretion));

// // --------------------find--------------------

// const array = [6, 9, 234, 67, 5, 34, 5, 12, 8];

// function enumeretion(item, index, array) {
//   array[index] = item;

//   return item % 2 === 0 ? true : undefined;
// }

// function find(arr, predicate) {
//   let i = 0;
//   while (i < arr.length) {
//     if (predicate(arr[i], i, arr)) {
//       return arr[i];
//     }
//     i++;
//   }
// }
// console.log(find(array, enumeretion));

// // --------------------findIndex--------------------

// const array = [6, 9, 234, 67, 5, 34, 5, 12, 8];

// function enumeretion(item, index, array) {
//   array[index] = item;

//   return item % 2 === 0 ? true : undefined;
// }

// function findIndex(arr, predicate) {
//   let i = 0;
//   while (i < arr.length) {
//     if (predicate(arr[i], i, arr)) {
//       return i;
//     }
//     i++;
//   }
//   return -1;
// }
// console.log(findIndex(array, enumeretion));

// // --------------------includes--------------------

// const array = [6, 9, 234, 67, 5, 34, 5, 12, 8];

// function includes(arr, item, index = 0) {
//   //   let i = index;

//   //   if (index !== undefined) {
//   //     i = index;
//   //   }

//   while (index < arr.length) {
//     if (item === arr[index]) {
//       return true;
//     }
//     index++;
//   }
//   return false;
// }
// console.log(includes(array, 9));

// // --------------------toReversed--------------------

// const array = [6, 9, 234, 67, 5, 34, 5, 12, 8];

// function toReversed(arr) {
//   let i = arr.length - 1;
//   const newArr = [];
//   while (i >= 0) {
//     newArr.push(arr[i]);
//     i--;
//   }
//   return newArr;
// }
// console.log(toReversed(array));

// --------------------reverse--------------------
// const array = [6, 9, 234, 67, 5, 34, 26, 5, 12, 8];

// function reverse(arr) {
//   let i = 0;
//   let j = arr.length - 1;

//   while (i < arr.length / 2) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j--;
//     i++;
//   }
// }
// reverse(array);
// console.log(array);

// --------------------join--------------------

// const array = [6, 9, 234, 67, 5, 34, 26, 5, 12, 8];

// function join(arr, separator = ",") {
//   let i = 1;
//   let str = arr[0];
//   while (i < arr.length) {
//     str += separator + arr[i];
//     i++;
//   }
//   return str;
// }
// console.log(join(array, "."));

// --------------------pick--------------------

// const object = { a: 1, b: 2, c: 3 };
// // [["a",1], ["b,"2]]
// function pick(obj, keys) {
//   const newObj = {};
//   let i = 0;
//   while (i < keys.length) {
//     if (keys[i] in obj) {
//       newObj[keys[i]] = obj[keys[i]];
//     }
//     i++;
//   }
//   return newObj;
// }
// console.log(pick(object, ["a", "b"]));

// const array = [
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ];

// function fromEntries(entries) {
//   const obj = {};

//   let i = 0;
//   while (i < entries.length) {
//     obj[entries[i][0]] = entries[i][1];
//     i++;
//   }
//   return obj;
// }

// console.log(fromEntries(array));

const matrixA = [
  [1, 2, 3, 3],
  [4, 5, 6, 6],
  [7, 8, 9, 9],
];

const matrixB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
  [3, 2, 1],
];

function multiplicationMatrix(matrix1, matrix2) {
  let newMatrix = [];
  let i = 0;
  while (i < matrix1.length) {
    newMatrix[i] = [];
    let j = 0;
    while (j < matrix2[0].length) {
      let k = 0;
      let sum = 0;
      while (k < matrix2.length) {
        sum += matrix1[i][k] * matrix2[k][j];
        k++;
      }
      newMatrix[i][j] = sum;

      j++;
    }
    i++;
  }
  return newMatrix;
}
// console.log(multiplicationMatrix(matrixA, matrixB));
