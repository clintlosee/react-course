var Reflux = require('reflux');
var Actions = require('./actions');
var HTTP = require('../services/httpservice');

var IngredientStore = Reflux.createStore({
  listenables: [Actions],
  getIngredients: function() {
    HTTP.get('/ingredients')
      .then(function(data) {
        this.ingredients = data;
        this.triggerUpdate();
      }.bind(this));
  },
  postIngredient: function(text) {
    if (!this.ingredients) {
      this.ingredients = [];
    }

    var ingredient = {
      'id': Math.floor(Date.now() / 1000) + text,
      'text': text
    }

    this.ingredients.push(ingredient);
    this.triggerUpdate();

    HTTP.post('/ingredients', ingredient)
      .then(function(res) {
        this.getIngredients();
      }.bind(this));
  },
  triggerUpdate: function() {
    this.trigger('change', this.ingredients);
  }
});

module.exports = IngredientStore;