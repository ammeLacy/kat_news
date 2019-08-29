import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { updateCommentVotes, deleteArticleComment } from '../../utils/api';
import VoteUpdater from '../multiUseComponents/VoteUpdater';


class CommentListCard extends Component {

  state = {
    deleted: false
  }

  render() {
    const { comment, currentUser } = this.props;
    const { comment_id, author } = comment;
    if (this.state.deleted) {
      return (<></>);
    }
    return (
      <div className='commentContainer' >
        {(currentUser !== null && currentUser === author) &&
          <div className="commentButton">
            <Button
              color="secondary"
              size="sm"
              onClick={() => {
                deleteArticleComment(comment_id);
                this.setState({ deleted: true })
              }
              }>
              Delete Comment</Button>
          </div>
        }
        <div className="comment">
          <h2>author: {author}</h2>
          <p>{comment.body}</p>
          <VoteUpdater
            updateVotes={updateCommentVotes}
            object_id={comment_id}
            votes={comment.votes}
            currentUser={currentUser}
            author={author}
          />
          <h3>posted: {comment.created_at} </h3>
        </div>
      </div>
    );
  }
}

export default CommentListCard;