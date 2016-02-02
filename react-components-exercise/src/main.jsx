var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('./components/weather/Weather.jsx');
var Highlight = require('./components/highlight/Highlight.jsx');

ReactDOM.render(<Highlight value="20" label="New followers added this month" />, document.getElementById('highlight-one'));
ReactDOM.render(<Highlight value="$1250" label="Average Monthly Income" />, document.getElementById('highlight-two'));
ReactDOM.render(<Highlight value="$13865" label="Yearly Income Goal" />, document.getElementById('highlight-three'));

ReactDOM.render(<Weather temp="12" location="Salt Lake City" bgColor="#FF6600" />, document.getElementById('weather'));
