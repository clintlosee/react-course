var React = require('react');
var NavBar = require('./nav/NavBar');

var navLinks = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "iOS Course",
    link: "/product/55"
  },
  {
    title: "React Course",
    link: "/product/66"
  }
];

var BasePage = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar bgColor="#FFF" titleColor="#3097d1" logo="My Logo" navData={navLinks} />
        {this.props.children}
      </div>
    );
  }
});

module.exports = BasePage;