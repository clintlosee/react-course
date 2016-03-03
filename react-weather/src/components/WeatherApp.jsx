var React = require('react');
var HTTP = require('../services/httpserver');

var WeatherApp = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        HTTP.get('').then(function(data) {
            this.setState({weather: data});
        }.bind(this));
    },
    render: function() {
        return (

        );
    }
});

module.exports = WeatherApp;
