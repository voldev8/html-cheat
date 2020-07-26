//////////////async\\\\\
/*
const second = () => {
  setTimeout(() => {
    console.log('no there is Async');
  }, 2000);   //gives two seconds delay
};
const first = () => {
    console.log('First');
  second();
  console.log('the end');
};
first();
*/

//////async with callbacks (old way)\\\\\\\\\\\\\
/*
function getRecipe() {
  setTimeout(() => {
    const recipeId = [123, 281, 234, 12];
    console.log(recipeId);

    setTimeout(id => {
      const recipe = {
        title: 'Pizza',
        publisher: 'Damon'
      };
      console.log(`${id}: ${recipe.title}`);

      setTimeout(id => {
        const recipe2 = {
          title: 'Pasta',
          publisher: 'John'
        };
        console.log(`${id}: ${recipe2.title}, publisher: ${recipe2.publisher}`);
      }, 1500, recipeId[2]);
    }, 1000, recipeId[1]); //it ll be 2500 ms; third argument is parameter for the function
  }, 1500);
};
getRecipe();
*/
/////////////promises (es6)\\\\\\\\\\\\

const getIds = new Promise((resolve, reject) => {
    setTimeout(()=>{ //settimeout can not be failed
      resolve([123, 281, 234, 12]);
    }, 1500);
});

const getRecipe = recId => {
  return new Promise((resolve, reject) => {
    setTimeout(id => {
      const recipe = {
        title: 'Pasta',
        publisher: 'Damon'
      };
      resolve(`${id}: ${recipe.title}`);
    }, 1500, recId)
  });
};
const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(pub => {
      const recipe = {
        title: 'Pizza',
        publisher: 'John'
      };
      resolve(`${pub}: ${recipe.title}`);
    }, 1500, publisher);
  });
};
/* /////then and catch\\\\\\
getIds
.then(ids => {    //this is for resolve
  console.log(ids);  //[123, 281, 234, 12]
  return getRecipe(ids[2]);
})
.then(recipe => {
  console.log(recipe); //getRecipe 234:Pasta
  return getRelated('John');
})
.then(recipe => {
  console.log(recipe); //getRelated John: Pizza
})
.catch(error => {  //this is for reject
  console.log(error);
});
*/

//////async-await\\\\\\\\\
//await can only be used with async function
//same thing as then catch on top
async function getrecipesAw() {
  const ids = await getIds; //first promise getIds line 44
  console.log(ids);
  const recipe = await getRecipe(ids[2]);
  console.log(recipe);
  const related = await getRelated('John');
  console.log(related);

  return recipe;
};
/*const rec = getrecipesAw(); // we ll get pending
console.log(rec);*/
getrecipesAw().then(result => { //but if you use then we ll get the result
  console.log(`${result} is the best ever!`);
});
