var React = require('react');

var NewsListSubtitle = React.createClass({
    render: function() {
        return (
            <h4>{this.props.text}</h4>
        );
    }
});

module.exports = NewsListSubtitle;
