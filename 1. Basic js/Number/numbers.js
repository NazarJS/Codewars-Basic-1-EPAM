//even or odd check
const isEven = (num) => {
  return num % 2 == 0 ? true : false;
};
//function return centuary from year
function century(year) {
  return Math.ceil(year / 100);
}
//function check on greatest common divisor
function divisor(num1, num2) {
  let arr;

  for (i = 0; i <= num1; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      arr = i;
    }
  }
  return arr;
}
//function return factorial
function factorial(num) {
  let count = 1;
  while (num != 0) {
    count *= num;
    num--;
  }
  return count;
}
//function return the duplicated number
const sortArr = (arr) => {
  let newArr = arr.sort();
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (newArr[i + 1] == arr[i]) result.push(arr[i]);
  }
  return result;
};
//prime check
const isPrime = (num) => {
  let arr = [];

  if (num == 1) {
    return true;
  } else {
    for (i = 1; i <= num; i++) {
      if (num % i == 0) {
        arr.push(i);
      }
    }
  }

  return arr.length == 2 ? true : false;
};
