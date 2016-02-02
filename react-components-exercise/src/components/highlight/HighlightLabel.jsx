var React = require('react');

var HighlightLabel = React.createClass({
    render: function() {
        return (
            <p className="text-center">{this.props.text}</p>
        );
    }
});

module.exports = HighlightLabel;
