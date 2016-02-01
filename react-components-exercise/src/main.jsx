var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('./components/weather/Weather.jsx');

ReactDOM.render(<Weather temp="12" location="Salt Lake City" bgColor="#FF6600" />, document.getElementById('weather'));
