var React = require('react');
var HTTP = require('../services/httpserver');
var TodayWeatherBox = require('./TodayWeatherBox.jsx');
var SearchBox = require('./SearchBox.jsx');
var ForecastWeatherBox = require('./ForecastWeatherBox.jsx');

var WeatherApp = React.createClass({
    getInitialState: function(){
        return({
            lat: "",
            lon: "",
            search: "",
            weather: null,
            units: "imperial",
            loading: true,
            location: this.props.location || "American Fork"
        });
    },
    handleSearch: function(search) {
        //Send a request to OpenWeatherAPI with search criteria
        HTTP.get(search + '&units=' + this.state.units).then(function(data){
            this.setState({weather: data, search: search, loading: false});
        }.bind(this));

        HTTP.getDaily(search + '&units=' + this.state.units).then(function(data){
            this.setState({dailyWeather: data, loading: false});
        }.bind(this));
    },
    componentDidMount: function(){
        //Send a request to OpenWeatherAPI with the default city "Salt Lake City"
        HTTP.get(this.state.location + '&units=' + this.state.units).then(function(data){
            this.setState({weather: data, loading: false});
        }.bind(this));
    },
    componentWillMount: function() {
        HTTP.getDaily(this.state.location + '&units=' + this.state.units).then(function(data){
            this.setState({dailyWeather: data, loading: false});
        }.bind(this));
    },
    render: function() {
        var boxStyle = {};

        if (this.props.bgColor) {
            boxStyle.background = this.props.bgColor;
        } else {
            boxStyle.background = '#79b8af';
        }
        // tempList={this.state.weather.list}
        return (
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <div className="col-sm-12" style={boxStyle}>
                        <SearchBox onSearch={this.handleSearch} />
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
                    <div className="col-sm-12">
                        {(() => {
                        if (this.state.dailyWeather) {
                            return (
                                <div>
                                    <ForecastWeatherBox 
                                        tempList={this.state.dailyWeather.list}
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
