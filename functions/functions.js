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
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
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

// function squareNumbs(arr) {
//   return arr.map((item) => item ** 2);
// }

// function applyToEach(arr, transformFunc) {
//   const newArr = transformFunc(arr);
//   console.log(newArr);

//   return newArr;
// }
// console.log(squareNumbs(array, applyToEach));

// /!9.Напиши функцию customFilter, которая принимает массив и функцию-предикат. Верни массив только с теми элементами, для которых функция-предикат вернула true./;

// const array = [5, 8, 3, 1, 9, 12, 23, 10, 45, 32];

// function predicate(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
// }

// function customFilter(arr, predicateFunc) {
//   let newArr = [];
//   let i = 0;
//   while (i < arr.length) {
//     if (predicateFunc(arr[i]) === true) {
//       newArr.push(arr[i]);
//     }
//     i++;
//   }

//   return newArr;
// }
// console.log(customFilter(array, predicate));

/!10.Создай функцию delayedAction, которая принимает функцию и число миллисекунд, и вызывает переданную функцию с задержкой, используя setTimeout./;

function setHello() {
  console.log("Hello");
}
function delayedAction(timeoutFunc, milliseconds) {
  setTimeout(() => {
    timeoutFunc();
  }, milliseconds);
}
delayedAction(setHello, 2000);
