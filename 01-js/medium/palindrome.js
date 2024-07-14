/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let isPalindrome = false;

  if (str == "") {
    isPalindrome = true;
  } else {
    let strArr = str.split("");

    for (let i = 0; i < strArr.length; i++) {
      while (
        strArr[i] == " " ||
        strArr[i] == "?" ||
        strArr[i] == "!" ||
        strArr[i] == "." ||
        strArr[i] == ","
      ) {
        strArr.splice(i, 1);
      }
    }

    let finalStr = strArr.join("").toLowerCase();

    for (let i = 0; i < finalStr.length; i++) {
      if (finalStr[i] == finalStr[finalStr.length - (i + 1)])
        isPalindrome = true;
      else {
        isPalindrome = false;
        break;
      }
    }
  }

  return isPalindrome;
}

module.exports = isPalindrome;
