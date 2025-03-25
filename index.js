function isPalindrome(word) {
  // Write your algorithm here
  return word === word.replaceAll(' ', '').split('').reverse().join('')
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  My solution replaces any spaces, if there are any, splits the word into an array, reverses the 
  array then rejoins the letters into a single string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
