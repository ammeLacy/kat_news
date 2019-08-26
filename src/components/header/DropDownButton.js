import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { getTopics } from '../../utils/api';
import { Link } from '@reach/router';

export default class DropDownButton extends React.Component {
  state = {
    dropdownOpen: false,
    topics: null,
    isLoading: true
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics, isLoading: false })
    })
  }

  render() {
    const { isLoading, topics, dropdownOpen } = this.state
    return (
      <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle} id="nav-dropDownButton">
        <DropdownToggle caret>
          Topics
        </DropdownToggle>
        <DropdownMenu>
          {(!isLoading) && topics.map(topic =>
            <DropdownItem key={topic.slug}>
              <Link to={"/articles?topic=" + topic.slug}>{topic.slug}</Link>
            </DropdownItem>
          )}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
