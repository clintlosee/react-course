var React = require('react');
var HeaderTitle = require('./HeaderTitle.jsx');
var HeaderSubTitle = require('./HeaderSubTitle.jsx');
var Link = require('react-router').Link;

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
            float: 'right',
            marginLeft: '20px'
        };
        var navStyles = {
            fontSize: '1.3em'
        };
        var textColor = {
            color: '#FFF'
        }

        return (
            <div style={headerStyles}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-4">
                            <HeaderTitle text={this.props.title} />
                            <HeaderSubTitle text={this.props.subtitle} />
                        </div>
                        <div className="col-xs-4 col-xs-offset-4 pull-right">
                            <ul style={socialUL}>
                                <li style={socialLI}>
                                    <a href="http://youtube.com"><img src="img/youtube-icon.png" style={socialIcons} /></a>
                                </li>
                                <li style={socialLI}>
                                    <a href="http://instagram.com"><img src="img/instagram-icon.png" style={socialIcons} /></a>
                                </li>
                                <li style={socialLI}>
                                    <a href="http://twitter.com"><img src="img/twitter-icon.png" style={socialIcons} /></a>
                                </li>
                                <li style={socialLI}>
                                    <a href="http://facebook.com"><img src="img/fb-icon.png" style={socialIcons} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 pull-right">
                            <nav className="navbar">
                                <ul className="nav navbar-nav navbar-right" style={navStyles}>
                                    <li><Link to={'/news'} style={textColor}>News</Link></li>
                                    <li><Link to={'/photos'} style={textColor}>Photos</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;
