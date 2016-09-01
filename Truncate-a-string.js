// Truncate a string Bonfire Solution
function truncateString(str, num) {
  if (num <= 3) {
    var truncate = str.slice(0,num);
    return truncate + "...";
    // the length of the three dots is not added to the string length here.
  } 
  else if (str.length > num ) {
    var truncateStr = str.slice(0,num  - 3); 
    return truncateStr + "...";
    // num - 3 accounts for the "..." added onto strings length here
  } 
  else {
    // else (if other two conditions are false) return the str unmodified.
    return str; 
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
