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
            default:
                break;
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
            </div>
        );
    }
});

module.exports = TodayWeatherBox;
