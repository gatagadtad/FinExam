// Declare variables with the given words
let word1 = "RACECAR";
let word2 = "RECORDER";

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Log original and reversed strings
console.log(word1);
console.log(reverseString(word1));
console.log(word2);
console.log(reverseString(word2));

// Log truth value if the original string is equivalent to the reversed string
console.log(word1 === reverseString(word1));
console.log(word2 === reverseString(word2));
