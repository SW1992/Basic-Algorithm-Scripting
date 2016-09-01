// Seek and Destroy Bonfire Solution
function destroyer(arr) { 
  var arg1 = arguments[1];
  var arg2 = arguments[2];
  var arg3 = arguments[3]; 
  /* You can refer to a function's arguments within the 
  function, by using the arguments object. */
  function seek (value) {
    return value !== arg1 && value !== arg2 && value !== arg3;
    }
  var destroy = arr.filter(seek);
  return destroy;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
