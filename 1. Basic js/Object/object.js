//function adds items to the object
function countAllCherectas(textLine) {
  let resultObject = {};
  let sortedTextLine = textLine.split('').sort();
  sortedTextLine.forEach((element) => {
    resultObject.hasOwnProperty(element)
      ? resultObject[element]++
      : (resultObject[element] = 1);
  });
  return resultObject;
}
