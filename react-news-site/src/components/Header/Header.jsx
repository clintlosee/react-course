var React = require('react');
var HeaderTitle = require('./HeaderTitle.jsx');
var HeaderSubTitle = require('./HeaderSubTitle.jsx');

var Header = React.createClass({
    render: function() {
        var headerStyles = {
            background: "#1C86EE",
            color: "#ffffff"
        }

        return (
            <div style={headerStyles}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-4">
                            <HeaderTitle text={this.props.title} />
                            <HeaderSubTitle text={this.props.subtitle} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;
