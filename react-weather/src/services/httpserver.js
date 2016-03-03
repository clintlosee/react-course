var Fetch = require('whatwg-fetch');
var baseUrl = "api.openweathermap.org/data/2.5/";
var apiKey = "&appid=4a6668c79e08aefe81682b49d635b757";

var service = {
    get: function(url) {
        return fetch(baseUrl + url + apiKey)
        .then(function(res) {
            return res.json();
        });
    }
};

module.exports = service;
