var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:8000';

var service = {
    get: function(url) {
        return fetch(baseUrl + url)
        .then(function(response) {
            return response.json();
        });
    },
    post: function(url, ingredient) {
      return fetch(baseUrl + url, {
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(ingredient)
      }).then(function(res) {
        return res;
      });
    }
};

module.exports = service;
