var React = require('react');
var Header = require('./Header/Header.jsx');

var Base = React.createClass({
    render: function() {
        return (
            <div>
                <Header title="Country News" subtitle="Top stories in my country" />
                {this.props.children}
            </div>
        );
    }
});

module.exports = Base;
