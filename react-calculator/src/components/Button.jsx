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
        var btnStyle = {
            padding: '20px',
            width: '100%'
        };
        var colStyle = {
            padding: '0',
            border: '1px solid #666'
        };
        return (
            <div className="col-xs-3" style={colStyle}>
                <button style={btnStyle} id={this.props.type} className={"btn " + this.btnType(this.props.type)} onClick={this.props.onClick}>{this.props.value}</button>
            </div>
        );
    }
});

module.exports = Button;
