var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var IngredientStore = require('../reflux/ingredients-store');

var List = React.createClass({
    mixins: [Reflux.listenTo(IngredientStore, 'onChange')],
    getInitialState: function() {
        return {
            ingredients:[],
            newText: ''
        };
    },
    componentWillMount: function() {
        Actions.getIngredients();
    },
    onChange: function(event, data) {
        this.setState({ingredients: data});
    },
    onInputChange: function(e) {
        this.setState({newText: e.target.value});
    },
    onClick: function(e) {
        if (this.state.newText) {
            Actions.postIngredient(this.state.newText);
        }

        this.setState({newText: ''});
    },
    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (
            <div>
                <input
                    placeholder='Add Item' 
                    value={this.state.newText} 
                    onChange={this.onInputChange} />
                <button onClick={this.onClick}>Add Item</button>
                <ul>{listItems}</ul>
            </div>
        );
    }
});

module.exports = List;
