import React from 'react';
import { getTopics } from '../../utils/api';
import { navigate } from "@reach/router";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import { UserConsumer } from '../CurrentUserContext';
import NavPopularButton from './NavPopularButtons';



export default class NewNavBar extends React.Component {

  state = {
    isOpen: false,
    isLoading: true,
    topics: null,
  };


  componentDidMount() {
    getTopics(10).then((topics) => {
      this.setState({ topics, isLoading: false })
    })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSortedArticlesClick = (order) => {
    navigate('/articles?sort_by=' + order);
  }

  handleTopicsClick = (slug) => {
    navigate('/articles?topic=' + slug);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand id="title">Kat News</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem id="buttonGroup">
                <NavPopularButton />
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Topics
                </DropdownToggle>
                <DropdownMenu right>
                  {(!this.state.isLoading) && this.state.topics.map(topic => <DropdownItem
                    key={topic.slug} onClick={() => this.handleTopicsClick(topic.slug)}>
                    {topic.slug}
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
                    this.handleSortedArticlesClick('created_at')}>
                    Most Recent
                  </DropdownItem>
                  <DropdownItem onClick={() =>
                    this.handleSortedArticlesClick('comment_count')}>
                    Most Comments
                  </DropdownItem>
                  <DropdownItem onClick={() =>
                    this.handleSortedArticlesClick('votes')}>
                    Most Votes
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <UserConsumer>
            {({ changeUser, user }) => {
              return (
                <>
                  {(user !== 'jessjelly') &&
                    <Button color="light" onClick={() => changeUser('jessjelly')}>Login as JessJelly</Button>}
                  {(user === 'jessjelly') &&
                    <Button color="light" onClick={() => changeUser(null)}>Log out JessJelly</Button>}
                </>
              )
            }}
          </UserConsumer>
        </Navbar>
      </div>
    );
  }
}