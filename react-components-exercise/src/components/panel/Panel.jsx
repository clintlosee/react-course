var React = require('react');
var PanelLabel = require('./PanelLabel.jsx');
var PanelValue = require('./PanelValue.jsx');

var Panel = React.createClass({
    render: function() {
        var panelHeadingStyle = {
            height: 200,
            border: 'none'
        };
        var panelBodyStyle = {
            background: '#484d4d',
            color: '#FFF'
        }

        if (this.props.headerColor) {
            panelHeadingStyle.background = this.props.headerColor;
        }

        return (
            <div className="col-xs-12">
                <div className="panel panel-default">
                    <div className="panel-heading" style={panelHeadingStyle}></div>
                    <div className="panel-body" style={panelBodyStyle}>
                        <div className="col-xs-4 text-center">
                            <PanelValue text={this.props.val1} />
                            <PanelLabel text={this.props.label1} />
                        </div>
                        <div className="col-xs-4 text-center">
                            <PanelValue text={this.props.val2} />
                            <PanelLabel text={this.props.label2} />
                        </div>
                        <div className="col-xs-4 text-center">
                            <PanelValue text={this.props.val3} />
                            <PanelLabel text={this.props.label3} />
                        </div>
                    </div>
                </div>
            </div>
            );
    }
});

module.exports = Panel;
