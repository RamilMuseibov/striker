const str =
  "строка такая, прям берёшь и копируешь это сообщение и посмотрим, что выведет, на это сообщение";

function split(str, splitter) {
  let i = 0;
  let token = "";
  const result = [];
  while (i < str.length) {
    if (str[i] === splitter) {
      result.push(token);
      token = "";
    } else {
      token += str[i];
    }
    i++;
  }
  result.push(token);

  return result;
}
console.log(split(str, " ")); 
