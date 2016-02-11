var React = require('react');
var NewsListTitle = require('./NewsListTitle.jsx');
var NewsListSubtitle = require('./NewsListSubtitle.jsx');
var NewsListContent = require('./NewsListContent.jsx');
var NewsListIcon = require('./NewsListIcon.jsx');
var NewsPhoto = require('./NewsPhoto.jsx');

var NewsList = React.createClass({
    render: function() {
        var panelStyles = {
            marginTop: "-65px"
        };
        // var Photos = this.props.photos;
        // console.log(Photos);
        // var photoThumbs = Photos.map(function(item) {
        //     return (
        //         <div>
        //             <NewsPhoto key={item.id} photo1={item.photo1} />
        //             <NewsPhoto key={item.id} photo2={item.photo2} />
        //         </div>
        //     );
        // });
        var photo1, photo2;
        if (this.props.photo1) {
            photo1 = <NewsPhoto text={this.props.photo1} />
        }
        if (this.props.photo2) {
            photo2 = <NewsPhoto text={this.props.photo2} />
        }

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
                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2">
                            {/*<NewsPhoto text={this.props.photo1} />
                            <NewsPhoto text={this.props.photo2} />*/}
                            {/*{photoThumbs}*/}
                            {photo1}
                            {photo2}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
});

module.exports = NewsList;
