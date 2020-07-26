//LOOPS
//for loop
console.log('***for loop***');
for (var i = 0; i < johnArray.length; i++) {
  console.log(johnArray[i]);
}

//while loop
console.log('***while loop***');
var i = 0;
while (i < johnArray.length) {
  console.log(johnArray[i]);
  i++;
}

//continue and break statements
console.log('***continue***');
for (var i = 0; i < johnArray.length; i++) {
  //if not string skip
  if (typeof johnArray[i] !== 'string') continue;
  console.log(johnArray[i]);
}

console.log('***break***');
for (var i = 0; i < johnArray.length; i++) {
  //if not string stop
  if (typeof johnArray[i] !== 'string') break;
  console.log(johnArray[i]);
}
