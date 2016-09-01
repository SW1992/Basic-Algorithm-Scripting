// Return Largest Numbers in Arrays Bonfire Solution
function largestOfFour(arr) {
  var newArr = [];
  var largestNum1 = 0;
  var largestNum2 = 0;
  var largestNum3 = 0;
  var largestNum4 = 0;
  for (i = 0; i < arr.length; i++) {
    // outer loop
   for (x = 0; x < arr[i].length; x++) {
     // inner loop
     if (arr[0][x] > largestNum1) {
       largestNum1 = arr[0][x];
       // arr[number][x] accesses sub elements in sub-arrays
      }
     if (arr[1][x] > largestNum2) {
       largestNum2 = arr[1][x]; 
       // if arr[number][x] > largest number
       // largest number = arr[number][x] (biggest number in last looped through sub-array)
     }
     if (arr[2][x] > largestNum3 ) {
       largestNum3 = arr[2][x];
     }
     if (arr[3][x] > largestNum4 ) {
       largestNum4 = arr[3][x];
     }
   }
   newArr.push(largestNum1);
   newArr.push(largestNum2);
   newArr.push(largestNum3); 
   newArr.push(largestNum4);
   return newArr;
   // append largest number from each array to new array & return it
   }
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
