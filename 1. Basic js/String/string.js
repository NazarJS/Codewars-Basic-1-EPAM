// function return reverse string
function reverse(textLine) {
  return textLine.split('').reverse().join('');
}
//function remove first and last letter
function removeChar(textLine) {
  let shortedTextLine = textLine.substring(1, textLine.length - 1);

  return shortedTextLine;
}
//palindrome check
const palindrome = (element) => {
  let stringElement = String(element);
  return stringElement === stringElement.split('').reverse().join('');
};
//anagram check
const anagram = (firstTextLine, secondTextLine) => {
  firstTextLine = firstTextLine.split('').sort().join('');
  secondTextLine = secondTextLine.split('').sort().join('');
  return firstTextLine === secondTextLine ? true : false;
};
//function count all letters
const countAllLetters = (textLine) => {
  let result = null;

  for (i = 0; i < textLine.length; i++) {
    result += textLine[i].charCodeAt();
  }
  return result;
};
