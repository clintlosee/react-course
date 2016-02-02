var React = require('react');

var MetricLabel = React.createClass({
    render: function() {
        var labelStyles = {
            marginBottom: 0
        }

        return (
            <p className="text-left" style={labelStyles}>{this.props.text}</p>
        );
    }
});

module.exports = MetricLabel;
