var Reflux = require('reflux');
var HTTP = require('../services/HttpService');
var Actions = require('./Actions');

var EmailStore = Reflux.createStore({
  listenables: [Actions],
  submitEmail: function(subscriber) {
    HTTP.post('/subscribers', subscriber)
      .then(function(res) {
        var msg = "";
        if (res.status === 200) {
          msg = "Email submitted";
        } else {
          msg = "Submission failed";
        }
        this.trigger(msg);
      }.bind(this));
  }
});

module.exports = EmailStore;