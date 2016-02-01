var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText: ''};
    },
    handleSubmit: function(e) {
        e.preventDefault();

        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText: ''});
    },
    onChange: function(e) {
        this.setState({newItemText: e.target.value});
    },
    render: function() {

        var mainStyles = {
            marginTop: 10
        };
        var headerStyle = {};

        if (this.props.headingColor) {
            headerStyle.background = this.props.headingColor;
        }

        return (
            <div style={mainStyles} className="col-sm-4">
                <div className="panel panel-primary">
                    <div style={headerStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-xs-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-xs-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
