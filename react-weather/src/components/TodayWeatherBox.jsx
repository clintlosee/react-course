var React = require('react');

var TodayWeatherBox = React.createClass({
    tempUnit: function(unit) {
        if (unit === 'metric') {
            return '°C';
        } else if (unit === 'imperial') {
            return '°F';
        }
    },
    render: function() {
        var textStyle = {
            color: '#FFF',
            // textShadow: '0 1px 1px #000'
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
                    <div className="col-xs-12 text-center" style={textStyle}>
                        <div className="col-xs-5 col-xs-offset-4">
                            <h1>{Math.round(this.props.temp)} {this.tempUnit(this.props.units)}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodayWeatherBox;
