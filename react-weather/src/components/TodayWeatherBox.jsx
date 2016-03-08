var React = require('react');

var TodayWeatherBox = React.createClass({
    tempUnit: function(unit) {
        var deg = '&deg;';
        if (unit === 'metric') {
            return '°';
        } else if (unit === 'imperial') {
            return '°';
        }
    },
    iconImage: function(iconNumber) {
        var icon = 'wi ';
        switch(iconNumber) {
            case '01d': // day clear-sunny
                return icon += 'wi-day-sunny';
                break;
            case '01n': // night clear
                return icon += 'wi-night-clear';
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
    windCalc: function(wind) {
        var windObj = {
            direction: '',
            class: ''
        };

        if (wind >= 0 && wind <= 22.5) {
            //North
            windObj.direction = 'North';
            windObj.class = 'wi wi-wind wi-towards-n';
        } else if (wind > 22.5 && wind <= 45) {
            //Northeast
            windObj.direction = 'Northeast';
            windObj.class = 'wi wi-wind wi-towards-ne';
        } else if (wind > 45 && wind <= 135) {
            //East
            windObj.direction = 'East';
            windObj.class = 'wi wi-wind wi-towards-e';
        } else if (wind > 135 && wind <= 157.5) {
            //Southeast
            windObj.direction = 'Southeast';
            windObj.class = 'wi wi-wind wi-towards-se';
        } else if (wind > 157.5 && wind <= 180) {
            //South
            windObj.direction = 'South';
            windObj.class = 'wi wi-wind wi-towards-s';
        } else if (wind > 180 && wind <= 202.5) {
            //Southwest
            windObj.direction = 'Southwest';
            windObj.class = 'wi wi-wind wi-towards-sw';
        } else if (wind > 202.5 && wind <= 337.5) {
            //West
            windObj.direction = 'West';
            windObj.class = 'wi wi-wind wi-towards-w';
        } else if (wind > 337.5 && wind <= 360) {
            //Northwest
            windObj.direction = 'Northwest';
            windObj.class = 'wi wi-wind wi-towards-nw';
        }

        return windObj;
    },
    speedUnit: function(unit) {
        var deg = '&deg;';
        if (unit === 'metric') {
            return 'm/s';
        } else if (unit === 'imperial') {
            return 'mph';
        }
    },
    render: function() {
        var textStyle = {
            color: '#FFF',
            // textShadow: '0 1px 1px #000'
        };
        var iconStyle = {
            fontSize: '7em',
            marginTop: '15px',
            marginBottom: '10px'
        };
        var tempStyle = {
            fontSize: '6em',
            fontWeight: 'bold'
        };
        var rowStyle = {
            marginTop: '20px',
            marginBottom: '20px'
        };
        var windStyle = {
            fontSize: '2em',
            paddingRight: '10px'
        };

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12" style={textStyle}>
                        <div className="col-xs-6">
                            <h5 className="pull-left">{this.props.city}, {this.props.country}</h5>
                        </div>
                        <div className="col-xs-6">
                            <h5 className="pull-right">{this.props.iconDesc}</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 text-center" style={$.extend({}, textStyle, rowStyle)}>
                        <div className="col-xs-2 col-xs-offset-1">
                            <i className={this.iconImage(this.props.icon)} style={iconStyle}></i>
                        </div>
                        <div className="col-xs-6 col-xs-offset-3">
                            <h1 style={tempStyle}>{Math.round(this.props.temp)}{this.tempUnit(this.props.units)}</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 text-center" style={$.extend({}, textStyle, rowStyle)}>
                        <div className="col-xs-6">
                            <i className={this.windCalc(this.props.windAngle).class} style={windStyle}></i>
                            <span>{this.windCalc(this.props.windAngle).direction}</span>
                        </div>
                        <div className="col-xs-6">
                            <i className="wi wi-strong-wind" style={windStyle}></i>
                            <span>{Math.round(this.props.windSpeed)}{this.speedUnit(this.props.units)}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodayWeatherBox;
