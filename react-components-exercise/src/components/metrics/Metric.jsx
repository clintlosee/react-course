var React = require('react');
var MetricValue = require('./MetricValue.jsx');
var MetricLabel = require('./MetricLabel.jsx');

var Metric = React.createClass({
    render: function() {
        var divStyles = {

        }

        if (this.props.bgColor) {
            divStyles.background = this.props.bgColor;
            divStyles.color = '#FFF';
        }

        return (
            <div className="panel panel-default">
                <div style={divStyles} className="panel-heading">
                    <MetricLabel text={this.props.label} />
                    <MetricValue text={this.props.value} />
                </div>
                <div className="panel-body">&nbsp;</div>
            </div>
        );
    }
});

module.exports = Metric;
