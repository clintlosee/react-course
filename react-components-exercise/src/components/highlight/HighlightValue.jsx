var React = require('react');

var HighlightValue = React.createClass({
    render: function() {
        return (
            <h2 className="text-center">{this.props.text}</h2>
        );
    }
});

module.exports = HighlightValue;
