//Closures
function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function (yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}
var retirementUS = retirement(65);
var retirementGermany = retirement(66);
var retirementIceland = retirement(67);
retirementUS(1990);
retirementIceland(1990);
//retirement(1990)(65);
/*
function interviewQuestions(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '!');
    } else {
      console.log('What do you do ' + name + '?');
    }
  };
}
interviewQuestions('teacher')('John');
*/

//Bind, Call, Apply

var bca = {
  name: 'Damon',
  age: 23,
  job: 'Driver',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        'Good ' +
          timeOfDay +
          ' ladies and gentlemen! My name is ' +
          this.name +
          ".I'm a " +
          this.job +
          ".I'm " +
          this.age +
          ' years old.'
      );
    } else if (style === 'friendly') {
      console.log(
        'Hey Good ' +
          timeOfDay +
          ".What's up? I'm " +
          this.name +
          " I'm a " +
          this.job +
          ".I'm " +
          this.age +
          ' years old.'
      );
    } else {
      console.log('Please pick a style.');
    }
  },
};
var bca2 = {
  name: 'Mary',
  age: 54,
  job: 'Creator',
};
bca.presentation('formal', 'morning');

//call
bca.presentation.call(bca2, 'friendly', 'afternoon');
//changed this method from bca to bca2 ==> Method borrowing
//bca.presentation.apply(bcaCall, ['friendly', 'Morning']) with array it doesn't fit in our example

//bind
var bcaFriendly = bca.presentation.bind(bca, 'friendly');
bcaFriendly('morning');
bcaFriendly('night');
//similar to call but it doesn't immediately call the function it creates another one with preset arguments
