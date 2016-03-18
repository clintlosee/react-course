var axios = require('axios');
var baseUrl = "http://api.openweathermap.org/data/2.5/forecast";
var apiKey = "&appid=4a6668c79e08aefe81682b49d635b757";
// var apiKey = '&appid=b1b15e88fa797225412429c1c50c122a';

function getForecast(url) {
  return axios.get(baseUrl + '?q=' + url + apiKey);
}

function getDailyWeather(url) {
  // return "got daily";
  return axios.get(baseUrl + '/daily?q=' + url + apiKey)
}

var service = {
    getAll: function(url) {
      return axios.all([getForecast(url), getDailyWeather(url)])
        .then(function(res) {
          console.log(res);
          return res;
        })
        .catch(function(err) {
          console.warn('Error getting all weather!', err);
        });
    },
    get: function(url) {
      return getForecast(url)
        .then(function(res) {
            return res.data;
        })
        .catch(function(err) {
          console.warn('Error getting forecast!', err);
        });
    },
    getDaily: function(url) {
      return getDailyWeather(url)
        .then(function(res) {
          return res.data;
        })
        .catch(function(err) {
          console.warn('Error getting daily weather!', err);
        });
    },

};

module.exports = service;