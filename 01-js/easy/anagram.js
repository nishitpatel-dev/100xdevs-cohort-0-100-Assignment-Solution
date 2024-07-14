/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let anagram = false;

  if (str1.length == 0 && str2.length == 0) {
    anagram = true;
  } else {
    let finalstr1 = str1.toLowerCase();
    let finalstr2 = str2.toLowerCase();

    if (finalstr1.length == finalstr2.length) {
      for (let i = 0; i < finalstr1.length; i++) {
        for (let j = 0; j < finalstr2.length; j++) {
          if (finalstr1[i] != finalstr2[j]) {
            anagram = false;
            continue;
          } else {
            anagram = true;
            break;
          }
        }

        if (anagram == false) {
          break;
        }
      }
    }
  }

  return anagram;
}

module.exports = isAnagram;
