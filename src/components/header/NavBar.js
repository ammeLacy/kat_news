import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import DropDownButton from './DropDownButton';
import ArticleDropDownButton from './ArticleDropDownButton';
import DefaultUserButton from './DefaultUserButton';



export default class NavBar extends React.Component {

  render() {
    return (
      <>
        <Nav id="navBar">
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <ArticleDropDownButton text='Articles' />
          </NavItem>
          <NavItem>
            <DropDownButton />
          </NavItem>
          <NavItem>
            <DefaultUserButton currentUser={this.props.currentUser} setuser={this.props.setuser} />
          </NavItem>
        </Nav>

      </>
    );
  }
}