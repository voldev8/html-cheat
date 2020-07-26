//forEach
//var arr = [4,8,12];
/*arr.forEach(function(val,index,array){
  console.log(val,index,array);
});

function forEach(arr, callback){
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i ,arr);
  }
}
*/
function doubleValues(arr){
  var doubleArr = [];
  arr.forEach(function(val){
    doubleArr.push(val*2);
  })
  return doubleArr;
}
console.log(doubleValues([1,2,3]));

function onlyEvenValues(arr){
  var evenArr =[];
  arr.forEach(function(val){
    if(val%2 === 0){
      evenArr.push(val);
    }
  })
  return evenArr;
};
console.log(onlyEvenValues([5,1,2,3,10]));

function showFirstAndLast(arr){
  var firstAndLastArr = [];
  arr.forEach(function(val){
    firstAndLastArr.push(val[0]+val[val.length-1])
  })
  return firstAndLastArr;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));

function addKeyAndValue(arr, key, value){
  arr.forEach(function(val){
    val[key]= value;
  })
  return arr;
}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

function vowelCount(str){
   var vowel = {};
   var strLow = str.toLowerCase().split("");
   var vowels = "aeuio";
   strLow.forEach(function(letter){
     if(vowels.indexOf(letter) !== -1){
       if(vowel[letter]){
         vowel[letter]++;
       } else {
         vowel[letter] = 1;
       }
     }
   });
   return vowel;
}
console.log(vowelCount('mIchael'));

var obj = {};
obj['length'] = 12;
console.log(obj);
