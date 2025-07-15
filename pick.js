const input = { foo: "bar", a: 1, b: 2 };
const keys = ["foo", "b"];
// {foo: "bar", b: 2} - на выходе
//pick возьмет paths

function pick(obj, paths) {
  obj = { ...input };
  let i = 0;
  let newObj = {};
  while (i < paths.length) {
    if (paths[i] in obj) {
    //   console.log(paths[i]);
    //   console.log(obj[paths[i]]);
        newObj[paths[i]] = obj[paths[i]];
    }
    i++;
  }
  return newObj;
}
console.log(pick(input, keys));
