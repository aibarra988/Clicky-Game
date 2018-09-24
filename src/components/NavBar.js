import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Clicky Game</NavbarBrand>
          <div>Score: {this.props.score}</div>
          <NavbarBrand href="/" style={{marginLeft: "2em"}}>Click on pictures nonconsecutively to score, else you lose!</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}