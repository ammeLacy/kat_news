import React from 'react';
import { getArticles } from '../../utils/api';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { navigate } from "@reach/router";
import { Link } from '@reach/router';

const queryString = require('query-string');

export default class ArticleDownButton extends React.Component {
  state = {
    isLoading: true,
    dropdownOpen: false,
  };
  componentDidMount() {
    const queryParams = queryString.parse(this.props.search);
    getArticles(queryParams).then((articles) => {
      this.setState({ isLoading: false })
    })
  }
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

