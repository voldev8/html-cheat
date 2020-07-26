//Javascript hello world
(function() {
  'use strict';
  function greetMe(name) {
    console.log('Hello ' + name + '.');
  }
  greetMe('Damon');
})();

//Comment in a line
/* comments in
a few lines */

//VARIABLES
if (true) {
  var a = 2;
}
console.log(a);

if (true) {
  let b = 3;
}
//console.log(b); // b is not defined

const PI = 3.14; //const variables can not be changed
var a = 3; // var can be changed
console.log(a);

//OPERATORS
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//IF/ElSE STATEMENTS
var ifElse = true;
if (ifElse) {
  console.log('That is true');
} else {
  console.log('That is not true');
}

//TERNARY OPERATOR
var ternaryFirstName = 'John';
var ternaryAge = 22;

ternaryAge >= 18
  ? console.log(ternaryFirstName + ' can drink.')
  : console.log(ternaryFirstName + ' not allowed to drink.');

var drink = ternaryAge >= 18 ? 'Beer' : 'juice';
console.log(drink);

//SWITCH STATEMENT
var job = 'teacher';
switch (job) {
  case 'teacher':
    console.log(ternaryFirstName + ' teaches.');
    break;
  case 'driver':
    console.log(ternaryFirstName + ' is a driver.');
    break;
  default:
    console.log(ternaryFirstName + ' does something else.');
}
