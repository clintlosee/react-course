var React = require('react');

var WeatherTemp = React.createClass({
    render: function() {
        return (
            <h2 className="text-center">{this.props.text}&#176;</h2>
        );
    }
});

module.exports = WeatherTemp;
