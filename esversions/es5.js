var React = require('react');

var Header = React.createClass({
  componentWillMount: function() {
  	this.props.getAccount();
  },

  propTypes: {
  	size: React.propTypes.string.isRequired,
  	isFixedSize: React.propTypes.bool.isRequired
  },
  getDefaultProps: function() {
  	return {
      size: 'x-small',
      isFixedSize: false
  	};
  },
  getInitialState: function() {
  	return {
  	  menuOpen: false
  	};
  },
  toggleMenu: function() {
  	this.setState({ menuOpen: !this.state.menuOpen});
  },
  render: function() {
  	return (
      <div>
        <button onClick={this.toggleMenu.bind(this)}>Toggle Menu</button>
        <menu style={{display: this.state.menuOpen ? "block" : "none"}}>My Menu</menu>
      </div>
  	);
  }

});