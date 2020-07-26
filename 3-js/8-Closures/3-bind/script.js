//bind
function addNumbers(a,b,c,d) {
  return this.firstName + ' just calculated ' + (a+b+c+d);
}
var damon = {
  firstName: 'Damon'
}
//bind returns a new function with 'this' bound already
var damonCalc = addNumbers.bind(damon,1,2,3,4);
console.log(damonCalc());
var damonCalc2 = addNumbers.bind(damon,1,2);
console.log(damonCalc2());//NaN
console.log(damonCalc2(3,4));//gives you the result it continues where bind left of

var jason = {
  firstName: 'Jason',
  sayHi: function() {
    setTimeout(function(){
      console.log('Hi '+ this.firstName);//this refers to because setTimeout is window function
    }.bind(this), 1000);//this is how we fix it
  }
}
jason.sayHi();
