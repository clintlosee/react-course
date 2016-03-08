var React = require('react');
var HTTP = require('../services/httpserver');
var TodayWeatherBox = require('./TodayWeatherBox.jsx');

var WeatherApp = React.createClass({
    getInitialState: function(){
        return({
            lat: "",
            lon: "",
            search: "",
            weather: null,
            units: "imperial",
            loading: true
        });
    },
    componentDidMount: function(){
        //Send a request to OpenWeatherAPI with the default city "Salt Lake City"
        HTTP.get('SaltLakeCity&units=' + this.state.units).then(function(data){
            this.setState({weather: data, loading: false});
            console.log(this.state.weather);
        }.bind(this));
    },
    render: function() {
        var boxStyle = {};

        if (this.props.bgColor) {
            boxStyle.background = this.props.bgColor;
        } else {
            boxStyle.background = '#79b8af';
        }

        return (
            <div className="row">
                <div className="col-sm-4">
                    <div className="col-sm-12" style={boxStyle}>
                        {(() => {
                        if (this.state.weather) {
                            return (
                                <div>
                                    <TodayWeatherBox
                                        city={this.state.weather.city.name}
                                        country={this.state.weather.city.country}
                                        iconDesc={this.state.weather.list[0].weather[0].description}
                                        icon={this.state.weather.list[0].weather[0].icon}
                                        iconID={this.state.weather.list[0].weather[0].id}
                                        date={this.state.weather.list[0].dt_txt}
                                        temp={this.state.weather.list[0].main.temp}
                                        windSpeed={this.state.weather.list[0].wind.speed}
                                        windAngle={this.state.weather.list[0].wind.deg}
                                        units={this.state.units}
                                    />
                                </div>
                            );
                        }
                        })()}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = WeatherApp;
