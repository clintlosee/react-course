var React = require('react');
var ForecastWeatherBoxItem = require('./ForecastWeatherBoxItem.jsx');
var forecastStyle = require('../styles').forecastStyle;

var ForecastWeatherBox = React.createClass({
  render: function() {
    var forecastWeatherBoxItem = this.props.tempList.map(function(item, key) {
      return (
        <ForecastWeatherBoxItem 
          key={key}
          units={item.units}
          date={item.dt}
          minTemp={item.temp.min}
          maxTemp={item.temp.max}
          icon={item.weather[0].icon}
        />
      );
    });

    return (
        <div className="row">
          <ul className="list-group" style={forecastStyle}>
            {forecastWeatherBoxItem.slice(1,6)}
          </ul>
        </div>
    );
  }
});

module.exports = ForecastWeatherBox;
