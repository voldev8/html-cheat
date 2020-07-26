//////////////Ajax\\\\\\\\
//request and fetch (fetch is more modern)
function getWeather(woeid) {
  fetch('https://www.metaweather.com/api/location/${woeid}/')
    .then((result) => {
      console.log(result);
      return result.json(); //converting json to javascript
    })
    .then((data) => {
      //console.log(data); //prints the json
      const today = data.consolidated_weather[0];
      console.log(`temperatures in ${data.title} stay between
      ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch((error) => {
      console.log(error);
    });
}
getWeather(2487956);

//fetch with await/async
async function getWeatherAw(woeid) {
  //tries if there is an error
  try {
    const result = await fetch(
      'https://www.metaweather.com/api/location/${woeid}/'
    );
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    alert(error);
  }
}
getWeatherAw();

let dataCity;
getWeatherAw(someNumber).then((data) => {
  dataCity = data;
  console.log(dataCity);
});
