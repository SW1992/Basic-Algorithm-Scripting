// Falsy Bouncer Bonfire Solution
function bouncer(arr) {
  function isTrue (arr) {
    return Boolean(arr) === true; 
    // arr item (converted to boolean) === true
  }
  var truthyArray = arr.filter(isTrue);
  // filter calls callback function isTrue, once for each element of arr
  /* creates new array of values that returned true & 
     so passed the test in the callback function */
  return truthyArray; 
}

bouncer([7, "ate", "", false, 9]);
