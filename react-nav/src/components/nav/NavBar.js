var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var NavItem = require('./NavItem');
var NavDropdownItem = require('./NavDropdownItem');

var NavBar = React.createClass({
  render: function() {
    var navStyle = {
      WebKitBoxShadow: '0 0 4px rgba(0, 0, 0, 0.4)',
      MozBoxShadow: '0 0 4px rgba(0, 0, 0, 0.4)',
      boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)',
      borderRadius: 0,
      borderColor: 'transparent'
    };
    var titleStyle = {};
    var linkStyle = {};

    if (this.props.bgColor)
      navStyle.background = this.props.bgColor;
    if (this.props.titleColor)
      titleStyle.color = this.props.titleColor;
    if (this.props.linkColor)
      linkStyle.color = this.props.linkColor;

    var renderListItem = function(item, index) {
      return <NavItem key={item.title + index} href={item.link} title={item.title} aStyle={linkStyle} />
    }

    return (
      <div>
          <nav className="navbar navbar-default" style={navStyle}>
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse" aria-expanded="false">
                      <span className="sr-only">Toggle Navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <Link to="/" className="navbar-brand" style={titleStyle}>{this.props.logo || 'Brand Logo'}</Link>
              </div>
              <div className="collape navbar-collapse" id="nav-collapse">
                  <ul className="nav navbar-nav">
                  {this.props.navData.map(renderListItem)}
                  <NavDropdownItem />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = NavBar;
