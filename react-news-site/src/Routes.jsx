var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
    queryKey: false
});

var Base = require('./components/Base.jsx');
var News = require('./components/News/News.jsx');
var Photos = require('./components/Photos/Photos.jsx');

var Routes = React.createClass({
    render: function() {
        return (
            <Router history={History}>
                <Route path="/" component={Base} >
                    <Route path="/news" component={News} />
                    <Route path="/photos" component={Photos} />
                </Route>
            </Router>
        );
    }
});

module.exports = Routes;
