import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class VoteUpdater extends Component {
  state = {
    votes: 0,
    author: null,
    error: null
  }
  componentDidMount() {
    this.setState({
      votes: this.props.votes,
      author: this.props.author
    })
  }
  render() {
    const { author, votes } = this.state;
    const { currentUser } = this.props;
    return (<>
      <h4>Votes: {votes}</h4>
      {(currentUser !== undefined && currentUser !== null && currentUser !== author) &&
        <ButtonGroup>
          <Button onClick={() => this.handleClick(1)} ><FontAwesomeIcon icon={faThumbsUp}
            alt="thumbsUp" />
          </Button>
          <Button onClick={() => this.handleClick(-1)}><FontAwesomeIcon icon={faThumbsDown}
            alt="thumbsDown" /></Button>
        </ButtonGroup>
      }
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