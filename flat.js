const arr = [
  [1, 2],
  [3, 4],
];
// const arr = [1, 2, 3, 4];
// не мутировать исходникик

function flat() {
  const newArr = [];
  let i = 0;
  while (i < arr.length) {
    let j = 0;
    while (j < arr.length) {
      newArr.push(arr[i][j]);
      j++;
    }
    i++;
  }
  return newArr;
}
console.log(flat(arr));
console.log(arr);
