var React = require('react');

var HeaderSubTitle = React.createClass({
    render: function() {
        return (
            <h3>{this.props.text || "Top stories in my country"}</h3>
        );
    }
});

module.exports = HeaderSubTitle;
