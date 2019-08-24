import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import DropDownButton from './DropDownButton';

export default class NavBar extends React.Component {

  render() {
    return (
      <>
        <Nav id="navBar">
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/articles">Articles</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/topics">Topics</NavLink>
          </NavItem>
          <NavItem>
            <DropDownButton />
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>

      </>
    );
  }
}