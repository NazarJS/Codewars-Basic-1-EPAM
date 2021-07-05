// function return new filtered array
const filterArray = (arrOfnumbers) => {
  let sortedArray = [];
  return arrOfnumbers.filter((item) => {
    return sortedArray.hasOwnProperty(item) ? false : (sortedArray[item] = true);
  });
};
//function return som of all positives numbers
const countPositiveNum = (arrOfnumbers) => {
  let count = 0;

  arrOfnumbers.forEach((item) => {
    item > 0 ? (count += item) : false;
  });
  return count;
};
//Fizz Buzz
const fizzbuzz = (numberOfDigits) => {
  let arrayOfNumbers = [];
  let sortedArray = [];

  for (i = 1; i <= numberOfDigits; i++) {
    arrayOfNumbers.push(i);
  }

  arrayOfNumbers.forEach((item) => {
    switch (true) {
      case item % 3 === 0 && item % 5 === 0:
        sortedArray.push('fizzbuzz');
        break;
      case item % 3 === 0:
        sortedArray.push('fizz');
        break;
      case item % 5 === 0:
        sortedArray.push('buzz');
        break;
      case item % 3 !== 0:
        sortedArray.push(item);
        break;
    }
  });
   
  return newArr;
};
//function return array multiplied by number
const multiplyAll = (arrOfnumbers) => (multiplyDigit) => {
  return arrOfnumbers.map((item) => {
    return item * multiplyDigit;
  });
};
//function searches for the shortest word
const shortestWord = (sentenceLine) => {
  let stringArray = sentenceLine.split(' ');
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
const squreEveryDigit = (numberOfDigits) => {
  let digit = numberOfDigits
    .toString()
    .split('')
    .map((item) => {
      return item * item;
    })
    .join('');
  return (digit = Number(digit));
};
//function takes an array and a function
function processArray(arrOfElements, fun) {
  return arrOfElements.map((element) => {
    return fun(element);
  });
}
