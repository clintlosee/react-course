var React = require('react');

var Button = React.createClass({
    btnType: function(t) {
        switch (t) {
            case 'number':
                return "btn-primary";
                break;
            case 'info':
                return "btn-info";
                break;
            case 'clear':
                return "btn-danger";
                break;
            case 'eval':
                return "btn-success";
                break;
            default:
                return "btn-primary";
        }
    },
    render: function() {
        return (
            <div className="col-xs-3">
                <button id={this.props.type} className={"btn btn-raised " + this.btnType(this.props.type)} onClick={this.props.onClick}>{this.props.value}</button>
            </div>
        );
    }
});

module.exports = Button;
