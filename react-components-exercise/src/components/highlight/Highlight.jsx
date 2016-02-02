var React = require('react');
var HighlightLabel = require('./HighlightLabel.jsx');
var HighlightValue = require('./HighlightValue.jsx');

var Highlight = React.createClass({
    render: function() {
        var divStyles = {

        };

        return (
            <div className="col-sm-4">
                <div style={divStyles} className="panel panel-default">
                    <div className="panel-body">
                        <HighlightValue text={this.props.value} />
                        <HighlightLabel text={this.props.label} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Highlight;
