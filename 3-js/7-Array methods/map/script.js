//map
/*
var arr = [1,2,3];
arr.map(function(val, index, array){
  return val*2;
})

 function map(arr, callback){
   var newArr = [];
   for (var i = 0; i < array.length; i++) {
     newArr.push(callback(arr[i], i, arr))
   }
   return newArr;
 }
*/

//doubleValues
function doubleValues(arr){
  return arr.map(function(val){
    return val*2;
  });
}
console.log(doubleValues([1,2,3]));
//valTimesIndex
function valTimesIndex(arr){
  return arr.map(function(val, index){
    return val*index;
  });
}
console.log(valTimesIndex([1,2,3]));
//extractKey
function extractKey(arr, key){
    return arr.map(function(val){
      return val[key];
    });
}
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));
var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log(arr[0]['name']);
//extractFullName
function extractFullName(arr){
    return arr.map(function(val){
      return val.first + ' ' + val.last;
    });
}
console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));
