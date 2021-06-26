// function return new filtered array
const filterArray = (arr) => {
  let newArr = [];
  return arr.filter((item) => {
    return newArr.hasOwnProperty(item) ? false : (newArr[item] = true);
  });
};
//function return som of all positives numbers
const countPositiveNum = (arr) => {
  let count = 0;

  arr.forEach((item) => {
    item > 0 ? (count += item) : false;
  });
  return count;
};
//Fizz Buzz
const fizzbuzz = (num) => {
  let arr = [];
  let newArr = [];

  for (i = 1; i <= num; i++) {
    arr.push(i);
  }
  arr.forEach((item) => {
    if (item % 3 == 0 && item % 5 == 0) {
      newArr.push("fizzbuzz");
    } else if (item % 3 == 0) {
      newArr.push("fizz");
    } else if (item % 5 == 0) {
      newArr.push("buzz");
    } else if (item % 3 !== 0) {
      newArr.push(item);
    }
  });
  return newArr;
};
//function return array multiplied by number
const multiplyAll = (arr) => (num) => {
  return arr.map((item) => {
    return item * num;
  });
};
//function searches for the shortest word
const shortestWord = (str) => {
  let stringArray = str.split(" ");
  let shortWord;
  let shortestLength = stringArray[0].length;
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length < shortestLength) {
      shortestLength = stringArray[i].length;
      shortWord = stringArray[i];
    }
  }
  return shortWord;
};
//function squre every digit
const squreEveryDigit = (num) => {
  let digit = num
    .toString()
    .split("")
    .map((item) => {
      return item * item;
    })
    .join("");
  return (digit = Number(digit));
};
//function takes an array and a function
function processArray(arr, fun) {
  return arr.map((element) => {
    return fun(element);
  });
}
