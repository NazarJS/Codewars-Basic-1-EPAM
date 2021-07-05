//even or odd check
const isEven = (number) => {
  return number % 2 === 0 ? true : false;
};
//function return centuary from year
function century(year) {
  return Math.ceil(year / 100);
}
//function check on greatest common divisor
function divisor(firstNumber, secondNumber) {
  let arrayOfDigits = [];

  for (i = 0; i <= firstNumber; i++) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      arrayOfDigits = i;
    }
  }
  return arrayOfDigits;
}
//function return factorial
function factorial(digit) {
  let result = 1;
  while (digit !== 0) {
    result *= digit;
    digit--;
  }
  return result;
}
//function return the duplicated number
const sortArr = (arrayOfNumbers) => {
  let sortedArray = arrayOfNumbers.sort();
  let result = [];
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (sortedArray[i + 1] == arrayOfNumbers[i]) result.push(arrayOfNumbers[i]);
  }
  return result;
};
//prime check
const isPrime = (digit) => {
  let wrapper = [];

  if (digit === 1) {
    return true;
  } else {
    for (i = 1; i <= digit; i++) {
      if (digit % i === 0) {
        wrapper.push(i);
      }
    }
  }

  return wrapper.length === 2 ? true : false;
};
