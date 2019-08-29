import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { navigate } from "@reach/router";
import { Link } from '@reach/router';

export default class ArticleDownButton extends React.Component {

  state = {
    dropdownOpen: false,
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { dropdownOpen } = this.state
    return (
      <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="secondary">
          <Link to={"/articles"}>{this.props.text}</Link>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Articles</DropdownItem>
          <DropdownItem onClick={() => this.handleClick('created_at')}> Date posted</DropdownItem>
          <DropdownItem onClick={() => this.handleClick('votes')}>Most popular articles</DropdownItem>
          <DropdownItem onClick={() => this.handleClick('comment_count')}>Most commented on articles</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown >
    );
  }

  handleClick = (order) => {
    navigate('/articles?sort_by=' + order);
  }
}

