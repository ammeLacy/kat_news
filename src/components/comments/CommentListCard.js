import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { deleteArticleComment } from '../../utils/api';
import VoteUpdater from '../multiUseComponents/VoteUpdater';
import { updateCommentVotes } from '../../utils/api';


class CommentListCard extends Component {
  state = {
    hideDeleteButton: true
  };
  render() {
    const { comment, currentUser } = this.props;
    const { comment_id, author } = comment;
    return (
      <div className='commentContainer' >
        <div className="comment">
          <h2>author: {author}</h2>
          <p>{comment.body}</p>
          <VoteUpdater updateVotes={updateCommentVotes} object_id={comment_id} votes={comment.votes} currentUser={currentUser} author={author} />
          <h3>posted: {comment.created_at} </h3>
        </div>
        <div className="commentButton">
          <Button color="secondary" size="sm" onClick={() => deleteArticleComment(comment_id)}>
            Delete Comment</Button>
        </div>
      </div>
    );
  }
}

export default CommentListCard;