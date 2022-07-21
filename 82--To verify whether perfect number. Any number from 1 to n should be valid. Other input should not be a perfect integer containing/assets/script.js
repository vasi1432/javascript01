//verify perfect number
///perfect number means its divisors sum is the number itself
function perfectNumber(num) {
  let result = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
      result += i;
    }
  }
  console.log(result);
  if (result === 28 && result != 0) {
    console.log("given number is perfect");
  } else {
    console.log("!!given number is not perfect");
  }
}
console.log(perfectNumber(28));
