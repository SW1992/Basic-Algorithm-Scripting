// Reverse a String Bonfire Solution
function reverseString(str) {
  var seperator = "";
  var array = str.split(seperator);
  array.reverse();
  str = array.join(seperator);
  return str;
}

reverseString("hello");