import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigate } from '@reach/router';
import { UserConsumer } from '../CurrentUserContext';

class VoteUpdater extends Component {

  state = {
    voteAdjustment: 0
  }

  render() {
    const { voteAdjustment } = this.state;
    const { author, votes } = this.props;
    const votedUp = voteAdjustment > 0;
    const votedDown = voteAdjustment < 0;
    return (
      <>
        <h4>Votes: {votes + voteAdjustment}</h4>
        <UserConsumer>
          {
            ({ user }) => {
              return (
                <>
                  {(user !== undefined && user !== null && user !== author) &&
                    <ButtonGroup id="voteButtons">
                      <Button disabled={votedUp} onClick={() => this.handleClick(1)} ><FontAwesomeIcon icon={faThumbsUp}
                        alt="thumbsUp" />
                      </Button>
                      <Button disabled={votedDown} onClick={() => this.handleClick(-1)}><FontAwesomeIcon icon={faThumbsDown}
                        alt="thumbsDown" /></Button>
                    </ButtonGroup>
                  }
                </>
              )
            }
          }
        </UserConsumer>
      </>);
  }

  handleClick = (vote) => {
    const { updateVotes, object_id } = this.props;
    const { voteAdjustment } = this.state;
    this.setState({ voteAdjustment: voteAdjustment + vote });
    updateVotes(object_id, (vote))
      .catch(error => {
        this.setState({
          voteAdjustment: vote - voteAdjustment
        });
        const { status, statusText } = error.response;
        navigate('/error', { state: { status, statusText } })
      });
  }
}


export default VoteUpdater;