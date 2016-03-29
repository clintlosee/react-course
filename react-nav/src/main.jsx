var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/nav/NavBar');

var navLinks = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "#"
  },
  {
    title: "Blog",
    link: "#"
  }
];

ReactDOM.render(<NavBar
  bgColor="#FFF" 
  // linkColor="yellow"
  titleColor="#3097d1"
  logo="My Logo"
  navData={navLinks} />, document.getElementById('main'));
