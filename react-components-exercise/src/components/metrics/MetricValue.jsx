var React = require('react');

var MetricValue = React.createClass({
    render: function() {
        var valueStyles = {
            marginTop: 0
        }

        return (
            <h2 className="text-left" style={valueStyles}>{this.props.text}</h2>
        );
    }
});

module.exports = MetricValue;
