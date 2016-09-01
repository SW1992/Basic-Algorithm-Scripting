// Title case a sentence Bonfire Solution
function titleCase(str) {
  var arr = str.split(" ");
  var newArr = [];
  for (i = 0; i < arr.length;i++) {
    var firstLetter = arr[i][0];
    var first = firstLetter.toUpperCase();
    newArr.push(first);
    for (x = 1; x < arr[i].length;x++) {
      var otherLetters = arr[i][x];
      var other = otherLetters.toLowerCase();
      newArr.push(other);
    }
  }  
  str = newArr.join(" ");
  var titleCase = str.replace(/[\s+](?=[a-z'])/g,"");
  return titleCase;
} 

titleCase("I'm a little tea pot");
