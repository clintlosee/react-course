var React = require('react');

var PanelValue = React.createClass({
    render: function() {
        return (
            <h2>{this.props.text}</h2>
        );
    }
});

module.exports = PanelValue;
