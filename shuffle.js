// let arr = [1, 2, 3, 4, 5]; //на входе массив
// let arr = [1, 2, 4, 7, 9, 13, 78, 123];
let arr = [1, 1, 2, 2, 3, 4, 5];
// на выходе массив [3,5,1,4,2] - в случайном порядке

function shuffle(arr) {
  let i = 0;
  while (i < arr.length) {
    let currentIndex = arr.length;
    let randomIndex = Math.floor(Math.random() * currentIndex);

    let randomItem = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = randomItem;
    i++;
  }
  return arr;
}
console.log(shuffle(arr));
//
