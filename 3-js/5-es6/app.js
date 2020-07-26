/////////// LET AND CONST\\\\\\\\
console.log('--LET AND CONST--');
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
//ES6
/*
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller'; // constants can not be changed, will get an error
console.log(name6); //can mutate it though if it is object (with .push() for ex)
*/

//ES5
function driverLicense5(passedTest) {
  if (passedTest) {
    var firstname = 'John';
    var yearOfBirth = 1990;
  }
  console.log(
    firstname + ' whom was born in ' + yearOfBirth + ' passed the test!'
  );
}
driverLicense5(true);
//ES6
/*
function driverLicense6(passedTest) {
  if (passedTest) {
    let firstname = 'John'; //let and const only accessible in block
    const yearOfBirth = 1990;
  }
  console.log(
    firstname + ' whom was born in ' + yearOfBirth + ' passed the test!'
  );
}
driverLicense6(true);
*/

//ES5
var i5 = 5;
for (var i5 = 2; i5 > 0; i5--) {
  console.log(i5);
}
console.log(i5); //prints out '0'
//ES6
let i6 = 6;
for (let i6 = 2; i6 > 0; i6--) {
  console.log(i6);
}
console.log(i6); //prints out '6'
console.log('<---->');

//////////BLOCKS AND IIFEs\\\\\\\\\\\\
console.log('--BLOCKS AND IIFEs--');
//ES5
(function () {
  var c = 3;
});
//console.log(c);   //c is not defined
//ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}
//console.log(a); //not accessible
console.log(c); //accessible
console.log('<---->');

///////////STRINGS\\\\\\\\\\\\\\\\\\\
console.log('--STRINGS--');
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge() {
  return 2017 - yearOfBirth;
}

//ES5
console.log(
  'This is ' +
    firstName +
    ' ' +
    lastName +
    ' and he is ' +
    calcAge(yearOfBirth) +
    '.'
);
//ES6
console.log(
  `This is ${firstName} ${lastName} and he is ${calcAge(yearOfBirth)}.`
);
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.endsWith('n'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(3));
console.log('<---->');

