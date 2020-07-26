//some
/*
var arr = [1,2,3];
arr.some(function(value, index, array){
  return val < 2;
})
//true
function some(array, callback){
  for (var i = 0; i < array.length; i++) {
    if(callback(array[i], i, array)){
      return true;
    }
  }
  return false;
}
*/

//every
/*
var arr = [1,2,3];
arr.every(function(value, index, array){
  return val < 2;
})
//false
function every(array, callback){
  for (var i = 0; i < array.length; i++) {
    if(callback(array[i], i, array) === false){
      return false;
    }
  }
  return true;
}
*/

//hasOddNumber
function hasOddNumber(arr){
  return arr.some(function(val){
    return val%2 !== 0;
  });
}
console.log(hasOddNumber([1,2,2,2,2,2,4]));

//hasAZero
function hasAZero(num){
  return num.toString(10).split("").some(function(val){
    return val === '0';
  });
}
console.log(hasAZero(12121210));
//hasOnlyOddNumbers
function hasOnlyOddNumbers(arr){
  return arr.every(function(val){
    return val%2 !== 0;
  });
}
console.log(hasOnlyOddNumbers([1,2,3,5,7]));
//hasNoDuplicates
function hasNoDuplicates(arr){
  return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}
console.log(hasNoDuplicates([1,2,3]));
//hasCertainKey
var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ];
function hasCertainKey(arr, key){
  return arr.every(function(val){
    return val[key];
  });
}
console.log(hasCertainKey(arr,'isCatOwner'));
//hasCertainValue
function hasCertainValue(arr, key, searchValue){
  return arr.every(function(val){
    return val[key] === searchValue;
  });
}
console.log(hasCertainValue(arr,'first','Elie'));
