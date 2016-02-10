var React = require('react');
var NewsListTitle = require('./NewsListTitle.jsx');
var NewsListSubtitle = require('./NewsListSubtitle.jsx');
var NewsListContent = require('./NewsListContent.jsx');
var NewsListIcon = require('./NewsListIcon.jsx');

var NewsList = React.createClass({
    render: function() {
        var panelStyles = {
            marginTop: "-65px"
        };

        return (
            <li className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-xs-2">
                            <NewsListIcon text={this.props.src} />
                        </div>
                        <div className="col-xs-10">
                            <NewsListTitle text={this.props.maintitle} />
                            <NewsListSubtitle text={this.props.subtitle} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2">
                            <NewsListContent text={this.props.content} />
                        </div>
                    </div>
                </div>
            </li>
        );
    }
});

module.exports = NewsList;
