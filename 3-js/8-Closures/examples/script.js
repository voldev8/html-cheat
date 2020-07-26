/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/
function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject);
}
var divs = document.getElementsByTagName('divs');
console.log(arrayFrom(divs));

/*
// Write a function called sumEvenArguments which takes all of the arguments
passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/
function sumEvenArguments(){
  var newArg = [].slice.call(arguments);
  return newArg.reduce(function(acc, next){
    if(next%2 === 0){
      return acc + next;
    }
    return acc;
  }, 0)
}

/*
Write a function called invokeMax which accepts a function and a maximum amount.
invokeMax should return a function that when called increments a counter. If the
counter is greater than the maximum amount, the inner function should return "Maxed Out"

Examples:
    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/
function invokeMax(fn, num){
    var maxNum = 0;
    return function(){
      if(maxNum >= num) return 'Maxed Out!';
      maxNum++;
      return fn.apply(this,arguments)
    }
}

/*
Write a function called once which accepts two parameters, a function and a value
for the keyword 'this'. Once should return a new function that can only be invoked
once, with the value of the keyword this in the function set to be the second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined

    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }

    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined
*/
function once(fn, thisArg){
  var hasBeenCalled = false;
  return function(){
      if(!hasBeenCalled){
          hasBeenCalled = true;
          return fn.apply(thisArg, arguments)
      }
  }
}

/*
Write a function called bind which accepts a function and a value for the
keyword this. Bind should return a new function that when invoked, will invoke
the function passed to bind with the correct value of the keyword this. HINT -
if you pass more than two parameters to bind, those parameters should be included
as parameters to the inner function when it is invoked. You will have to make use
of closure!
Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }

    var person = {
        firstName: 'Elie'
    }

    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"

    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue"

    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg){
  var outerArgs = [].slice.call(arguments,2)
  return function(){
      var innerArgs = [].slice.call(arguments)
      var allArgs = outerArgs.concat(innerArgs)
      return fn.apply(thisArg, allArgs)
  }
}
