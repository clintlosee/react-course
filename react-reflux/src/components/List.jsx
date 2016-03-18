var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions');
var IngredientStore = require('../reflux/ingredients-store');

var List = React.createClass({
    mixins: [Reflux.listenTo(IngredientStore, 'onChange')],
    getInitialState: function() {
        return {ingredients:[]};
    },
    componentWillMount: function() {
        Actions.getIngredients();
    },
    onChange: function(event, data) {
        this.setState({ingredients: data});
    },
    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
