///////////////////////////////////////
// Lecture: HOISTING

//Declaration
calculateAge(1990); //hoisting
function calculateAge(year) {
  console.log(2018 - year);
}

//Expression
//retirement(1980); //hoisting doesn't work with expressions
var retirement = function (year) {
  console.log(65 - (2018 - year));
};

//Variables
console.log(age); //undefined Js knows it is declared but not defined yet
var age = 36;
console.log(age); //36

function foo() {
  console.log(age); //undefined --> because age is changed after this
  var age = 65;
  console.log(age); //age is 65 inside the function
}
foo();
console.log(age); // global age is still 36

///////////////////////////////////////
// Lecture: SCOPING

// First scoping example
var a = 'Hello!';
first();
function first() {
  var b = 'Hi!';
  second();
  function second() {
    var c = 'Hey!';
    console.log(a + b + c);
  }
}

// Example to show the difference between execution stack and scope chain
/*
var a1 = 'Hello!';
first1();
function first1() {
  var b1 = 'Hi!';
  second1();
  function second1() {
    var c1 = 'Hey!';
    third1();
  }
}
function third1() {
  var d1 = 'John';
  console.log(a1 + b1 + c1 + d1); // it can not access to b1, c1 becuse they are inside another func
}
*/
///////////////////////////////////////
// Lecture: The this keyword
carAge(2012);
function carAge(year) {
  console.log(2018 - year);
  console.log(this); //global object (window)
}

var damon = {
  name: 'Damon',
  yearOfStart: 2003,
  yearsOfWork: function () {
    console.log(this); //damon object
    console.log(2018 - this.yearOfStart);
    /*
    function innerFunction() {
      console.log(this); //back to being window --> not a method it is a regular function
    }
    innerFunction();*/
  },
};
damon.yearsOfWork(); // now this refers to the damon object

var mike = {
  name: 'Mike',
  yearOfStart: 2010,
};

mike.yearsOfWork = damon.yearsOfWork; //borrows the method
mike.yearsOfWork();
