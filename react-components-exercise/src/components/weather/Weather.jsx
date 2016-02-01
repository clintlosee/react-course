var React = require('react');
var WeatherLocation = require('./WeatherLocation.jsx');
var WeatherTemp = require('./WeatherTemp.jsx');

var Weather = React.createClass({
    render: function() {
        divStyles = {
            color: '#FFF'
        };

        if (this.props.bgColor) {
            divStyles.background = this.props.bgColor;
        }

        return (
            <div style={divStyles} className="panel panel-default">
                <div className="panel-body">
                    <WeatherTemp text={this.props.temp} />
                    <WeatherLocation text={this.props.location} />
                </div>
            </div>
        );
    }
});

module.exports = Weather;
