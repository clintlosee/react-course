var React = require('react');
var forecastIconStyle = require('../styles').forecastIconStyle;

var ForecastWeatherBoxItem = React.createClass({
  iconImage: function(iconNumber) {
      var icon = 'wi ';
      switch(iconNumber) {
          case '01d': // day clear-sunny
              return icon += 'wi-day-sunny';
              break;
          case '01n': // night clear
              return icon += 'wi-night-clear';
              break;
          case '02d': // day few clouds
              return icon += 'wi-cloudy';
              break;
          case '02n': // night few clouds
              return icon += 'wi-cloudy';
              break;
          case '03d': // day broken clouds
              return icon += 'wi-day-cloudy';
              break;
          case '03n': // night broken clouds
              return icon += 'wi-night-alt-cloudy';
              break;
          case '04d': // day broken clouds
              return icon += 'wi-day-cloudy';
              break;
          case '04n': // night broken clouds
              return icon += 'wi-night-alt-cloudy';
              break;
          case '09d': // day shower rain
              return icon += 'wi-day-showers';
              break;
          case '09n': // night shower rain
              return icon += 'wi-night-alt-showers';
              break;
          case '10d': // day rain
              return icon += 'wi-day-rain';
              break;
          case '10n': // night rain
              return icon += 'wi-night-alt-rain';
              break;
          case '11d': // day thunderstorm
              return icon += 'wi-day-thunderstorm';
              break;
          case '11n': // night thunderstorm
              return icon += 'wi-night-alt-thunderstorm';
              break;
          case '13d': // day snow
              return icon += 'wi-day-snow';
              break;
          case '13n': // night snow
              return icon += 'wi-night-alt-snow';
              break;
          case '50d': // day Haze/mist
              return icon += 'wi-day-haze';
              break;
          case '50n': // night haze/mist
              return icon += 'wi-night-fog';
              break;
          default:
              break;
      }
  },
  dateFormat: function(time) {
    var date = new Date(time * 1000);
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthString = month[date.getMonth()];
    return date.getDate() + ' ' + monthString;
  },
  render: function() {
    var listStyle = {
      listStyleType: 'none',
      padding: '20px 0',
      lineHeight: '0',
      borderRight: '1px solid #999',
      borderLeft: '1px solid #999',
      borderBottom: '1px solid #999',
    };
    return (
        <li className="" style={listStyle}>
          <div className="col-xs-4 text-center">
            {this.dateFormat(this.props.date)}
          </div>
          <div className="col-xs-4 text-center">
            <i className={this.iconImage(this.props.icon)} style={forecastIconStyle}></i>
          </div>
          <div className="col-xs-4 text-center">
            {Math.round(this.props.minTemp)}° / {Math.round(this.props.maxTemp)}°
          </div>
        </li>
    );
  }
});

module.exports = ForecastWeatherBoxItem;