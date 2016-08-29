import React, { Component, PropTypes } from 'react';

var class Header extends Component{
  constructor(props) {
  	super(props);
  	this.props.getAccount();
  	this.state = {
  	  menuOpen: false
  	};
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
  render() {
  	return (
      <div>
        <button onClick={this.toggleMenu.bind(this)}>Toggle Menu</button>
        <menu style={{display: this.state.menuOpen ? "block" : "none"}}>My Menu</menu>
      </div>
  	);
  }
}
Header.propTypes = {
  size: PropTypes.string.isRequired,
  isFixedSize: PropTypes.bool.isRequired
},
Header.DefaultProps = {
  size: 'x-small',
  isFixedSize: false
};

export default Header;
 
  