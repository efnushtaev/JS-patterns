//
// It is using for creating new objects
//

// ES6
class Weather {
  constructor(temperature, wind) {
    this.temperature = temperature;
    this.wind = wind;
    this.whatIsTheWeather = function () {
      return console.log(`Temp: ${temperature} grad. Wind: ${wind} m/s`);
    };
  }
}

// Old JS
function WeatherOld(temperature, wind) {
  this.temperature = temperature;
  this.wind = wind;
  this.whatIsTheWeather = function () {
    return console.log(`Temp: ${temperature} grad. Wind: ${wind} m/s`);
  };
}

const cold = new Weather("-12", "15");
const warm = new WeatherOld("24", "3");

cold.whatIsTheWeather();
warm.whatIsTheWeather();
