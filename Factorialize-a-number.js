// Factorialize a Number Bonfire Solution
function factorialize(num) {
// if number equals 0 it’s factorial will be 1
if (num === 0) {
  return 1;
}
//reject negative intergers
if (num < 0) {
  return console.log("enter a positive integer");
}
//recursive function, uses rule n! = n × (n−1)!
  return num * factorialize(num - 1);
}

factorialize(5);