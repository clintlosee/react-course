var React = require('react');

var PanelLabel = React.createClass({
    render: function() {
        return (
            <p className="">{this.props.text}</p>
        );
    }
});

module.exports = PanelLabel;
