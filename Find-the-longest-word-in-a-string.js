// Find the Longest Word in a String Bonfire Solution
function findLongestWord(str) {
  var arr = str.split(" ");
// splits function input into array of sub-strings
  var longestWord = 0;
  for (i = 0; i < arr.length; i++) {
  for (x = 1; x < arr.length; x++) {
/* arr.length is equal to amount of sub-strings in array, 
   loops start at 0 and 1 & continue while i or x < 
   total amount of sub-strings in arr, while i < 9 in the first case. */
    var currWord = arr[i].length; 
    var nextWord = arr[x].length;
/* if length of current word greater than length of the next, 
   set longest word to that length */
    if (currWord > longestWord) {
      longestWord = currWord;
    } 
/* elif length of next word greater than length of current word, 
   set longest word to that length */
    else if (nextWord > longestWord) {
      longestWord = nextWord;
    }
  }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");