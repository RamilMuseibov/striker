/!----------------------1---------------------------/;
// на вход строка const inputFields = "name,id,tokens";

// на выход {
//   "name": true,
//   "id": true,
//   "tokens": true
// }

const inputFields = "name,id,tokens";

function transformToJson(str) {
  //   return Object.fromEntries(str.split(",").map((key) => [key, true]));

  const arr = str.split(",");

  let i = 0;
  let entries = [];
  while (i < arr.length) {
    entries.push([arr[i], true]);

    i++;
  }
  return Object.fromEntries(entries);
}
console.log(transformToJson(inputFields));
