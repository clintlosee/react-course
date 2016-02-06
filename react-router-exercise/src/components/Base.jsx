var React = require('react');
var Link = require('react-router').Link;

var Base = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Header</h1>
                <p><Link to={'/page1'}>Page1</Link></p>
                <p><Link to={'/page2'}>Page2</Link></p>
                {this.props.children}
                <h2>Footer</h2>
            </div>
        );
    }
});

module.exports = Base;
