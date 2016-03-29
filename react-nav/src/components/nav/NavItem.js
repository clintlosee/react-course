var React = require('react');
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
        <a href={this.props.href} style={this.props.aStyle}>{this.props.title}</a>
      </li>
    );
  }
});

module.exports = NavItem;