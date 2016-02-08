var React = require('react');

var HeaderSubTitle = React.createClass({
    render: function() {
        return (
            <h4>{this.props.text || "Top stories in my country"}</h4>
        );
    }
});

module.exports = HeaderSubTitle;
