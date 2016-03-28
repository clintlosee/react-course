var React = require('react');
var PropTypes = React.PropTypes;

function NavItem(props) {
  return (
    <li><a href={props.href} style={props.aStyle}>{props.title}</a></li>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object
};

module.exports = NavItem;