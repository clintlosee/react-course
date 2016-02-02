var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('./components/weather/Weather.jsx');
var Highlight = require('./components/highlight/Highlight.jsx');
var Metric = require('./components/metrics/Metric.jsx');

ReactDOM.render(<Highlight value="20" label="New followers added this month" />, document.getElementById('highlight-one'));
ReactDOM.render(<Highlight value="$1250" label="Average Monthly Income" />, document.getElementById('highlight-two'));
ReactDOM.render(<Highlight value="$13865" label="Yearly Income Goal" />, document.getElementById('highlight-three'));

ReactDOM.render(<Weather temp="12" location="Salt Lake City" bgColor="#FF6600" />, document.getElementById('weather'));

ReactDOM.render(<Metric label="New visitors" value="1.5k" bgColor="#0EBFE9" />, document.getElementById('metric-one'));
ReactDOM.render(<Metric label="Bounce Rate" value="50%" bgColor="#BA55D3" />, document.getElementById('metric-two'));
ReactDOM.render(<Metric label="Searches" value="28%" bgColor="#FF0000" />, document.getElementById('metric-three'));
ReactDOM.render(<Metric label="Traffic" value="140.5kb" bgColor="#4AC948" />, document.getElementById('metric-four'));
