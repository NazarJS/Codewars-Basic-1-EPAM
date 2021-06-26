//function adds items to the object
function countAllCherectas(str) {
  let newObject = {};
  let newStr = str.split("").sort();
  newStr.forEach((element) => {
    newObject.hasOwnProperty(element)
      ? newObject[element]++
      : (newObject[element] = 1);
  });
  return newObject;
}
