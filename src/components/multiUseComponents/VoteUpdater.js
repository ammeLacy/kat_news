import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';


class VoteUpdater extends Component {
  state = {
    votes: 0,
    error: null
  }
  componentDidMount() {
    this.setState({ votes: this.props.votes })
  }
  render() {
    return (<>
      <h4>Votes: {this.state.votes}</h4>
      <ButtonGroup>
        <Button onClick={() => this.handleClick(1)}>Vote up</Button>
        <Button onClick={() => this.handleClick(-1)}>Vote down</Button>
      </ButtonGroup>
      <p>{this.state.error}</p>
    </>);
  }
  handleClick = (vote) => {
    const { updateVotes, object_id } = this.props;
    updateVotes(object_id, vote)
      .catch(error => {
        console.dir(error)
        this.setState({
          error: `${error.response.status} sorry error`,
          votes: this.state.votes - vote
        })
      });
    this.setState({ votes: this.state.votes + vote });
  }
}


export default VoteUpdater;