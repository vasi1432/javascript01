// uppercase for each first letter of word
//split string to iterate avery word of giver string
//split it to add the remaining letters of the string
var capitalizeTitle = function (title) {
  let result = [];
  let arr = title.split(` `);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i].length >= 3) {
        if (j === 0) {
          result.push(arr[i][0].toUpperCase());
        } else {
          result.push(arr[i][j].toLowerCase());
        }
      }
    }
    result.push(" ");
  }
  return result.join("");
};
console.log(capitalizeTitle("capiTalIze tHe titLe"));
