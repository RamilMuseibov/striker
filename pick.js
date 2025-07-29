const input = { foo: "bar", a: 1, b: 2 };
const keys = ["foo", "b"];
// {foo: "bar", b: 2} - на выходе
//pick возьмет paths

function pick(obj, paths) {
  let i = 0;
  let newObj = {};
  while (i < paths.length) {
    const key = paths[i];
    if (key in obj) {
      const value = obj[key];
      newObj[key] = value; //newObj[foo] =
    }
    i++;
  }
  return newObj;
}
console.log(pick(input, keys));
// console.log(input);
