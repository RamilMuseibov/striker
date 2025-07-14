// на вход [чего угодно]
// на выход случайный элемент этого  массива

// let arr = [1, 2, 3, 4, 5]; //на входе массив
let arr = [7, 10, 2, 14];

function sample(arr) {
  let currentIndex = arr.length;
  let randomIndex = Math.floor(Math.random() * currentIndex);
  return arr[randomIndex];
}
console.log(sample(arr));
