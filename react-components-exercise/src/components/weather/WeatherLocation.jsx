var React = require('react');

var WeatherLocation = React.createClass({
    render: function() {
        return (
            <p className="text-center">{this.props.text}</p>
        );
    }
});

module.exports = WeatherLocation;
