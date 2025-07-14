// на вход [чего угодно]
// на выход случайный элемент этого  массива

let arr = [1, 2, 3, 4, 5]; //на входе массив
// // на выходе массив [3,5,1,4,2] - в случайном порядке..

function sample(arr) {
  let i = 0;
  let currentIndex = arr.length + 1;
  while (i < arr.length) {
    randomElement = Math.floor(Math.random() * currentIndex);
    i++;
  }
  return randomElement;
}
console.log(sample(arr));
