var React = require('react');

var News = React.createClass({
    render: function() {
        var newsStyles = {
            marginTop: '-55px',
            background: '#FFF'
        };

        return (
            <div className="container">
                <div className="row" style={newsStyles}>
                    <div className="col-xs-12">
                        <h1>News</h1>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = News;
