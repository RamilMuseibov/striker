const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function flat(arr) {
  const newArr = [];
  let i = 0;
  while (i < arr.length) {
    let j = 0;
    while (j < arr[i].length) {
      newArr.push(arr[i][j]);
      j++;
    }
    i++;
  }
  return newArr;
}
console.log(flat(arr2));
console.log(arr);
//