var React = require('react');
var PhotoImg = require('./PhotoImg.jsx');

var photoList = [
    {
        "id":1,
        "name": 1,
        "photoThumb1":"http://placehold.it/400x400"
    },
    {
        "id":2,
        "name": 2,
        "photoThumb1":"http://placehold.it/300x300"
    }
];

var Photos = React.createClass({
    render: function() {
        var photoStyles = {
            marginTop: '-55px',
            listStyleType: 'none',
            paddingLeft: 0
        };

        var photoImgs = photoList.map(function(item) {
            return (
                <li>
                    <PhotoImg key={item.id} img1={item.photoThumb1} />
                </li>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <ul style={photoStyles} className="panel panel-default">
                            <div className="panel-body">
                            {photoImgs}
                            {/*<PhotoImg text={this.props.srcImg} />*/}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Photos;
