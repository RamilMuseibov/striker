let arr = [1, 2, 3, 4, 5]; //на входе массив
// let arr = [1, 2, 4, 7, 9, 13, 78, 123];
// на выходе массив [3,5,1,4,2] - в случайном порядке

function shuffle(arr) {
  let newArr = [];
  let currentIndex = arr.length;
  let i = 0;
  while (i < arr.length) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    if (!newArr.includes(arr[randomIndex])) {
      // console.log("Все нормально");
      newArr.push(arr[randomIndex]);
      i++;
    }
    // console.log("А тут пошло по пизде");
  }
  return newArr;
}
console.log(shuffle(arr));
// 