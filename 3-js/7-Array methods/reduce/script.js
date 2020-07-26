//reduce
/*
var arr =[1,2,3];
arr.reduce(function(accumulator, nextValue, index, array){
  return accumulator + nextValue;
}, optionalSecondParameter);
//6
*/

//extractValue
var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
function extractValue(arr, key){
  return arr.reduce(function(acc, nVal){
    acc.push(nVal[key]);
    return acc;
  },[]);
}
console.log(extractValue(arr,'name')); // ['Elie', 'Tim', 'Matt', 'Colt']

//vowelCount
function vowelCount(str){
  var vowels ="aeuio";
  return str.toLowerCase().split('').reduce(function(acc, nVal){
    if(vowels.indexOf(nVal) !== -1){
      if(acc[nVal]){
        acc[nVal]++;
      } else {
        acc[nVal] = 1;
      }
    }
    return acc;
  }, {});
}
console.log(vowelCount('I Am awesome and so are you'));

//addKeyAndValue
var arr2 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function addKeyAndValue(arr, key, value){
  return arr.reduce(function(acc, nVal, id){
    acc[id][key] = value;
    return acc;
  },arr);
}
console.log(addKeyAndValue(arr2, 'title', 'Instructor'));

//partition
function partition(arr, callback){
  return arr.reduce(function(acc, nVal){
    if(callback(nVal)) {
      acc[0].push(nVal);
    } else {
      acc[1].push(nVal);
    }
    return acc;
  },[[],[]])
}
//////
function isEven(val){
    return val % 2 === 0;
}
var arr3 = [1,2,3,4,5,6,7,8];
/////
console.log(partition(arr3,isEven));
