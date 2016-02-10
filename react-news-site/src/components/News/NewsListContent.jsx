var React = require('react');

var NewsListContent = React.createClass({
    render: function() {
        return (
            <p>{this.props.text}</p>
        );
    }
});

module.exports = NewsListContent;
