var React = require('react');
var NewsList = require('./NewsList.jsx');

var newsInfo = [
    {
        "id":1,
        "src":"img/youtube-icon.png",
        "maintitle":"Obesity in America",
        "subtitle":"Why are Americans so fat?",
        "content":"Us Americans are fat. On every corner there is a McDonalds or KFC. Michelle Obama wants Americans to become Vegan. Civil war and unres have sprung up due to this debate..."
    },
    {
        "id":2,
        "src":"img/twitter-icon.png",
        "maintitle":"Title Two",
        "subtitle":"Subtitle Two",
        "content":"This is the news content for numer two."
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
                    maintitle={item.maintitle} subtitle={item.subtitle} content={item.content} />
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
