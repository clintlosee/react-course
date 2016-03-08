var React = require('react');
var ReactDOM = require('react-dom');
// var Routes = require('./Routes.jsx'); // If I want to do any routing
var WeatherApp = require('./components/WeatherApp.jsx');

// ReactDOM.render(<Routes />, document.getElementById('app'));
ReactDOM.render(<WeatherApp bgColor="#ec4444" />, document.getElementById('app'));
