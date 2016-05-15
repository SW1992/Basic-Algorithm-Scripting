// Mutations Bonfire Solution
function mutation(arr) { 
  var letterCheck;
  var str = arr.toString().toLowerCase();
  // returns string version of arr, with characters all lower case.
  var newArr = str.split(",");
  // splits string, back into array of substrings.
  var sep = newArr[1].split("");
  // splits second string, into array of characters.
  for (i = 0; i < sep.length; i++) {
     if (newArr[0].indexOf(sep[i]) !== -1) {
     letterCheck = true;
  /* searches first string for matches against the letters 
     that make up the second string, returns boolean of true or false. */
   } else {
     letterCheck = false;
     break;
   /* if a paticular character isn't found the first string, 
      the statement stops executing & lettercheck returns false */   
   }
 }
  return letterCheck; 
}

mutation(["hello", "hey"]);