import React from 'react';
import { getTopics } from '../../utils/api';
import { Link } from '@reach/router';
import { navigate } from "@reach/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';


export default class NewNavBar extends React.Component {

  state = {
    isOpen: false,
    isLoading: true,
    topics: null,
  };

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics, isLoading: false })
    })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick = (order) => {
    navigate('/articles?sort_by=' + order);
  }

  handleLogInUserClick = () => {
    this.props.setUser('jessjelly');
  }

  handleLogOutUserClick = () => {
    this.props.setUser(null);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand >KatNews</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Topics
                </DropdownToggle>
                <DropdownMenu right>
                  {(!this.state.isLoading) && this.state.topics.map(topic => <DropdownItem key={topic.slug}>
                    <Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link>
                  </DropdownItem>
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Articles
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() =>
                    this.handleClick('created_at')}>
                    Most recent
                  </DropdownItem>
                  <DropdownItem onClick={() =>
                    this.handleClick('comment_count')}>
                    Most Comments
                  </DropdownItem>
                  <DropdownItem onClick={() =>
                    this.handleClick('votes')}>
                    Most Votes
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          {(this.props.currentUser !== 'jessjelly') &&
            <Button color="light" onClick={() => this.handleLogInUserClick()}>Login as JessJelly</Button>}
          {(this.props.currentUser === 'jessjelly') &&
            <Button color="light" onClick={() => this.handleLogOutUserClick()}>Log out JessJelly</Button>}
        </Navbar>
      </div>
    );
  }
}