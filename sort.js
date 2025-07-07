const arr = [5, 7, 9, 2, 1];
const arr2 = [5, 2, 8, 1, 4];

// function sortArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minNum = arr[0];
//     if(minNum > arr[i]){
//         minNum = arr[i]
//     }
//     console.log(minNum);

//   }
// }
// sortArr(arr)
// [1,2,5,7,9]
//найти самое маленькое число массива
// поставить его в начало массива
// ищем второе большее число, больше предыдущего
// ставим после предыдущего
//

function findMin(arr) {
  let i = 0;
  let minNum = arr[0];
  let minIndex = 0;
  const elem1 = arr[0];

  while (i < arr.length) {
    if (minNum > arr[i]) {
      minNum = arr[i];
      minIndex = i;
    }
    i++;
  }
  return arr;
}
console.log(findMin(arr));

// const firstElem = arr[0];
// arr[0] = arr[1];
// arr[1] = firstElem;

// console.log(arr);
