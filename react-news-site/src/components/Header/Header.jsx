var React = require('react');
var HeaderTitle = require('./HeaderTitle.jsx');
var HeaderSubTitle = require('./HeaderSubTitle.jsx');

var Header = React.createClass({
    render: function() {
        var headerStyles = {
            background: "#1C86EE",
            color: "#ffffff",
            minHeight: '200px'
        };
        var socialUL = {
            marginTop: '20px'
        }
        var socialLI = {
            display: 'inline'
        };
        var socialIcons = {
            width: '32px',
            float: 'left',
            marginRight: '20px'
        };

        return (
            <div style={headerStyles}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-4">
                            <HeaderTitle text={this.props.title} />
                            <HeaderSubTitle text={this.props.subtitle} />
                        </div>
                        <div className="col-xs-4 pull-right">
                            <ul style={socialUL}>
                                <li style={socialLI}><img src="img/fb-icon.png" style={socialIcons} /></li>
                                <li style={socialLI}><img src="img/twitter-icon.png" style={socialIcons} /></li>
                                <li style={socialLI}><img src="img/instagram-icon.png" style={socialIcons} /></li>
                                <li style={socialLI}><img src="img/youtube-icon.png" style={socialIcons} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;
