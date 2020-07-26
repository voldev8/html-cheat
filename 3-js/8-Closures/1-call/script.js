//call
var person = {
  firstName: 'Jason',
  sayHi: function() {
    return 'Hi '+ this.firstName;
  },
  determineContext: function(){
    return this === person;
  },
  dog: {
    sayHi: function() {
      return 'Hi ' + this.firstName;
    },
    determineContext: function() {
      return this === person; //false
    }
  }
}
person.dog.sayHi.call(person);
person.dog.determineContext.call(person); //now it is true
////
var damon = {
  firstName: 'Damon'
}
person.sayHi.call(damon);
//////
function sayHello() {
  return 'Hello '+ this.firstName;
}
console.log(sayHello(damon));//Hello undefined
console.log(sayHello.call(damon)); // Hello Damon
//////
/*
var divs = document.getElementByTagName('div');
divs.filter // undefined
var divsArray = [].slice.call(divs);
divsArray.filter(function(val){
  return val.innerText === 'Hello'
}) //now you get a result
*/
