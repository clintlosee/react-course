var React = require('react');

var NewsListIcon = React.createClass({
    render: function() {
        var iconStyles = {
            width: '65px',
            marginTop: '50%'
        };

        return (
            <div className="col-xs-6 col-xs-offset-3">
                <img src={this.props.text} style={iconStyles} />
            </div>
        );
    }
});

module.exports = NewsListIcon;
