var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var CreateHistory = require('history/lib/createHashHistory');
var IndexRoute = ReactRouter.IndexRoute;

var History = new CreateHistory({
    queryKey: false
});

var Base = require('./components/Base.jsx');
var WeatherApp = require('./components/WeatherApp.jsx');

var Routes = React.createClass({
    render: function() {
        return (
            <Router history={History}>
                <Route path="/" component={Base} >
                    <IndexRoute component={WeatherApp} />
                    {/*<Route path="/weather" component={WeatherApp} />*/}
                </Route>
            </Router>
        );
    }
});

module.exports = Routes;
