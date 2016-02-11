var React = require('react');
var NewsList = require('./NewsList.jsx');

var newsInfo = [
    {
        "id":1,
        "maintitle":"Obesity in America",
        "subtitle":"Why are Americans so fat?",
        "content":"Us Americans are fat. On every corner there is a McDonalds or KFC. Michelle Obama wants Americans to become Vegan. Civil war and unres have sprung up due to this debate...",
        "src":"img/close.svg",
        "photoThumb1":"http://placehold.it/300x300",
        "photoThumb2":"http://placehold.it/300x300",
        "photos": [
            {
                "photo1": "http://placehold.it/125x125",
                "photo2": "http://placehold.it/125x125"
            }
        ]
    },
    {
        "id":2,
        "maintitle":"UX Designer",
        "subtitle":"log | Smart Software Development. Great User Experience",
        "content":"Bacon ipsum dolor amet frankfurter fatback capicola tail, kielbasa meatloaf salami spare ribs prosciutto kevin chicken pastrami. Sausage salami strip steak, tongue tenderloin short loin shankle short ribs meatball swine. Boudin andouille porchetta corned beef shoulder beef ribs rump ham hock spare ribs, fatback sausage turkey chicken cow. Andouille tri-tip ball tip, rump tenderloin chuck sirloin pork short ribs chicken short loin.",
        "src":"img/bugherd.svg",
        "photoThumb1":"http://placehold.it/300x300",
        "photoThumb2":"http://placehold.it/300x300",
        "photos": [
            {
                "photo1": "http://placehold.it/150x150",
                "photo2": "http://placehold.it/150x150"
            }
        ]
    }
];

var News = React.createClass({
    render: function() {
        var newsStyles = {
            marginTop: '-55px',
            listStyleType: 'none',
            paddingLeft: 0
        };

        var newsListItems = newsInfo.map(function(item) {
            return (
                <NewsList key={item.id} src={item.src}
                    maintitle={item.maintitle} subtitle={item.subtitle} content={item.content} photo1={item.photoThumb1}
                    photo2={item.photoThumb2} photos={item.photos}/>
                );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <ul style={newsStyles}>
                            {newsListItems}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = News;
