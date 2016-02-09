var React = require('react');

var SocialListItem = React.createClass({
    render: function() {
        var socialLI = {
            display: 'inline'
        };
        var socialIcons = {
            width: '32px',
            float: 'right',
            marginLeft: '20px'
        };
        
        return (
            <li style={socialLI}>
                <a href={this.props.url}>
                    <img src={this.props.src} style={socialIcons} />
                </a>
            </li>
        );
    }
});

module.exports = SocialListItem;
