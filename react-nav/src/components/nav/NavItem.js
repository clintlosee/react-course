var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

var NavItem = React.createClass({
  propTypes: {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    style: PropTypes.object
  },
  getInitialState: function() {
    return {
      hover: false
    };
  },
  mouseOver: function(e) {
    this.setState({hover: true});
  },
  mouseOut: function(e) {
    this.setState({hover: false});
  },
  render: function() {
    return (
      <li className={this.state.hover ? 'active' : ''} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <Link to={this.props.href} style={this.props.aStyle}>{this.props.title}</Link>
      </li>
    );
  }
});

module.exports = NavItem;