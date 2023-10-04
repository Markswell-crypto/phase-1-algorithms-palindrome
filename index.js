function isPalindrome(word) {
  // Write your algorithm here
    // Clean the input string by converting to lowercase and removing non-alphanumeric characters
    const cleanedWord = word.toLowerCase();
  
    let pointer1 = 0;
    let pointer2 = cleanedWord.length - 1;
  
    while (pointer1 <= pointer2) {
      if (cleanedWord[pointer1] !== cleanedWord[pointer2]) {
        return false;
      }
      pointer1++;
      pointer2--;
    }
  
    return true;
  }

/* 
  Add your pseudocode here
1. Accept input in lowercase.
2. create two pointers, pointer1 to start at the begining and pointer2 to start at the end.
3. create a loop while for pointer1 less than or equal to pointer2
4. create an If loop for the characters at pointer1 and pointer2, to return false if the characters are not the same.
5. create an Increment for pointer1 and a decrement for pointer2.
6. Finally If the loop completes successfully it returns false, otherwise it returns true as the string is a palindrome.
*/

/*
  Add written explanation of your solution here
  The funtion should iterate through the string and from both ends to see if the characters are the same then returns true 
  if they are the same, otherwise the return will be false

isPalindrome? ("racecar") should return true.
isPalindrome? ("host") should return false.
isPalindrome? ("saas") should return true.
isPalindrome? ("2002") should return true.

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
