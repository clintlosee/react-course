var React = require('react');
var Link = require('react-router').Link;
var Header = require('./Header/Header.jsx');

var Base = React.createClass({
    render: function() {
        return (
            <div>
                <Header title="Country News" subtitle="Top stories in my country" />
                <p><Link to={'/news'}>News</Link></p>
                <p><Link to={'/photos'}>Photos</Link></p>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Base;
