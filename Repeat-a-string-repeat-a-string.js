// Repeat a string repeat a string Bonfire Solution
function repeatStringNumTimes(str, num) {
  if (num < 0) {
      return "";
  } 
  else {
      var repeats = str.repeat(num);
      return repeats;
  }  
}

repeatStringNumTimes("abc", 3);
