//filter
//var arr = [1,2,3,4];
/* arr.filter(function(val, index, array){
     return val > 2;
   });
  function filter(array, callback){
    newArr = [];
    for (var i = 0; i < array.length; i++) {
      if(callback(array[i], i, array)){
        newArr.push(array[i]);
      }
    }
    return newArr;
}
*/

//filterByValue
function filterByValue(arr, key){
  return arr.filter(function(val){
      return val[key] !== undefined;
  })
};
console.log(filterByValue([{first: 'Elie', last:"Schoppik"},
{first: 'Tim', last:"Garcia", isCatOwner: true},
{first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}],
 'isCatOwner'));
//find
function find(arr, searchValue){
  return arr.filter(function(val){
    return val === searchValue;
  })[0]
}
console.log(find([1,2,3,4,5], 3));
console.log(find([1,2,3,4,5], 10));
//findInObj
function findInObj(arr, key, searchValue){
  return arr.filter(function(val){
    return val[key] === searchValue;
  })[0]
}
console.log(findInObj([{first: 'Elie', last:"Schoppik"},
{first: 'Tim', last:"Garcia", isCatOwner: true},
{first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}],
'isCatOwner',true));
//removeVowels
function removeVowels(str){
  var vowels = 'aeuio';
  return str.toLowerCase().split("").filter(function(val){
    return vowels.indexOf(val) === -1;
  }).join('')
}
console.log(removeVowels('Elie'));
//doubleOddNumbers
function doubleOddNumbers(arr){
  return arr.filter(function(val){
    return val%2 !== 0;
  }).map(function(val){
    return val*2;
  })
}
console.log(doubleOddNumbers([1,2,3,4,5]));
