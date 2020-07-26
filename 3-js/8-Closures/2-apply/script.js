//apply
function sayHi() {
  return 'Hi '+ this.firstName;
}
var damon = {
  firstName: 'Damon'
}
var jason = {
  firstName: 'Jason'
}
console.log(sayHi.call(damon));
console.log(sayHi.apply(jason));//seems similar
//but with parameters
function addNumbers(a,b,c,d){
  return this.firstName + ' just calculated ' + (a+b+c+d);
}
console.log(addNumbers.call(damon,1,2,3,4));
console.log(addNumbers.apply(jason, [1,2,3,4]));//takes an array as a parameter
////
var nums = [5,7,1,4,2];
console.log(Math.max(nums));//NaN because it doesnt take any arrays
console.log(Math.max.apply(this, nums));
function sumValues(a,b,c) {
  return a + b + c;
}
var values = [1,2,3];
console.log(sumValues(values));//1,2,3undefinedundefined
console.log(sumValues.apply(this, values)); // you get the result
