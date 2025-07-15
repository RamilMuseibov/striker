const input = { foo: "bar", a: 1, b: 2 };
const pathss = ["a"];

// function omit(obj, paths) {} // omit исключит paths

// {foo: "bar", b: 2} - на выходее

function omit(obj, paths) {
  obj = { ...input };
  let i = 0;
  while (i < paths.length) {
    if (paths[i] in obj) {
      delete obj[paths[i]];
    }
    i++;
  }
  return obj;
}
console.log(omit(input, pathss));
