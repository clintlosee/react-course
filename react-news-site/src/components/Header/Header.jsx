var React = require('react');
var HeaderTitle = require('./HeaderTitle.jsx');
var HeaderSubTitle = require('./HeaderSubTitle.jsx');
var SocialListItem = require('./SocialIcons.jsx');
var Link = require('react-router').Link;

var socialIcons = [
    {"id":1, "src":"img/youtube-icon.png", "url":"http://youtube.com"},
    {"id":2, "src":"img/instagram-icon.png", "url":"http://instagram.com"},
    {"id":3, "src":"img/twitter-icon.png", "url":"http://twitter.com"},
    {"id":4, "src":"img/fb-icon.png", "url":"http://facebook.com"}
];

var Header = React.createClass({
    render: function() {
        var headerStyles = {
            background: "#1C86EE",
            color: "#ffffff",
            minHeight: '200px'
        };
        var socialUL = {
            marginTop: '20px'
        };
        var navStyles = {
            fontSize: '1.3em',
            position: 'relative',
            paddingBottom: '25px'
        };
        var textColor = {
            color: '#FFF'
        };

        var socialListItems = socialIcons.map(function(item) {
            return (
                <SocialListItem key={item.id} src={item.src} url={item.url} />
            );
        });

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
                                {socialListItems}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 pull-right">
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
