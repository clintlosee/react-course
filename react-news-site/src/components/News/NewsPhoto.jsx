var React = require('react');

var NewsPhoto = React.createClass({
    render: function() {
        var imageStyle = {
            maxWidth: '100%',
            boxShadow: '0 1px 10px #333',
            borderRadius: '5px'
        };

        return (
            <div className="col-xs-3">
                <img src={this.props.text} className="" style={imageStyle}/>
            </div>
        );
    }
});

module.exports = NewsPhoto;
