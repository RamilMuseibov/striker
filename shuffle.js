let arr = [1, 2, 3, 4, 5]; //на входе массив
// на выходе массив [3,5,1,4,2] - в случайном порядке

function shuffle(arr) {
  const newArr = [];
  let i = 0;
  let currentIndex = arr.length;
  let randomIndex;
  while (i < arr.length) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    newArr.push(arr[randomIndex]);
    i++;
  }
  return newArr;
}
console.log(shuffle(arr));

// console.log(Math.floor(Math.random() * 4));
