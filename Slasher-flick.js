// Slasher flick Bonfire Solution
function slasher(arr, howMany) {
  var chop;
  chop = arr.splice(0,howMany);
  return arr;
}

slasher([1, 2, 3], 2);