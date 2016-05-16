\\ Caesars Cipher Bonfire Solution
function rot13(str) { // LBH QVQ VG!
  var alpha = {
    65:  "A",
    66:  "B",
    67:  "C",
    68:  "D",
    69:  "E",
    70:  "F",
    71:  "G",
    72:  "H",
    73:  "I",
    74:  "J",
    75:  "K",
    76:  "L",
    77:  "M",
    78:  "N",
    79:  "O",
    80:  "P",
    81:  "Q",
    82:  "R",
    83:  "S",
    84:  "T",
    85:  "U",
    86:  "V",
    87:  "W",
    88:  "X",
    89:  "Y",
    90:  "Z",
    91:  "A",
    92:  "B",
    93:  "C",
    94:  "D",
    95:  "E",
    96:  "F",
    97:  "G",
    98:  "H",
    99:  "I",
    100: "J",
    101: "K",
    102: "L",
    103: "M",
    104: "N",
    105: "O",
    106: "P",
    107: "Q",
    108: "R",
    109: "S",
    110: "T",
    111: "U",
    112: "V",
    115: "W",
    116: "X",
    117: "Y",
    118: "Z",   
  };
  var originalNum;
  var uni =[];
  var decodedLetter;
  var decodedString = "";
  var i;
  var x;
  for ( i = 0; i < str.length; i++) {
    uni.push(str.charCodeAt(i)); 
  // get unicode val of current character being looped through
  // push to array uni
  }
  for (x = 0; x < uni.length; x++) {
    if (uni[x] > 63) {
      originalNum = uni[x];
      decodedLetter = alpha[originalNum + 13];
      decodedString += decodedLetter;
      // decoded letter here holds (A-Z) characters
      // alpha[originalNum + 13] (decodes original letter)
	  /* there's 26 letters in latin alphabet so the same algorithm that was 
	     applied to ROT 13 encode the string, can also be used to decode the string. */
    }
    else {
      decodedLetter = String.fromCharCode(uni[x]);
      decodedString += decodedLetter;
      // decoded letter here holds non (A-Z) characters
      // returned string chars are appended to decoded string
      
    }
  }
  return decodedString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");