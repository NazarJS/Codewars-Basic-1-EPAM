// function return reverse string
function reverse(str) {
  return str.split("").reverse().join("");
}
//function remove first and last letter
function removeChar(str) {
  let nam = str.substring(1, str.length - 1);

  return nam.split("").reverse().join("");
}
//palindrome check
const palindrome = (str) => {
  let num = String(str);
  return num == num.split("").reverse().join("");
};
//anagram check
const anagram = (num1, num2) => {
  num1 = num1.split("").sort().join("");
  num2 = num2.split("").sort().join("");
  return num1 == num2 ? true : false;
};
//function count all letters
const countAllLetters = (str) => {
  let count = null;

  for (i = 0; i < str.length; i++) {
    count += str[i].charCodeAt();
    console.log(str[i]);
  }
  return count;
};
