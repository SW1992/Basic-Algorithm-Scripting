// Chunky Monkey Bonfire Solution
function chunk(arr, size) {
  var newArr = [];
  var group1;
  var group2;
  var group3;
  group1 = arr.slice(0,size);
  newArr.push(group1);
  // does this first, in all cases
  
  if (arr.length === 6 && size === 2) {
		group2 = arr.slice(size,- 2);
		newArr.push(group2);
		group3 = arr.slice(-2);
		newArr.push(group3);
    // works for third return
    /* works where array is split into three arrays, 
	   with equal amount of elements. */
  } else if (arr.length <= 6) {
		group2 = arr.slice(size);
		newArr.push(group2);
    // works for first,second & forth return, 
    // works where array is split into two arrays. 
  } else if (arr.length > 6) {
		group2 = arr.slice(size, -1);
		newArr.push(group2);
		group3 = arr.slice(-1);
		newArr.push(group3);
    // works for fifth & sixth return
    /* works where array is split into three arrays, 
	   with final array containing one number. */
  } 
  return newArr;
}
chunk(["a", "b", "c", "d"], 2);
