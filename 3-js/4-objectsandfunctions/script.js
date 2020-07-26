///////////////////////////////////////
// Lecture: OBJECTS

//function constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//inheritance
Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';
var damon = new Person('Damon', 1980, 'driver');
var henry = new Person('Henry', 1974, 'player');
damon.calculateAge();
henry.calculateAge();
console.log(damon.lastName + ' ' + henry.lastName);

//Object.create
var personProto = {
  calculateAge1: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1992;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1978 },
  job: { value: 'painter' }
});

//Primitives vs Objects
var age = 27;
var obj1 = {
  age: 26,
  city: 'Berlin'
};
function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj1);
console.log(age);
console.log(obj1.city);

//Passing functions as arguments
var years = [1970, 1960, 1893, 1920];
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge2(el) {
  return 2018 - el;
}
function isFullAge(el) {
  return el >= 50;
}
function maxHeartBeat(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}
var ages = arrayCalc(years, calculateAge2);
var fullAges = arrayCalc(ages, isFullAge);
var heartBeat = arrayCalc(ages, maxHeartBeat);
console.log(ages);
console.log(fullAges);
console.log(heartBeat);

//function returning another function
function interviewQuestions(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    };
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '!');
    };
  } else {
    return function(name) {
      console.log('What do you do ' + name + '?');
    };
  }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');
teacherQuestion('Damon');
designerQuestion('Jane');
interviewQuestions('teacher')('John');

//IIFE immidiately invoked function expressions
var x = 2;
(function(x) {
  var score = Math.random() * 10;
  console.log(score);
  console.log(x);
  console.log(score - x >= 5);
})(x);
var x = 3;
