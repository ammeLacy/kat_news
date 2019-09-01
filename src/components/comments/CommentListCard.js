import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { updateCommentVotes, deleteArticleComment } from '../../utils/api';
import VoteUpdater from '../multiUseComponents/VoteUpdater';
import { UserConsumer } from '../CurrentUserContext';
const dateFormat = require('dateformat');

class CommentListCard extends Component {

  state = {
    deleted: false
  }

  render() {
    const { comment_id, author, votes, body, created_at } = this.props.comment;
    if (this.state.deleted) {
      return (<></>);
    }
    return (
      <div className='commentContainer' >
        <div className="comment">
          <h2>author: {author}</h2>
          <p>{body}</p>
          <VoteUpdater
            updateVotes={updateCommentVotes}
            object_id={comment_id}
            votes={votes}
            author={author}
          />
          <UserConsumer>
            {
              ({ user }) => {
                return (<>
                  {(user !== null && user === author) &&
                    <div className="commentButton" >
                      <Button
                        color="secondary" id="deleteComment"
                        size="sm"
                        onClick={() => {
                          deleteArticleComment(comment_id);
                          this.setState({ deleted: true })
                        }
                        }>
                        Delete Comment</Button>
                    </div>
                  }
                </>
                )
              }
            }
          </UserConsumer>
          <p>posted: {dateFormat(created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')} </p>
        </div>
      </div>
    );
  }
}

export default CommentListCard;