//////////ARROW FUNCTIONS\\\\\\\\\\\\\\\\\\\
console.log('--ARROW FUNCTIONS--');
const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function (e) {
  return 2017 - e;
});
console.log(ages5);
//ES6
let ages6 = years.map((e) => 2017 - e); // no need for return in one-line functions
console.log(ages6);
ages6 = years.map((e, index) => `Age element ${index + 1}: ${2017 - e}.`);
console.log(ages6);
ages6 = years.map((e, index) => {
  const now = new Date().getFullYear();
  const age = now - e;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
console.log('<---->');

///////////ARROW FUNCTIONS 2\\\\\\\\\\\\\\\\\\\\\\
console.log('--ARROW FUNCTIONS2--');

//ES5
var box5 = {
  color: 'green',
  position: '1',
  clickMe: function () {
    var self = this;
    document.querySelector('.green').addEventListener('click', function () {
      //this points to window object not to box5 thats why we create self variable
      var str =
        'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  },
};
box5.clickMe();
//ES6
const box6 = {
  color: 'green',
  position: '1',
  clickMe: function () {
    //if you switch this to es6 it is not gonna work '() =>'
    document.querySelector('.green').addEventListener('click', () => {
      //es6 you dont need to create a self variable
      var str =
        'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  },
};
box6.clickMe();
//arrow functions should never be used as methods

//function constructor
function Person(name) {
  this.name = name;
}
//ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(
    function (e) {
      return this.name + ' is friends with ' + e;
    }.bind(this)
  ); //if you don't bind it this takes window --bind creates a copy
  console.log(arr);
};
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
//ES6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map((e) => `${this.name} is friends with  ${e}`);
  console.log(arr);
};
new Person('Mike').myFriends6(friends);
console.log('<---->');

///////////////DESTRUCTURING\\\\\\\\\\\\\\\
console.log('--DESTRUCTURING--');

//ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];
//ES6
const [name1, age1] = ['John', 26];
console.log(name1);
console.log(age1);

const obj = {
  firstName1: 'John',
  lastName1: 'Smith',
};
const { firstName1, lastName1 } = obj;
console.log(firstName1);
console.log(lastName1);
/*
const {firstName1 : a, lastName1: b} = obj;
console.log(a); returns John
console.log(b); returns Smith

function calcAgeRetirement(year) {
const age = new Date().getFullYear() - year;
return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age); returns age
console.log(retirement); returns (65 - age)
*/
console.log('<---->');

///////////ARRAYS\\\\\\\\\\\\\\\\
console.log('--ARRAYS--');

/*
const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'red';
})
//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'red');

//ES5
for(var jbox = 0; jbox < boxesArr5.length; jbox++) {
  if(boxesArr5[jbox].className === ' box blue'){
    continue;
  }
  boxesArr5[jbox].textContent = 'I am changed to blue';
}
//ES6
for (const current of boxesArr6) {
  if(current.className.includes('blue')){
    continue;
  }
  current.textContent = 'I am changed to red';
}
*/

//ES5
var ages = [12, 17, 8, 21, 14, 11];
var full5 = ages.map(function (cur) {
  return cur >= 18;
});
console.log(full5);
console.log(full5.indexOf(true));
console.log(ages[full5.indexOf(true)]);
//ES6
console.log(ages.findIndex((cur) => cur >= 18)); //gives you index
console.log(ages.find((cur) => cur >= 18)); //gives you the value
console.log('<---->');

//////////SPREAD OPERATOR\\\\\\\\\\\\
console.log('--SPREAD OPERATOR--');

//used in function
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
//if we want to use an array we need apply in es5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);
//ES6
//but in es6 we use spread (...)
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mike'];
const familyDoe = ['Nick', 'Mary'];
const bigFamily = [...familySmith, 'Lana', ...familyDoe];
// var bigFamily = familySmith.concat('Lana').concat(familyDoe);
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes1 = document.querySelectorAll('.box'); //nodelist
const all = [h, ...boxes1];
Array.from(all).forEach((cur) => (cur.style.color = 'orange'));
console.log('<---->');

/////////REST PARAMATERS\\\\\\\\\\\
console.log('--REST PARAMETERS--');
//if we dont know how many arguments are there gonna be
//used in function declaration
//ES5
function isFullAge5() {
  console.log(arguments); //similar to this variable
  var argsArr = Array.prototype.slice.call(arguments); //makes arguments an array
  argsArr.forEach(function (cur) {
    console.log(2016 - cur >= 18);
  });
}
isFullAge5(1990, 1999, 1965);
//ES6
function isFullAge6(...years) {
  years.forEach((cur) => console.log(2016 - cur >= 18));
}
isFullAge6(1990, 1999, 1965);

//ES5
function isFullAge51(limit) {
  var argsArr1 = Array.prototype.slice.call(arguments, 1); //starts cutting from position one
  argsArr1.forEach(function (cur) {
    console.log(2016 - cur >= limit);
  });
}
isFullAge51(16, 1990, 1999, 1965);
//ES6
function isFullAge61(limit, ...years) {
  years.forEach((cur) => console.log(2016 - cur >= limit));
}
isFullAge61(16, 1990, 1999, 1965);
console.log('<---->');

/////////DEFAULT PARAMATERS\\\\\\\\\
console.log('--DEFAULT PARAMETERS--');

//ES5
//function constractor
function Smith5(firstName, yearOfBirth, lastName, nationality) {
  //default lastname and nationality if not specified
  lastName === undefined ? (lastName = 'Smith') : (lastName = lastName);
  nationality === undefined
    ? (nationality = 'American')
    : (nationality = nationality);
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
//ES6
function Smith6(
  firstName,
  yearOfBirth,
  lastName = 'Smith',
  nationality = 'American'
) {
  //default lastname and nationality if not specified
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new Smith6('John', 1990);
console.log(john);
var emily = new Smith6('Emily', 1980, 'Diaz', 'Spanish'); //last name and nationality changed
console.log(emily);
console.log('<---->');

///////////////MAPS\\\\\\\\\\\\\\\\
console.log('--MAPS--');
//new key value data structure
const question = new Map();
//in order to add data we use set method
question.set('question', 'What is the capitol?');
question.set(1, 'Brussels');
question.set(2, 'Washington');
question.set(3, 'Ankara');
question.set(4, 'Caracas');
question.set('correct', 2); //correct answer
question.set(true, 'Correct'); //if the answer is correct
question.set(false, 'Wrong try again'); // if it is wrong

console.log(question.get('question')); //get
console.log(question.size); //size of map

if (question.has(4)) {
  //checks if it has number 4
  question.delete(4); //4th answer is gone
}
// question.clear();                 //empties the map

// question.forEach((value, key) => console.log(`this is ${key}, and it's set to ${value}`));
for (let [key, value] of question.entries()) {
  //same as forEach method
  if (typeof key === 'number') {
    //if key is number then print
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer for capitol')); //converted to number
console.log(question.get(ans === question.get('correct')));
console.log('<---->');

//////////CLASSES\\\\\\\\\
console.log('--CLASSES--');

//ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
};
var mioke5 = new Person5('Mioke', 1970, 'engineer');
//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  } //no need for ; or ,
  calculateAge() {
    //no need for prototype
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }
  static greeting() {
    //attached, not inherited
    console.log('Hey there I am Person6');
  }
}

const mioke6 = new Person6('Mioke', 1970, 'engineer');
Person6.greeting();
//mioke6.greeting(); wont work
console.log('<---->');

/////////SUBCLASSES\\\\\\\\\\\
console.log('--SUBCLASSES--');

//ES5
//person5 superclass
var Person5s = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
Person5s.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};
//subclass
var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
  Person5s.call(this, name, yearOfBirth, job); //
  this.olympicGames = olympicGames;
  this.medals = medals;
};
Athlete5.prototype = Object.create(Person5s.prototype);
Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
//ES6
class Person6s {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}
//subclass
class Athlete6 extends Person6s {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
