// Where do i belong Bonfire Solution
function where(arr, num) {
  var lowestIndex;
  function compare(a,b) {
    return a - b;
  }
  arr.sort(compare);
   for (var i = 0; i < arr.length; i++ ) {
    if (arr[i] >= num ) {
        lowestIndex = i;
        break;
    } else if (arr[i] < num) {
        lowestIndex = i + 1;   
    }
  }
  return lowestIndex;
}
where([40, 60], 50);
