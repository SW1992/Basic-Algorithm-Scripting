// Confirm the Ending Bonfire Solution
function confirmEnding(str, target) {
  var lastWord = str.substr(- target.length);
  if (lastWord === target) {
    return true;
  }
  else {
    return false;
  }  
}

confirmEnding("Bastian", "n");