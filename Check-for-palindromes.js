// Check for Palindromes Bonfire Solution
function palindrome(str) {
  var re = str.replace(/[^a-z0-9]/ig,'');
  var low = re.toLowerCase();
  if (low === low.split("").reverse().join("")) {
	return true;
  } 
  else {
	return false; 
   }
}

palindrome("eye");
