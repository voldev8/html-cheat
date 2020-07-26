//FUNCTIONS
function calculateAge(birthYear) {
  return 2018 - birthYear;
}
var ageJohn = calculateAge(1980);
var ageDan = calculateAge(1976);
console.log(ageJohn, ageDan);

//function declaration
function yearsUntilRetire(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetire(1990, 'John');

//FUNCTION STATEMENTS and EXPRESSIONS
//function expression (they do not hoist)
var whichTeam = function(team, name) {
  switch (team) {
    case 'Barcelona':
      return name + ' plays for Barca.';
    case 'Real Madrid':
      return name + ' plays for R.Madrid.';
    default:
      return 'Does not play for both teams.';
  }
};
console.log(whichTeam('Barcelona', 'Messi'));

//ARRAYS
var coffees = ['Dark Roast', 'Colombian', 'Turkish'];
console.log(coffees[2]);

var johnArray = ['John', 'Smith', 1980, 'player', true];
johnArray.push('yellow');
johnArray.unshift('Mr.');
console.log(johnArray);
johnArray.pop(); //removes the last
johnArray.shift(); //removes the first
console.log(johnArray);

var isPlayer =
  johnArray.indexOf('player') === -1
    ? johnArray[0] + ' is not a player.'
    : johnArray[0] + ' is a player.';
console.log(isPlayer);

//OBJECTS
var car = {
  myCar: 'Subaru',
  milage: 112012,
  color: 'white'
};
console.log('I have a ' + car.color + ' ' + car.myCar + '.');

var carNew = new Object();
carNew.model = 'Hyundai';
carNew['milage'] = 12752;

//OBJECTS METHODS
var hank = {
  firstName: 'Hank',
  lastName: 'Dang',
  birthYear: 1980,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};
