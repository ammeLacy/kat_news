import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigate } from '@reach/router';

class VoteUpdater extends Component {

  state = {
    votes: 0,
    author: null,
    error: null,
    voteUp: false,
    voteDown: false
  }

  componentDidMount() {
    this.setState({
      votes: this.props.votes,
      author: this.props.author
    })
  }

  render() {
    const { author, votes, voteUp, voteDown } = this.state;
    const { currentUser } = this.props;
    return (<>
      <h4>Votes: {votes}</h4>
      {(currentUser !== undefined && currentUser !== null && currentUser !== author) &&
        <ButtonGroup id="voteButtons">
          <Button disabled={voteUp} onClick={() => this.handleClick(1)} ><FontAwesomeIcon icon={faThumbsUp}
            alt="thumbsUp" />
          </Button>
          <Button disabled={voteDown} onClick={() => this.handleClick(-1)}><FontAwesomeIcon icon={faThumbsDown}
            alt="thumbsDown" /></Button>
        </ButtonGroup>
      }
    </>);
  }

  handleClick = (vote) => {
    const { updateVotes, object_id } = this.props;
    const { votes, voteDown, voteUp } = this.state;
    updateVotes(object_id, vote)
      .catch(error => {
        this.setState({
          votes: votes - vote
        });
        const { status, statusText } = error.response;
        navigate('/error', { state: { status, statusText } })
      });
    this.setState({ votes: votes + vote })
    if (vote === 1) {
      if (voteDown) {
        this.setState({ voteDown: false })
      } else {
        this.setState({ voteUp: true })
      }
    }
    if (vote === -1)
      if (voteUp) {
        this.setState({ voteUp: false })
      } else {
        this.setState({ voteDown: true })
      }
  }
}


export default VoteUpdater;