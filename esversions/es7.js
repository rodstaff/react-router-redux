import React, { Component, PropTypes } from 'react';

export default class Header extends Component{
  static propTypes = {
    size: PropTypes.string.isRequired,
    isFixedSize: PropTypes.bool.isRequired
  };
  static defaultProps = {
    size: 'x-small',
    isFixedSize: false
  };
  state = {
 	menuOpen: false
  };
  // don't need constructors???
  constructor(props) {   
    super(props);
    this.props.getAccount();
  }
  toggleMenu() = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
  render() {
  	return (
      <div>
        <button onClick={this.toggleMenu}>Toggle Menu</button>
        <menu style={{display: this.state.menuOpen ? "block" : "none"}}>My Menu</menu>
      </div>
  	);
  }
}