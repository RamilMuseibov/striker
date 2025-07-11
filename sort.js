const arr = [5, 7, 9, 2, 1, 7, 5, 7];
const arr2 = [5, 2, 8, 1, 4];

//   }
// }
// sortArr(arr)
// [1,2,5,7,9]
//найти самое маленькое число массива
// поставить его в начало массива
// ищем второе большее число, больше предыдущего
// ставим после предыдущего
//

function sorting(arr) {
  let i = 0;

  while (i < arr.length - 1) {
    let j = i;
    let minNum = arr[i];
    let minIndex = i;

    while (j < arr.length) {
      if (minNum > arr[j]) {
        minNum = arr[j];
        minIndex = j;
      }
      j++;
    }

    let rightElem = arr[i];
    arr[i] = minNum;
    arr[minIndex] = rightElem;

    i++;
  }
  return arr;
}
// console.log(sorting(arr));

function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minNum = arr[i];
    let minIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (minNum > arr[j]) {
        minNum = arr[j];
        minIndex = j;
      }
    }

    let rightElem = arr[i];
    arr[i] = minNum;
    arr[minIndex] = rightElem;
  }
}
// sort(arr);
// console.log(arr);

function toSorted(arr) {
  const arrB = [...arr];
  // let arrB = structuredClone(arr);
  // let arrB = JSON.parse(JSON.stringify(arr));
  // const arrB = arr.map((value) => value);
  sort(arrB);
  return arrB;
}
// console.log(toSorted(arr), arr);

function calculator(a, b, isSum) {
  if (isSum === true) {
    return a - b;
  } else {
    return a + b;
  }
}
console.log(calculator(5, 7, true));
